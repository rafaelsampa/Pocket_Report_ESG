import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';

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
  const calculateScore = (category) => {
    const valores = answers[category].valores;
    // Soma dos valores das respostas selecionadas
    const somaSelecionadas = valores.reduce((acc, v) => acc + (typeof v === 'number' ? v : 0), 0);
    // Soma dos valores máximos possíveis (cada pergunta tem um maxWeight, normalmente igual ao maior peso possível)
    const maxWeight = Math.max(...valores.filter(v => typeof v === 'number'));
    const somaMaximos = valores.filter(v => typeof v === 'number').length * maxWeight;
    // Fórmula normalizada
    return somaMaximos > 0 ? (somaSelecionadas / somaMaximos) * 5 : 0;
  };

  const scores = {
    Social: calculateScore('Social'),
    Ambiental: calculateScore('Ambiental'),
    Governança: calculateScore('Governança')
  };

  const handleExport = () => {
    Alert.alert(
      'Report Summary',
      `Total Scores:\n
      Social: ${scores.Social.toFixed(1)}/5\n
      Ambiental: ${scores.Ambiental.toFixed(1)}/5\n
      Governança: ${scores.Governança.toFixed(1)}/5`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ESG Report</Text>

      {Object.entries(scores).map(([category, score]) => {
        const evaluation = getScoreText(score);
        return (
          <View key={category} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category}</Text>
            <Text style={styles.scoreText}>Score: {score.toFixed(1)}/5</Text>
            <Text style={styles.levelText}>Level: {evaluation.level}</Text>
            <View style={styles.evaluationContainer}>
              <Text style={styles.subtitle}>Strengths:</Text>
              <Text>{evaluation.strengths}</Text>
              <Text style={styles.subtitle}>Areas to Improve:</Text>
              <Text>{evaluation.improvements}</Text>
            </View>
          </View>
        );
      })}

      <TouchableOpacity style={styles.button} onPress={handleExport}>
        <Text style={styles.buttonText}>View Summary</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  categoryContainer: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f8f8f8'
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 5
  },
  levelText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666'
  },
  evaluationContainer: {
    marginTop: 10
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 4
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