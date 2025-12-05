import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type DividerProps = {
  backgroundColor?: string;
  height?: number;
  marginVertical?: number;
  width?: ViewStyle['width'];
};

export const Divider: React.FC<DividerProps> = ({
  backgroundColor = '#000000ff',
  height = 2,
  marginVertical = 6,
  width = '100%',
}) => {
  const dynamicStyle: ViewStyle = {
    backgroundColor,
    height,
    marginVertical,
    width,
  };

  return <View style={[styles.divider, dynamicStyle]} />;
};

const styles = StyleSheet.create({
  divider: {
    alignSelf: 'stretch',
  },
});

export default Divider;