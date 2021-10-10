import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc, photo, isEdit, onPress}) => {
  return (
    <View style={styles.container}>
      {isEdit ? (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          {!name && !desc && <IconRemovePhoto style={styles.removePhoto} />}
        </TouchableOpacity>
      ) : (
        <View style={styles.borderProfile}>
          <Image source={photo} style={styles.avatar} />
          {!name && !desc && <IconRemovePhoto style={styles.removePhoto} />}
        </View>
      )}
      {name && <Text style={styles.name}>{name}</Text>}
      {desc && <Text style={styles.profession}>{desc}</Text>}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
  removePhoto: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});
