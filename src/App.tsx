import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {LoadingProvider} from './lib/contexts/LoadingContext';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './routes/root';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store, persistor} from './store';
import {useApi} from './lib/hooks/useApi';
const App = () => {
  useApi();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
