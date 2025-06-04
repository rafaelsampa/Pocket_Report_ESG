import { Icon } from '@rneui/themed';
import React from 'react';
import { Text, View, StyleSheet, Pressable, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import colors from '../constants/colors';
import { supabase } from '../services/supabaseClient';
import { useAuth } from '../auth/context/AuthContext';

export default props => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [reports, setReports] = React.useState([]);

  React.useEffect(() => {
    async function fetchReports() {
      if (!user) return;
      console.log('Buscando reports para user.id:', user.id);
      const { data, error } = await supabase
        .from('report')
        .select('id, title, created_at, score_social, score_ambiental, score_governanca, id_fk_auth') // score_ambiental está correto
        .eq('id_fk_auth', user.id)
        .order('created_at', { ascending: false });
      if (error) {
        console.log('Erro ao buscar reports:', error);
        Alert.alert('Erro ao buscar relatórios', error.message);
      }
      if (data) {
        console.log('Reports encontrados:', data);
        setReports(data);
      }
    }
    fetchReports();
  }, [user]);

  const handleReportPress = (report) => {
    navigation.navigate('ReportView', { report });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          {/* Removido o ícone da esquerda */}
          <View style={styles.iconWrapper} />
          <View style={styles.titleWrapper}>
            <Text style={styles.headerTitle}>Home</Text>
          </View>
          <Pressable style={styles.iconWrapper} onPress={() => navigation.navigate('Settings')}>
            <Icon
              name="settings"
              type="ionicon"
              color='#FFFFFF'
            />
          </Pressable>
        </View>

        <View style={styles.report}>
          <View style={styles.buttonWrapper}>
            <Pressable onPress={() => navigation.navigate('QuestionsScreen01')}>
              <Text style={styles.buttonText}>Start Report</Text>
            </Pressable>
          </View>
        </View>

        {/* Lista de relatórios */}
        <View style={{ flex: 1, width: '100%', padding: 20 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 18, color: colors.turquoise }}>Seus Relatórios</Text>
          {reports.length === 0 && (
            <Text style={{ color: '#888', fontSize: 16 }}>Nenhum relatório encontrado para este usuário.</Text>
          )}
          {reports.map(report => (
            <Pressable
              key={report.id}
              onPress={() => handleReportPress(report)}
              style={({ pressed }) => ({
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderBottomWidth: 1,
                borderColor: '#eee',
                backgroundColor: pressed ? '#e0f2f1' : '#fff',
                borderRadius: 8,
                marginBottom: 8,
                elevation: pressed ? 2 : 0,
              })}
            >
              <Text style={{ fontSize: 16, color: colors.turquoise }}>{report.title}</Text>
              <Text style={{ fontSize: 12, color: '#888' }}>ID FK: {report.id_fk_auth}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.turquoise,
    paddingHorizontal: 10,
    height: 60,
    justifyContent: 'space-between',
  },
  iconWrapper: {
    width: 40,
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
  },
  report: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    padding: 20,
    backgroundColor: colors.turquoise,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20
  }
})