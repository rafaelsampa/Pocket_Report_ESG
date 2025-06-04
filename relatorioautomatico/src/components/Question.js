import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Platform, Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Question = ({ question, responses, category, onAnswer, index }) => {
  const [selectedResponse, setSelectedResponse] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  // Defina os pesos conforme o número de respostas (ajuste se necessário)
  const weights = responses.length === 2 ? [0, 1] : [0, 1, 2, 3, 4];

  const handleSelect = (itemValue) => {
    if (itemValue === "") return;
    setSelectedResponse(itemValue);
    setShowPicker(false);
    const idx = responses.indexOf(itemValue);
    const weight = weights[idx];
    const maxWeight = Math.max(...weights);
    onAnswer(itemValue, weight, category, maxWeight, index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
      {Platform.OS === "android" ? (
        // Android: Picker nativo, já abre ao clicar no retângulo
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedResponse}
            onValueChange={handleSelect}
            style={styles.picker}
            prompt={question}
          >
            <Picker.Item label="Select an option" value="" enabled={false} />
            {responses.map((response, idx) => (
              <Picker.Item key={idx} label={response} value={response} />
            ))}
          </Picker>
        </View>
      ) : (
        // iOS: Retângulo clicável abre modal com Picker
        <>
          <Pressable
            style={styles.pickerWrapper}
            onPress={() => setShowPicker(true)}
            accessibilityRole="button"
          >
            <Text style={selectedResponse ? styles.selectedText : styles.placeholderText}>
              {selectedResponse || "Select an option"}
            </Text>
          </Pressable>
          <Modal
            visible={showPicker}
            transparent
            animationType="slide"
            onRequestClose={() => setShowPicker(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.pickerModal}>
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
                <Pressable style={styles.closeArea} onPress={() => setShowPicker(false)}>
                  <Text style={styles.closeText}>Fechar</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </>
      )}
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
    padding: Platform.OS === "android" ? 0 : 14,
    justifyContent: 'center',
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedText: {
    fontSize: 16,
    color: '#333',
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  pickerModal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 10,
    elevation: 10,
  },
  picker: {
    width: '100%',
    backgroundColor: '#fff',
  },
  closeArea: {
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#eee',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  closeText: {
    color: '#397992',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default Question;