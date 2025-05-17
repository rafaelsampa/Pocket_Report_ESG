import React from 'react';
import { ScrollView } from 'react-native';
import Question from '../components/Question';

export default function QuestionsScreen02({ onAnswer, answers }) {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Question
        question="Does your company have a policy for employee health and safety?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Social"
        onAnswer={onAnswer}
        index={0}
      />
      <Question
        question="Does your company offer benefits such as health insurance or wellness programs?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Social"
        onAnswer={onAnswer}
        index={1}
      />
      <Question
        question="Does your company have a process for employees to report grievances?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Social"
        onAnswer={onAnswer}
        index={2}
      />
      <Question
        question="Does your company measure employee satisfaction?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Social"
        onAnswer={onAnswer}
        index={3}
      />
      <Question
        question="Does your company support work-life balance initiatives?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Social"
        onAnswer={onAnswer}
        index={4}
      />
    </ScrollView>
  );
}