import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {configureStore} from './src/redux/store';

const {persistor, store} = configureStore();

const App: () => React$Node = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Text style={{fontFamily: 'montserrat'}}>Hello world</Text>
        </SafeAreaView>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
