import React from 'react';
import {COLORS, SCREENS} from '../../config';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Movies from '../../screens/Movies';
import MovieDetails from '../../screens/MovieDetails';

const AppStack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTintColor: COLORS.white,
        contentStyle: {backgroundColor: COLORS.black},
        headerStyle: {backgroundColor: COLORS.black},
      }}>
      <AppStack.Screen
        options={{
          title: 'YIFY Movies',
        }}
        name={SCREENS.MOVIES}
        component={Movies}
      />
      <AppStack.Screen
        options={({route}: any) => ({title: route.params.movie.title})}
        name={SCREENS.MOVIE_DETAILS}
        component={MovieDetails}
      />
    </AppStack.Navigator>
  );
};
