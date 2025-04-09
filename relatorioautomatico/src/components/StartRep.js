import React from 'react';
import { View, Button } from 'react-native';

export default props => (
  <View style={{flex: 1 }}>

    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      { props.next

      ? <Button 
          title='Start report'
          onPress={() => {
            props.navigation.navigate(props.next)
          }}
        />
      
      : false }
    </View>

    <View style={{ flex: 1 }}>
      {props.children}
    </View>

  </View>
)