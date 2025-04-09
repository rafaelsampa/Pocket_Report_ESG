import React from 'react';
import {Text, View} from 'react-native';

export default props => (
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }}>

    <Text style={{fontSize: 25}}>
      {props.children}
    </Text>
  </View>
)