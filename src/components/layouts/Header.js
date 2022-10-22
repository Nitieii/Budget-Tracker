import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONTS, SIZES, COLORS} from '~/constants';
import {hasNotch} from 'react-native-device-info';

const Header = props => {
  const {title, rightComponent, titleStyle, containerStyle} =
    props;
  return (
    <View style={[styles.container(hasNotch), containerStyle]}>
      <View
        style={{
          flex: 5,
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: SIZES.h2,
            fontWeight: 'bold',
            color: COLORS.white,
            ...titleStyle,
          }}>
          {title}
        </Text>
      </View>

      <View style={{flex: 1, alignItems: 'flex-end'}}>{rightComponent}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: hasNotch => ({
    flexDirection: 'row',
    // backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    marginTop: hasNotch ? SIZES.radius * 4 : SIZES.radius,
    marginBottom: SIZES.radius * 2,
  }),
});
