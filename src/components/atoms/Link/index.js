import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/colors';

const Link = ({title, fontSize, textAlign, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link(fontSize, textAlign)}>{title}</Text>
    </TouchableOpacity>
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
