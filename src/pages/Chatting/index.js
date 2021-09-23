import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';

const Chatting = ({navigation}) => {
  return (
    <View>
      <Header
        type="dark"
        title="Nairobi Putri Hayza"
        onPress={() => navigation.goBack()}
      />
      <Text>Senin, 21 Maret, 2020</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({});
