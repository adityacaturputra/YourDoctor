import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Input, Link, Button, Gap} from '../../components';
import {ILLogo} from '../../assets';
import {
  colors,
  fonts,
  storeData,
  useForm,
  showError,
  showSuccess,
} from '../../utils';
import {Fire} from '../../config';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        dispatch({type: 'SET_LOADING', value: false});

        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(res => {
            if (res.val()) {
              storeData('user', res.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(error => {
        dispatch({type: 'SET_LOADING', value: false});

        showError(error.message);
      });
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={10} />
          <Link title="Forgot My Password" fontSize={12} />
          <Gap height={40} />
          <Button title="Sign In" onPress={login} />
          <Gap height={30} />
          <Link
            title="Create New Account"
            textAlign="center"
            fontSize={16}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 160,
  },
});
