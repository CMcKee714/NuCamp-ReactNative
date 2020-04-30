import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { YellowBox } from 'react-native';

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

YellowBox.ignoreWarnings(['Warning: ...'])
console.disableYellowBox = true