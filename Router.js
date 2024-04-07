// index.js или другой корневой файл вашего приложения
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App'; // Импортируйте ваш компонент App
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native'; // Импортируйте NavigationContainer

function Main() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
