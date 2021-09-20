import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Link = ({title, fontSize, textAlign}) => {
  return (
    <View>
      <Text style={styles.link(fontSize, textAlign)}>{title}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: (fontSize, textAlign) => ({
    fontSize,
    color: '#7D8797',
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
    textAlign,
  }),
});
