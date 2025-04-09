import React from 'react';
import {Text, Image} from 'react-native';
import CoreText from '../components/CoreText'

export default props => (
  <CoreText>
    Report sent
    <Image 
      source={require('../images/check.png')}
      style={{width: 20, height: 20}}
    />
  </CoreText>
)