import React from 'react';
import { ScrollView } from 'react-native';
import Question from '../components/Question';

export default function QuestionsScreen01({ onAnswer, answers }) {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Question
        question="Does your company have a code of conduct for employees?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Social"
        onAnswer={onAnswer}
        index={0}
      />
      <Question
        question="Does your company provide training on social responsibility?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Social"
        onAnswer={onAnswer}
        index={1}
      />
      <Question
        question="Does your company have policies to promote diversity and inclusion?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Social"
        onAnswer={onAnswer}
        index={2}
      />
      <Question
        question="Does your company support local community initiatives?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Social"
        onAnswer={onAnswer}
        index={3}
      />
      <Question
        question="Does your company have a policy to prevent discrimination?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Social"
        onAnswer={onAnswer}
        index={4}
      />
    </ScrollView>
  );
}