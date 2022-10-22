import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONTS, SIZES, COLORS} from '../../constants';

const Header = props => {
  const {title, leftComponent, rightComponent, titleStyle, containerStyle} =
    props;
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>{leftComponent}</View>
      <View
        style={{
          flex: 5,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: SIZES.h1,
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
  container: {
    flexDirection: 'row',
    // backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
