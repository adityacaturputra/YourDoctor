import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Input, Link, Button, Gap, Loading} from '../../components';
import {ILLogo} from '../../assets';
import {colors, fonts, storeData, useForm} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {useState} from 'react';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        setLoading(false);
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
        console.log('error: ', error);
        setLoading(false);
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
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
      {loading && <Loading />}
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
