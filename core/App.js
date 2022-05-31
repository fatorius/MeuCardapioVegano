// Essa função verifica se é a primeira vez 
// que o usuário está acessando o app
// e o redireciona para a página correspondente

import React from 'react';

import { MMKVLoader } from "react-native-mmkv-storage";

import FirstLaunch from "./firstLaunch";
import HomeScreen from "./homeScreen";

const MMKV = new MMKVLoader().initialize();

const App = () => {
  let isFirstAccess = !MMKV.getBool("firstAccess");

  if (!isFirstAccess){ // THIS LINE IS FALSE DURING DEVELOPMENT OF FIRST LAUNCH VIEW
    MMKV.setBool("firstAccess", true);
    return <FirstLaunch/>
  }

  return <HomeScreen />
};

export default App;
