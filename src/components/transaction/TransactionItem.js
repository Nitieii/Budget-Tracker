import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';

import {NumericFormat} from 'react-number-format';

import {fDateTime} from '~/utils/formatTime';
import {COLORS, SIZES, FONTS} from '~/constants';

const TransactionItem = ({item, onPress}) => {
  const {amount, category, date, description, type} = item;

  return (
    <TouchableOpacity style={styles.container(SIZES, COLORS)} onPress={onPress}>
      <Image source={require('~/assets/icons/categories/eating.png')} />

      <View style={styles.description(FONTS)}>
        <Text style={{...FONTS.body3}} numberOfLines={2}>
          {description}
        </Text>
        <Text style={{...FONTS.body5, color: COLORS.gray}}>
          {fDateTime(date)}
        </Text>
      </View>

      <NumericFormat
        value={amount}
        displayType={'text'}
        thousandSeparator={true}
        suffix={'đ'}
        prefix={type === 'Expense' ? '-' : '+'}
        renderText={value => (
          <Text
            style={{
              ...FONTS.body3,
              color: type == 'Expense' ? COLORS.primary : COLORS.lightGreen,
            }}>
            {value}
          </Text>
        )}
      />
    </TouchableOpacity>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: (SIZES, COLORS) => ({
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: SIZES.padding / 2,
    borderBottomWidth: 0.2,
    borderBottomColor: COLORS.lightGray,
  }),

  description: FONTS => ({
    flex: 1,
    marginHorizontal: SIZES.padding / 2,
  }),
});
