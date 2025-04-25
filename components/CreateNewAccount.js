import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { TextInput, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const CreateNewAccount = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [emailerror, setEmailError] = useState('');
  const [passworderror, setPasswordError] = useState('');
  const [confirmPassworderror, setConfirmPasswordError] = useState('');

  const handleLogin = () => {
    let valid = true;

    if (username.trim() === '') {
      setEmailError('Vui lòng nhập tên đăng nhập');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.trim() === '') {
      setPasswordError('Vui lòng nhập mật khẩu');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Vui lòng nhập mật khẩu xác nhận');
      valid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Mật khẩu xác nhận không khớp');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (valid) {
      Alert.alert('Đăng ký thành công', `Tên đăng nhập: ${username}\nMật khẩu: ${password}`, [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Create New Account !!!</Text>

        <TextInput
          label="Enter your email"
          value={username}
          mode="outlined"
          onChangeText={setUsername}
          style={styles.input}
          outlineColor="orange"
          activeOutlineColor="orange"
          theme={{ roundness: 15 }}
          left={<TextInput.Icon icon={'email'} />}
        />
        {emailerror !== '' && (
          <Text style={styles.errorText}>{emailerror}</Text>
        )}

        <TextInput
          label="Password"
          value={password}
          mode="outlined"
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
          outlineColor="orange"
          activeOutlineColor="orange"
          theme={{ roundness: 15 }}
          left={<TextInput.Icon icon={'key'} />}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        {passworderror !== '' && (
          <Text style={styles.errorText}>{passworderror}</Text>
        )}

        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          mode="outlined"
          onChangeText={setConfirmPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
          outlineColor="orange"
          activeOutlineColor="orange"
          theme={{ roundness: 15 }}
          left={<TextInput.Icon icon={'key'} />}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        {confirmPassworderror !== '' && (
          <Text style={styles.errorText}>{confirmPassworderror}</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.backButtonText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};

export default CreateNewAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: '#2196F3',
    textDecorationLine: 'underline',
  },
  errorText: {
    alignSelf: 'flex-start',
    color: 'red',
    marginBottom: 10,
    marginLeft: 10,
  },
});