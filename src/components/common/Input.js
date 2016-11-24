import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        placeholder={props.placeholder}
        value={props.value}
        style={styles.inputStyle}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    height: 40,
    flex: 1,
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  inputStyle: {
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    paddingLeft: 5,
    paddingRight: 5,
  }
};

export { Input };
