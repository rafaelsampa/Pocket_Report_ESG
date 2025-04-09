import React from 'react';
import {View} from 'react-native';
import Question from '../components/Question';

export default props => (
  <View>
    <Question 
      question="Does your company seek feedback from customers effectively?"
      responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
    />

    <Question 
      question="Is the extent of extra hours worked controlled by your company?"
      responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
    />

    <Question 
      question="Does your company have data protection policies?"
      responses={["No", "Yes"]}
    />
  </View>
)