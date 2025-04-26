import React from 'react';
import {View, ScrollView} from 'react-native';
import Question from '../components/Question';

export default props => (
  <ScrollView>
    <View>
      <Question 
        question="Does your company employ people from other nationalities?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
      />
  
      <Question 
        question="Does your company have  flexible work arrangements in place, such as remote work options, to support employees working part -time?"
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="Does your company have an age-diverse environment?"
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="Does your organization have intiatives in place to ensure equal opportunities for career advancement regardless of age ?"
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="DDoes your company have a gender-diverse environment?"
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="Does your company work to achieve gender balance in leadership roles?"
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="Does your company have any policies regarding diversity and inclusion?"
        responses={["No", "Yes"]}
      />
  
      <Question 
        question="In addition to diversity and inclusion policies, does your organization conduct regular diversity training for employees?"
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="Does your company accommodate family related leave arrangements?"
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="Are family - related leave policies communicated and accesible to all employees?"
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="Is the extent of extra hours worked controlled by your company?"
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="Does your company have any policies regarding work and personal life balance?"
        responses={["No", "Yes"]}
      />
  
      <Question 
        question="Does your company record the number of training hours per employee?"
        responses={["No", "Yes"]}
      />
  
      <Question 
        question="Does your company conduct performance reviews?"
        responses={["No", "Yes"]}
      />
  
      <Question 
        question="Does your company have data protection policies?"
        responses={["No", "Yes"]}
      />
  
      <Question 
        question="Is your company transparent about how it handles and protects employee and customer data?"
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="Does your company take measures related to health and safety?"
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="Health and safety protocols are regularly reviewed and updated to ensure a safe workplace."
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="To the best of my knowledge, my company is involved in community or volunteer projects."
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="To the best of my knowledge, there is a gender pay gap in my organization."
        responses={["To a low extent", "To a slight extent", "To a moderate extent", "To a considerable extent", "To a large extent"]}
      />
  
      <Question 
        question="Does your company measure customer satisfaction?"
        responses={["No", "Yes"]}
      />
  
      <Question 
        question="Does your company seek feedback from customers effectively?"
        responses={["Never", "Rarely", "Sometimes", "Often", "Always"]}
      />
    </View>
  </ScrollView>
)