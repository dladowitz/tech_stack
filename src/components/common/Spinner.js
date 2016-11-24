import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={props.size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    alignSelf: 'center',
    flex: 1,
  }
};

export { Spinner };
