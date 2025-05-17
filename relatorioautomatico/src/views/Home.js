import { Icon } from '@rneui/themed';
import React from 'react';
import { Text, View, StyleSheet, Pressable, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import colors from '../constants/colors';

export default props => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable style={styles.iconWrapper}>
            <Icon
              name="menu"
              type="ionicon"
              color='#FFFFFF'
            />
          </Pressable>

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