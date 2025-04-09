import React from 'react';
import {View} from 'react-native';
import Question from '../components/Question';

export default props => (
  <View>
    <Question 
      question="What percentage of your company's suppliers adhere to environmental and social criteria or standards?"
      responses={["0-20%", "21-40%", "41-60%", "61-80%", "81-100%"]}
    />

    <Question 
      question="Can your company describe its approach to managing relationships with its suppliers, especially SMEs?"
      responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
    />

    <Question 
      question="Does your company assess and report on employee satisfaction?"
      responses={["No", "Yes"]}
    />
  </View>
)