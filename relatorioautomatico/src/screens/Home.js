import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { supabase } from '../services/supabaseClient'

export default function Home() {
  const navigation = useNavigation()
  const [reports, setReports] = useState([])

  useEffect(() => {
    // Buscar relatórios do usuário logado
    async function fetchReports() {
      const user = supabase.auth.user()
      if (!user) return
      const { data, error } = await supabase
        .from('reports')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      if (!error) setReports(data)
    }
    fetchReports()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {/* ...existing header code... */}
      {/* Remover o ícone da esquerda ou direita que não faz nada */}
      <Button
        title="Começar Relatório"
        onPress={() => navigation.navigate('CompanyName')}
      />
      {/* Lista de relatórios */}
      <FlatList
        data={reports}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.title}</Text>
          </View>
        )}
        ListHeaderComponent={<Text style={{ fontWeight: 'bold', marginTop: 20 }}>Seus Relatórios</Text>}
      />
      {/* ...existing code... */}
    </View>
  )
}