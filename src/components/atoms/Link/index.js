import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/colors';

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
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    textDecorationLine: 'underline',
    textAlign,
  }),
});
