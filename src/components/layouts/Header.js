import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {hasNotch} from 'react-native-device-info';

import {FONTS, SIZES, COLORS} from '~/constants';

import {DateSlider} from '~/components';

const Header = props => {
  const {title, rightComponent, titleStyle, containerStyle} = props;
  return (
    <View style={styles.parentContainer(COLORS, SIZES)}>
      <View style={[styles.container(hasNotch, SIZES), containerStyle]}>
        <View
          style={{
            flex: 5,
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              ...titleStyle,
            }}>
            {title}
          </Text>
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>{rightComponent}</View>
      </View>

      {/* Calendar View */}
      <DateSlider />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  parentContainer: (COLORS, SIZES) => ({
    backgroundColor: COLORS.white,
    height: 190,

    borderBottomRightRadius: SIZES.padding,
    borderBottomLeftRadius: SIZES.padding,

    shadowColor: COLORS.lightGray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  }),

  container: (hasNotch, SIZES) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    marginTop: hasNotch ? SIZES.radius * 4 : SIZES.radius,

    marginBottom: SIZES.radius * 2,
  }),
});
