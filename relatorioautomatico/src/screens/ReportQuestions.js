import React from 'react'
import { View, Text, Button } from 'react-native'
import { supabase } from '../services/supabaseClient'

export default function ReportQuestions({ navigation, route }) {
  const { company } = route.params

  async function finishReport(answers) {
    const user = supabase.auth.user()
    const year = new Date().getFullYear()
    const { data, error } = await supabase
      .from('report')
      .insert([{
        id_fk_auth: user.id,
        title: `${year} Report – ${company}`,
        company,
        year,
        answers,
        // outros campos necessários
      }])
      .single()
    if (!error) {
      navigation.navigate('ReportResult', { company, year, answers })
    }
  }

  return (
    <View>
      <Text>Report Questions</Text>
      {/* Renderize suas perguntas aqui */}
      <Button title="Finish Report" onPress={() => finishReport(/* suas respostas aqui */)} />
    </View>
  )
}