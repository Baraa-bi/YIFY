import React from 'react';
import styles from './styles';
import {View, ScrollView, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {deleteMovie} from '../../lib/actions/movies';
import {useCallback} from 'react';
const MovieDetails = ({navigation, route}) => {
  const {movie} = route.params;
  const dispatch = useDispatch();

  const onDeletePress = useCallback(() => {
    dispatch(deleteMovie(movie.id));
    navigation.goBack();
  }, [movie]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          resizeMode="contain"
          style={styles.image}
          source={{uri: movie.image}}
        />
      </View>
      <Text style={styles.section}>Summary</Text>
      <Text numberOfLines={7} style={styles.summary}>
        {movie.summary}
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onDeletePress}>
        <Text style={styles.buttonText}>Delete Movie</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MovieDetails;
