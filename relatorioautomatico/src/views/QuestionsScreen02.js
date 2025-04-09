import React from 'react';
import {View} from 'react-native';
import Question from '../components/Question';

export default props => (
  <View>
    <Question 
      question="Does your company define its ESG stakeholders (those parties who have the potential
      to influence or be affected by the business)?"
      responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
    />

    <Question 
      question="Does your company communicate periodically with stakeholders?"
      responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
    />

    <Question 
      question="Does your company use social media to communicate with stakeholders?"
      responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
    />
  </View>
)