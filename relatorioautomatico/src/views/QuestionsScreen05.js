import React from 'react';
import {View, ScrollView} from 'react-native';
import Question from '../components/Question';

export default props => (
  <ScrollView>
    <View>
      <Question 
        question="Does the composition of your company's Board reflect diversity in terms of gender?"
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />

      <Question 
        question="Are there clear policies in place regarding the skills and expertise required for board members?"
        responses={["No", "Yes"]}
      />

      <Question 
        question="Does your company have a set of key Corporate Governance policies in place?"
        responses={["No", "Yes"]}
      />

      <Question 
        question="Can your company describe its approach to managing relationships with its suppliers, especially SMEs?"
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />

      <Question 
        question="Has your company  established a code of conduct?"
        responses={["No", "Yes"]}
      />

      <Question 
        question="What percentage of your company's suppliers adhere to environmental and social criteria or standards?"
        responses={["0-20%", "21-40%", "41-60%", "61-80%", "81-100%"]}
      />

      <Question 
        question="What percentage of the executives' total renumeration is variable and tied to performance metrics?"
        responses={["0-20%", "21-40%", "41-60%", "61-80%", "81-100%"]}
      />

      <Question 
        question="Does your company measure and report on customer satisfaction?"
        responses={["No", "Yes"]}
      />

      <Question 
        question="Does your company assess and report on employee satisfaction?"
        responses={["No", "Yes"]}
      />
    </View>
  </ScrollView>
)