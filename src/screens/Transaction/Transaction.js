import {View, Text, TouchableOpacity} from 'react-native';
import * as React from 'react';

import Feather from 'react-native-vector-icons/Feather';

import {COLORS, SIZES, FONTS} from '~/constants';

import {MainLayout} from '~/components';

const Transaction = () => {
  return (
    <MainLayout
      title="Daily transaction"
      titleStyle={{color: COLORS.black}}
      headerProps={{
        containerStyle: {
          zIndex: 3,
        },
        rightComponent: (
          <TouchableOpacity onPress={() => {}}>
            <Feather name="search" size={SIZES.h2} color={COLORS.black} />
          </TouchableOpacity>
        ),
      }}></MainLayout>
  );
};

export default Transaction;
