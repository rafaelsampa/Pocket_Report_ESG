import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import RadarChartSVG from '../components/RadarChartSVG';

const getScoreText = (score) => {
  if (score <= 1.67) return {
    level: 'Basic',
    strengths: 'Shows initial awareness of ESG principles',
    improvements: 'Needs fundamental ESG policy implementation'
  };
  if (score <= 3.33) return {
    level: 'Intermediate',
    strengths: 'Has established basic ESG practices',
    improvements: 'Could enhance systematic approach to ESG'
  };
  return {
    level: 'Advanced',
    strengths: 'Demonstrates strong ESG commitment',
    improvements: 'Can focus on innovation and leadership in ESG'
  };
};

export default function Submit({ answers }) {
  // Calcula o score conforme a fórmula definida
  const calculateScore = (category) => {
    const valores = answers[category]?.valores || [];
    const somaSelecionadas = valores.reduce((acc, v) => acc + (typeof v === 'number' ? v : 0), 0);
    const maxWeight = Math.max(...valores.filter(v => typeof v === 'number'), 1);
    const somaMaximos = valores.filter(v => typeof v === 'number').length * maxWeight;
    return somaMaximos > 0 ? (somaSelecionadas / somaMaximos) * 5 : 0;
  };

  const scores = {
    Social: calculateScore('Social'),
    Ambiental: calculateScore('Ambiental'),
    Governança: calculateScore('Governança')
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ESG Report</Text>

      {/* Gráfico teia SVG */}
      <RadarChartSVG scores={scores} />

      {/* Cards de score e textos */}
      {Object.entries(scores).map(([category, score]) => {
        const evaluation = getScoreText(score);
        return (
          <View key={category} style={styles.card}>
            <Text style={styles.cardTitle}>{category}</Text>
            <Text style={styles.scoreText}>Score: {score.toFixed(2)} / 5</Text>
            <Text style={styles.levelText}>Level: {evaluation.level}</Text>
            <Text style={styles.strengthsTitle}>Strengths:</Text>
            <Text style={styles.strengths}>{evaluation.strengths}</Text>
            <Text style={styles.improvementsTitle}>Areas to Improve:</Text>
            <Text style={styles.improvements}>{evaluation.improvements}</Text>
          </View>
        );
      })}

      {/* Botão de exportação ou outras ações, se houver */}
      {/* <TouchableOpacity style={styles.button} onPress={...}>
        <Text style={styles.buttonText}>Export Report</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16
  },
  card: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 18,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#2196F3'
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 4
  },
  levelText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#666'
  },
  strengthsTitle: {
    fontWeight: 'bold',
    marginTop: 8
  },
  strengths: {
    marginBottom: 6
  },
  improvementsTitle: {
    fontWeight: 'bold',
    marginTop: 8
  },
  improvements: {
    marginBottom: 6
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});