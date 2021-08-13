import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

interface Props {
  image: string;
  title: string;
  onPress: any;
  style: Object;
}

var ProductCard = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={[styles.container, props.style]}>
      <FastImage
        resizeMode="cover"
        style={styles.image}
        source={{uri: props.image}}
      />
      <Text numberOfLines={1} style={styles.title}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
