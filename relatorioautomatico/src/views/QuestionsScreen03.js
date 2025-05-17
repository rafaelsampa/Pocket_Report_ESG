import React from 'react';
import { ScrollView } from 'react-native';
import Question from '../components/Question';

export default function QuestionsScreen03({ onAnswer, answers }) {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Question
        question="Does your company monitor changes in electricity usage over time?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={0}
      />
      <Question
        question="Does your company measure levels of fuel consumption (for vehicles and other uses) and monitor changes monthly / anually?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={1}
      />
      <Question
        question="Does your company measure levels of energy consumption for heating and cooling?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={2}
      />
      <Question
        question="Does your company measure water usage?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={3}
      />
      <Question
        question="Does your company use a specific indicator for water usage?"
        responses={["No", "Yes"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={4}
      />
      <Question
        question="Does your company conduct a CO2 emissions analysis for its site of production?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={5}
      />
      <Question
        question="Does your company have a policy to reduce CO2 emissions?"
        responses={["No", "Yes"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={6}
      />
      <Question
        question="Does your company calculate the waste weight produced per year?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={7}
      />
      <Question
        question="Does your company measure the weight of recycled waste?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={8}
      />
      <Question
        question="Does your company have a policy for waste management and recycle practices?"
        responses={["No", "Yes"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={9}
      />
      <Question
        question="Does your company hold an Environmental management system certification?"
        responses={["No", "Yes"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={10}
      />
      <Question
        question="Does your company allocate a budget for environmental activities and projects?"
        responses={["No", "Yes"]}
        category="Ambiental"
        onAnswer={onAnswer}
        index={11}
      />
    </ScrollView>
  );
}