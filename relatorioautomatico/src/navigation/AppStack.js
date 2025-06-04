import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../constants/colors';

import Home from '../views/Home';
import QuestionsScreen01 from '../views/QuestionsScreen01';
import QuestionsScreen02 from '../views/QuestionsScreen02';
import QuestionsScreen03 from '../views/QuestionsScreen03';
import QuestionsScreen04 from '../views/QuestionsScreen04';
import QuestionsScreen05 from '../views/QuestionsScreen05';
import Submit from '../views/Submit';
import Settings from '../views/Settings';
import NextBack from '../components/NextBack';
import ReportView from '../views/ReportView';

const Stack = createStackNavigator();

export default function AppStack() {
  // Cada categoria tem um array de respostas, totalSelected e totalMax
  const [answers, setAnswers] = useState({
    Social: { respostas: [null, null, null, null, null], valores: [null, null, null, null, null] },
    Ambiental: { respostas: [null, null, null, null, null, null], valores: [null, null, null, null, null, null] },
    Governança: { respostas: [null, null, null, null, null], valores: [null, null, null, null, null] }
  });

  // Handler para atualizar respostas
  const handleAnswer = (response, weight, category, maxWeight, index) => {
    setAnswers(prev => {
      const updated = { ...prev };
      const respostas = [...updated[category].respostas];
      const valores = [...updated[category].valores];
      respostas[index] = response;
      valores[index] = weight;
      updated[category] = {
        ...updated[category],
        respostas,
        valores
      };
      return updated;
    });
  };

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: colors.turquoise },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

      <Stack.Screen name="QuestionsScreen01" options={{ title: "ESG Questions - Social" }}>
        {props => (
          <NextBack
            {...props}
            next="QuestionsScreen02"
            answers={answers}
            numQuestions={5}
            category="Social"
          >
            <QuestionsScreen01 onAnswer={handleAnswer} answers={answers} />
          </NextBack>
        )}
      </Stack.Screen>

      <Stack.Screen name="QuestionsScreen02" options={{ title: "ESG Questions - Social" }}>
        {props => (
          <NextBack
            {...props}
            next="QuestionsScreen03"
            answers={answers}
            numQuestions={5}
            category="Social"
          >
            <QuestionsScreen02 onAnswer={handleAnswer} answers={answers} />
          </NextBack>
        )}
      </Stack.Screen>

      <Stack.Screen name="QuestionsScreen03" options={{ title: "ESG Questions - Environmental" }}>
        {props => (
          <NextBack
            {...props}
            next="QuestionsScreen04"
            answers={answers}
            numQuestions={6}
            category="Ambiental"
          >
            <QuestionsScreen03 onAnswer={handleAnswer} answers={answers} />
          </NextBack>
        )}
      </Stack.Screen>

      <Stack.Screen name="QuestionsScreen04" options={{ title: "ESG Questions - Environmental" }}>
        {props => (
          <NextBack
            {...props}
            next="QuestionsScreen05"
            answers={answers}
            numQuestions={6}
            category="Ambiental"
          >
            <QuestionsScreen04 onAnswer={handleAnswer} answers={answers} />
          </NextBack>
        )}
      </Stack.Screen>

      <Stack.Screen name="QuestionsScreen05" options={{ title: "ESG Questions - Governance" }}>
        {props => (
          <NextBack
            {...props}
            next="Submit"
            answers={answers}
            numQuestions={5}
            category="Governança"
          >
            <QuestionsScreen05 onAnswer={handleAnswer} answers={answers} />
          </NextBack>
        )}
      </Stack.Screen>

      <Stack.Screen name="Submit" options={{ title: "ESG Report" }}>
        {props => <Submit {...props} answers={answers} />}
      </Stack.Screen>

      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name="ReportView" component={ReportView} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}