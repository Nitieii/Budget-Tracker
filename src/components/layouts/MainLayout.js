import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Header, LoadingScreen} from '~/components';
import {COLORS, SIZES} from '../../constants';

const MainLayout = ({
  children,
  title,
  headerProps,
  loading,
  titleStyle,
  slider,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray2,
        position: 'relative',
      }}>
      {/* {loading ? <LoadingScreen /> : null} */}
      <Header
        title={title}
        {...headerProps}
        titleStyle={titleStyle}
        slider={slider}
      />
      {children}
    </View>
  );
};

export default MainLayout;
