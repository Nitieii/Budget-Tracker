import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {FlashList} from '@shopify/flash-list';

import {COLORS, SIZES, FONTS} from '~/constants';
import {useDate} from '~/hooks';

import {MainLayout, TransactionItem} from '~/components';

import transactions from '~/data/transactions';

const Transaction = ({navigation}) => {
  const {searchMode, setSearchMode} = useDate();

  const navigateTransactionDetails = item => {
    navigation.navigate('TransactionDetails', {transaction: item});
  };

  return (
    <MainLayout
      title="Daily transaction"
      titleStyle={{color: COLORS.black}}
      slider
      headerProps={{
        rightComponent: (
          <TouchableOpacity
            onPress={() => {
              setSearchMode(!searchMode);
            }}>
            {searchMode ? (
              <AntDesign name="close" size={SIZES.h2} color={COLORS.black} />
            ) : (
              <Feather name="search" size={SIZES.h2} color={COLORS.black} />
            )}
          </TouchableOpacity>
        ),
      }}>
      <View style={styles.transactionsList(SIZES)}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <Text style={{...FONTS.body3}}>Total: </Text>
          <Text style={{...FONTS.body2}}>340.000đ</Text>
        </View>
        {transactions ? (
          <FlashList
            data={transactions}
            renderItem={({item}) => (
              <TransactionItem
                item={item}
                onPress={() => navigateTransactionDetails(item)}
              />
            )}
            estimatedItemSize={300}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{...FONTS.body3}}>
                  You have not added any transactions yet.
                </Text>
              </View>
            )}
            onRefresh={() => {}}
            refreshing={false}
          />
        ) : null}
      </View>
    </MainLayout>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  transactionsList: SIZES => ({
    flex: 1,
    zIndex: 99,
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  }),
});
