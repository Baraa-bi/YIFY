import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, TouchableOpacity, Text, StatusBar, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SCREENS} from '../../config';
import {getMoviesList, shuffleMovies} from '../../lib/actions/movies';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './styles';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useCallback} from 'react';
const Movies = ({navigation}) => {
  const dispatch = useDispatch();
  const {moviesList} = useSelector((store: any) => store.movies);

  useEffect(() => {
    // get the list of movies
    StatusBar.setBarStyle('light-content');
    dispatch(getMoviesList({limit: 50}));
  }, []);

  const renderMovie = ({item}) => {
    const onMoviePress = () => {
      navigation.navigate(SCREENS.MOVIE_DETAILS, {movie: item});
    };
    return <MovieCard {...item} onPress={onMoviePress} />;
  };

  const onShuffleItems = useCallback(() => {
    dispatch(shuffleMovies());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={_.map(moviesList)}
        renderItem={renderMovie}
        extraData={[moviesList]}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onShuffleItems}
        style={styles.button}>
        <Icon name="random" color="white" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default Movies;
