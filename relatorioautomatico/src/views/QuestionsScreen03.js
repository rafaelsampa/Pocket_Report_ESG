import React from 'react';
import {View} from 'react-native';
import Question from '../components/Question';

export default props => (
  <View>
    <Question 
      question="Does your company measure levels of fuel consumption (for vehicles and other uses)
      and monitor changes monthly / anually?"
      responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
    />

    <Question 
      question="Does your company measure water usage?"
      responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
    />

    <Question 
      question="Does your company have a policy to reduce CO2 emissions?"
      responses={["No", "Yes"]}
    />
  </View>
)