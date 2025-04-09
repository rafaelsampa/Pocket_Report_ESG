import React from 'react';
import {View} from 'react-native';
import Question from '../components/Question';

export default props => (
  <View>
    <Question 
      question="Does your company evaluate measures that would improve its contribution to society?"
      responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
    />

    <Question 
      question="Does your company identify best practice corporate governance issues to maintain regulatory compliance?"
      responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
    />

    <Question 
      question="Does your company rate the relevance of these ESG options (from low importance to high importance)
      and prioritise appropriate action?"
      responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
    />
  </View>
)