import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', success: '', loading: false }

  onButtonPress() {
    this.setState({ error: '', success: '', loading: true });
    console.log('Attempting to login via firebase');

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.onLoginSuccess())
      .catch(() => this.createUser());
  }

  onLoginSuccess() {
    this.setState({
      loading: false,
      error: '',
      email: '',
      password: '',
    });
  }

  createUser() {
    console.log('Attempting to create user via firebase');
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.onLoginSuccess())
      .catch(() => this.setState({ error: 'Log In Error', loading: false }));
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
       Login
     </Button>
   );
  }

  render() {
    console.log('State', this.state);

    return (
      <View>
        <Card>
          <CardSection>
            <Input
              value={this.state.email}
              label={'Email'}
              placeholder={'abourdain@gmail.com'}
              onChangeText={(text) => this.setState({ email: text })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              value={this.state.password}
              label={'Password'}
              placeholder={'sushi1000'}
              onChangeText={(text) => this.setState({ password: text })}
            />
          </CardSection>

          <Text style={styles.errorStyle}>{this.state.error}</Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
    padding: 10,
  },
};

export default LoginForm;
