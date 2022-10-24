import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import * as React from 'react';

import {NumericFormat} from 'react-number-format';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {COLORS, SIZES, FONTS} from '~/constants';
import {useDate} from '~/hooks';

import {MainLayout} from '~/components';
import {fDate} from '~/utils/formatTime';

const TransactionDetails = ({route, navigation}) => {
  const {amount, type, category, date, description} = route.params.transaction;

  const goBack = () => {
    navigation.goBack();
  };

  const Triangles = () => {
    return (
      <View style={styles.triangles(COLORS)}>
        <View style={styles.triangle(COLORS)} />
        <View style={styles.triangle(COLORS)} />
        <View style={styles.triangle(COLORS)} />
        <View style={styles.triangle(COLORS)} />
        <View style={styles.triangle(COLORS)} />
        <View style={styles.triangle(COLORS)} />
        <View style={styles.triangle(COLORS)} />
        <View style={styles.triangle(COLORS)} />
        <View style={styles.triangle(COLORS)} />
        <View style={styles.triangle(COLORS)} />
        <View style={styles.triangle(COLORS)} />
        <View style={styles.triangle(COLORS)} />
        <View style={styles.triangle(COLORS)} />
      </View>
    );
  };

  return (
    <MainLayout
      title="Transaction"
      titleStyle={{color: COLORS.black}}
      slider={false}
      headerProps={{
        leftComponent: (
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={goBack}>
            <AntDesign name="arrowleft" size={SIZES.h2} color={COLORS.black} />
          </TouchableOpacity>
        ),
      }}>
      <View style={styles.container}>
        <View style={{position: 'relative', padding: 25}}>
          <View>
            <Text style={styles.header(FONTS, COLORS)}>Description</Text>
            <Text style={styles.content(FONTS, COLORS)}>{description}</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 25,
              marginBottom: 20,
            }}>
            <View>
              <Text style={styles.header(FONTS, COLORS)}>Transaction type</Text>
              <Text style={styles.content(FONTS, COLORS)}>{type}</Text>
            </View>
            <View style={styles.verticleLine(COLORS)}></View>
            <View>
              <Text style={styles.header(FONTS, COLORS)}>Date</Text>
              <Text style={styles.content(FONTS, COLORS)}>{fDate(date)}</Text>
            </View>
          </View>

          <View style={styles.leftCircle}></View>

          <View style={styles.rightCircle}></View>

          <View style={styles.dotLine(COLORS)}></View>
        </View>

        <View
          style={{
            marginTop: 15,
            // padding: 25,
            paddingHorizontal: 25,
            paddingBottom: 45,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}>
          <View>
            <Text style={styles.header(FONTS, COLORS)}>Amount</Text>
            <NumericFormat
              value={amount}
              displayType={'text'}
              thousandSeparator={true}
              suffix={'đ'}
              prefix={type === 'Expense' ? '-' : '+'}
              renderText={value => (
                <Text
                  style={{
                    ...FONTS.h1,
                    color:
                      type == 'Expense' ? COLORS.primary : COLORS.lightGreen,
                  }}>
                  {value}
                </Text>
              )}
            />
          </View>

          <View>
            <Image
              source={require('~/assets/icons/categories/education.png')}
              width={20}
              height={20}
            />
          </View>
        </View>

        <Triangles />
      </View>
    </MainLayout>
  );
};

export default TransactionDetails;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'white',

    marginHorizontal: 25,
    // padding: 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  detailContainer: (FONTS, COLORS) => ({
    // display: 'flex',
    // flexDirection: 'row',
  }),

  header: (FONTS, COLORS) => ({
    ...FONTS.body4,
    color: COLORS.gray,
  }),

  verticleLine: () => ({
    width: 1,
    height: '100%',
    backgroundColor: COLORS.lightGray,
  }),

  content: (FONTS, COLORS) => ({
    ...FONTS.body3,
  }),

  leftCircle: {
    position: 'absolute',
    bottom: 0,
    left: -8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray2,
  },

  rightCircle: {
    position: 'absolute',
    bottom: 0,
    right: -8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray2,
  },

  dotLine: COLORS => ({
    position: 'absolute',
    bottom: 10,
    left: '15%',
    textAlign: 'center',
    height: 2,
    width: '90%',
    borderStyle: Platform.OS == 'ios' ? 'solid' : 'dashed',
    borderWidth: 0.5,
    borderRadius: 1,
    borderColor: COLORS.lightGray,
  }),

  triangles: COLORS => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
  }),

  triangle: COLORS => ({
    width: 0,
    height: 0,
    borderLeftWidth: 13,
    borderRightWidth: 13,
    borderBottomWidth: 15,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.lightGray2,
  }),
});
