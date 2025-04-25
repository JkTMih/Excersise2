import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleResetPassword = () => {
    if (!email.trim()) {
      setEmailError('Vui lòng nhập email đăng ký');
      return;
    }
    
    setEmailError('');
    Alert.alert('Thành công', `Mã xác nhận đã được gửi đến: ${email}`, [
      { 
        text: 'OK', 
        onPress: () => navigation.navigate('Login')
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset your password</Text>

      <TextInput
        label="Enter your email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="email" />}
        theme={{ roundness: 10 }}
      />
      {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleResetPassword}
      >
        <Text style={styles.buttonText}>Send reset email</Text>
      </TouchableOpacity>

      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.backButtonText}>Go back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#2196F3',
    textDecorationLine: 'underline',
  },
  errorText: {
    alignSelf: 'flex-start',
    color: 'red',
    marginBottom: 10,
  },
});

export default ForgotPassword;