import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {configureStore} from './src/redux/store';
import {AppNavigator} from './src/stack/AppNavigator';
import {navigationRef} from './src/services/Navigation';

const {persistor, store} = configureStore();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
