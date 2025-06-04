import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RadarChartSVG from './RadarChartSVG';

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

export default function ReportView({ route }) {
  const navigation = useNavigation();
  const { report } = route.params;

  // Proteção contra campos nulos/undefined
  const scores = {
    Social: report.score_social ?? 0,
    Ambiental: report.score_ambiental ?? 0,
    Governança: report.score_governanca ?? 0,
  };

  return (
    <ScrollView style={styles.container}>
      {/* Botão de voltar mais abaixo */}
      <View style={styles.backButtonContainer}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>{"< Voltar"}</Text>
        </Pressable>
      </View>
      {/* Título */}
      <Text style={styles.title}>{report.title || 'Relatório ESG'}</Text>
      {/* Gráfico de teia */}
      <RadarChartSVG scores={scores} size={300} />
      {/* Cards dos scores */}
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  backButtonContainer: { alignItems: 'flex-start', marginBottom: 10 },
  backButton: { paddingVertical: 6, paddingHorizontal: 10 },
  backButtonText: { color: '#397992', fontWeight: 'bold', fontSize: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginTop: 8, marginBottom: 24, textAlign: 'center' },
  categoryContainer: {
    marginBottom: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 14,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#397992'
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
  scoresContainer: { alignItems: 'center' },
  scoreTextSimple: { fontSize: 18, marginVertical: 4 }
});
