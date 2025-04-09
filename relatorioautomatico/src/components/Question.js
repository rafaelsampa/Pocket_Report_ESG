import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Question = ({ question, responses }) => {
    const [selectedValue, setSelectedValue] = useState(""); // Estado para armazenar a escolha

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>{question}</Text>

            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                style={{ height: 50, width: "100%", backgroundColor: "#f0f0f0" }}
            >
                <Picker.Item label="Select an option" value="" />
                {responses.map((response, index) => (
                    <Picker.Item key={index} label={response} value={response} />
                ))}
            </Picker>
        </View>
    );
};

export default Question;
