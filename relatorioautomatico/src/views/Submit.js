import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { supabase } from '../services/supabaseClient';
import { useAuth } from '../auth/context/AuthContext';
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

export default function Submit({ answers, navigation, route }) {
  const { user } = useAuth();
  const [companyName, setCompanyName] = useState('');

  // Buscar nome da empresa na tabela users pelo id do usuário
  useEffect(() => {
    async function fetchCompanyName() {
      if (!user) return;
      const { data, error } = await supabase
        .from('users')
        .select('CompanyName')
        .eq('id', user.id)
        .single();
      if (data && data.CompanyName) {
        setCompanyName(data.CompanyName);
      } else {
        setCompanyName(user.email || 'Empresa');
      }
    }
    fetchCompanyName();
  }, [user]);

  // Se não houver usuário, não permita salvar
  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Usuário não autenticado</Text>
      </View>
    );
  }

  const year = new Date().getFullYear();
  const title = `${year} Report – ${companyName}`;

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

  const handleSave = async () => {
    if (!user) {
      Alert.alert('Usuário não autenticado');
      return;
    }
    console.log('Tentando salvar relatório. user.id:', user.id);

    const { error } = await supabase
      .from('report')
      .insert([{
        score_social: scores.Social,
        score_ambiental: scores.Ambiental,
        score_governanca: scores.Governança,
        title,
        id_fk_auth: user.id // <-- ENVIE EXPLICITAMENTE!
      }]);
    if (error) {
      console.log('Erro completo:', error);
      Alert.alert('Erro ao salvar relatório', error.message);
    } else {
      Alert.alert('Relatório salvo com sucesso!');
      navigation.navigate('Home');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{companyName}</Text>
      <RadarChartSVG scores={scores} size={300} />
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
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar esse relatório</Text>
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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#397992',
    letterSpacing: 1,
  },
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
  button: {
    backgroundColor: '#397992',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  }
});