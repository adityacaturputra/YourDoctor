import React from 'react';
import {StyleSheet, View} from 'react-native';

const Gap = ({height, width}) => {
  return <View style={styles.box(height, width)} />;
};

export default Gap;

const styles = StyleSheet.create({
  box: (height, width) => ({
    width,
    height,
  }),
});
