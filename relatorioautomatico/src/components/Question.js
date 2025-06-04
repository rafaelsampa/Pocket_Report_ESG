import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Question = ({ question, responses, category, onAnswer, index }) => {
  const [selectedResponse, setSelectedResponse] = useState("");
  const [pickerOpen, setPickerOpen] = useState(false);

  // Defina os pesos conforme o número de respostas (ajuste se necessário)
  const weights = responses.length === 2 ? [0, 1] : [0, 1, 2, 3, 4];

  const handleSelect = (itemValue) => {
    if (itemValue === "") return;
    setSelectedResponse(itemValue);
    setPickerOpen(false);
    const idx = responses.indexOf(itemValue);
    const weight = weights[idx];
    const maxWeight = Math.max(...weights);
    onAnswer(itemValue, weight, category, maxWeight, index);
  };

  // Permite abrir o Picker ao clicar em qualquer parte do retângulo, mesmo antes de selecionar
  const handleOpenPicker = () => setPickerOpen(true);

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
      <Pressable onPress={handleOpenPicker} style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedResponse}
          onValueChange={handleSelect}
          style={styles.picker}
          enabled={pickerOpen}
          onFocus={handleOpenPicker}
          dropdownIconColor="#397992"
        >
          <Picker.Item label="Select an option" value="" enabled={false} />
          {responses.map((response, idx) => (
            <Picker.Item key={idx} label={response} value={response} />
          ))}
        </Picker>
        {/* Overlay para abrir o Picker ao clicar em qualquer lugar, enquanto não está aberto */}
        {!pickerOpen && (
          <View style={StyleSheet.absoluteFillObject} pointerEvents="box-only" />
        )}
      </Pressable>
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
  pickerWrapper: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden'
  },
  picker: {
    width: '100%',
    color: '#333'
  }
});

export default Question;