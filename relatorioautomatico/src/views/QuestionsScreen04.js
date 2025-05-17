import React from 'react';
import { ScrollView } from 'react-native';
import Question from '../components/Question';

export default function QuestionsScreen04({ onAnswer, answers }) {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Question
        question="Does your company consider environmental aspects when selecting suppliers?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={0}
      />
      <Question
        question="Does your company have a strategy to reduce its environmental impact?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={1}
      />
      <Question
        question="Does your company communicate its environmental performance to stakeholders?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={2}
      />
      <Question
        question="Does your company have specific environmental goals and targets?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={3}
      />
      <Question
        question="Does your company invest in environmental training for employees?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={4}
      />
      <Question
        question="Does your company track and report its carbon footprint?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={5}
      />
    </ScrollView>
  );
}