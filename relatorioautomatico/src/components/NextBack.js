import React from 'react';
import { View, Button } from 'react-native';

export default props => (
  <View style={{
    flex: 1,
    flexDirection: "column-reverse"
  }}>

    <View>
      { props.next

      ? <Button 
          title='Next'
          onPress={() => {
            props.navigation.navigate(props.next)
          }}
        />
      
      : <Button
          title='Submit'
          onPress={() => {
            props.navigation.navigate(props.submit)
          }}
        />
      }
    </View>

    <View style={{ flex: 1 }}>
      {props.children}
    </View>

  </View>
)
