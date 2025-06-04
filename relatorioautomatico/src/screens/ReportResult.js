import React from 'react'
import { View, Text } from 'react-native'

export default function ReportResult({ route }) {
  const { company, year, answers } = route.params

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        {year} Report – {company}
      </Text>
      {/* ...grafo de teia... */}
      {/* ...existing code... */}
    </View>
  )
}