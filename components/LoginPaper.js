import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'orange',
    accent: 'orange',
  },
};

const LoginScreen1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const navigation = useNavigation();
  const [emailerror, setEmailError] = useState('');
  const [passworderror, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const handleLogin = () => {
    let valid = true;

    if (username.trim() === '') {
      setEmailError('Vui lòng nhập email');
      valid = false;
    } else if (!validateEmail(username)) {
      setEmailError('Email không hợp lệ. Vui lòng định dạng lại @gmail.com!');
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

    if (valid) {
      Alert.alert('Đăng nhập thành công', `Email: ${username}\nMật khẩu: ${password}`);
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Image
          source={require('.././assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome Back!</Text>

        <TextInput
          label="Enter your email"
          value={username}
          mode="outlined"
          onChangeText={setUsername}
          style={styles.input}
          outlineColor="orange"
          activeOutlineColor="orange"
          theme={{ roundness: 15 }}
          left={<TextInput.Icon icon="email" color="black" />}
          error={emailerror !== ''}
        />
        {emailerror !== '' && <Text style={styles.errorText}>{emailerror}</Text>}

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
          left={<TextInput.Icon icon="key" color="black" />}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          error={passworderror !== ''}
        />
        {passworderror !== '' && <Text style={styles.errorText}>{passworderror}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('CreateNewAccount')}
          style={styles.link}>
          <Text style={styles.linkText}>Create a new account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotMyPassword')}
          style={styles.link}>
          <Text style={styles.linkText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    alignSelf: 'flex-start',
    color: 'red',
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 12,
  },
  link: {
    marginTop: 15,
  },
  linkText: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
  },
});

export default LoginScreen1;