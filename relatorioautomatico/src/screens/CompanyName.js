import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function CompanyName({ route }) {
  const [company, setCompany] = useState('')
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Digite o nome da sua empresa:</Text>
      <TextInput
        value={company}
        onChangeText={setCompany}
        placeholder="Nome da empresa"
        style={{ borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 20 }}
      />
      <Button
        title="Avançar"
        onPress={() => navigation.navigate('ReportQuestions', { company })}
        disabled={!company}
      />
    </View>
  )
}
