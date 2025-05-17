import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function NextBack({ children, navigation, next, answers, numQuestions, category }) {
  const validateAnswers = () => {
    // Busca o array de respostas da categoria atual
    const respostas = answers[category]?.respostas || [];
    // Verifica se todas as perguntas foram respondidas (nenhum null ou string vazia)
    if (respostas.length < numQuestions || respostas.some(r => r === null || r === "")) {
      Alert.alert(
        "Incomplete Answers",
        "Please answer all questions before proceeding.",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  const handleNavigation = () => {
    if (validateAnswers()) {
      navigation.navigate(next);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Next"
          onPress={handleNavigation}
          color={colors.turquoise}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#fff',
  }
});