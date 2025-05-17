import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Question = ({ question, responses, category, onAnswer, index }) => {
  const [selectedResponse, setSelectedResponse] = useState("");

  // Defina os pesos conforme o número de respostas (ajuste se necessário)
  const weights = responses.length === 2 ? [0, 1] : [0, 1, 2, 3, 4];

  const handleSelect = (itemValue) => {
    if (itemValue === "") return;
    setSelectedResponse(itemValue);
    const idx = responses.indexOf(itemValue);
    const weight = weights[idx];
    const maxWeight = Math.max(...weights);
    onAnswer(itemValue, weight, category, maxWeight, index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
      <Picker
        selectedValue={selectedResponse}
        onValueChange={handleSelect}
        style={styles.picker}
      >
        <Picker.Item label="Select an option" value="" enabled={false} />
        {responses.map((response, idx) => (
          <Picker.Item key={idx} label={response} value={response} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10
  },
  questionText: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold'
  },
  picker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8
  }
});

export default Question;