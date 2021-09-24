import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor4} from '../../assets';
import {List} from '../../components';
import {colors, fonts} from '../../utils';

const Messages = () => {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor4,
      name: 'Alexander Jannie',
      desc: 'Baik Bu, terima kasih banyak atas wa...',
    },
    {
      id: 2,
      profile: DummyDoctor1,
      name: 'Alexander Jannie',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: DummyDoctor2,
      name: 'Alexander Jannie',
      desc: 'Oke menurut bapak bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => (
          <List
            profile={doctor.profile}
            key={doctor.id}
            name={doctor.name}
            desc={doctor.desc}
          />
        ))}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
