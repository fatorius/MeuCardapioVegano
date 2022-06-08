import React from 'react';

import { MMKVLoader } from "react-native-mmkv-storage";

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';

import CustomButton from '../comps/CustomButton';
import Slider from '@react-native-community/slider';

const MMKV = new MMKVLoader().initialize();

const InsertPrice = ( { navigation } ) => {
    let [preco, setPreco] = React.useState(100)
    return (
        <SafeAreaView style={{flex: 1, alignSelf: "stretch"}}>
            <View style={styles.generalView}>
                <Text style={styles.message}>
                  Hmmmmm, e qual a faixa de preço que você deseja gastar por semana se alimentando?
                </Text>
                <Slider
                    value={preco}
                    style={{width: 300, height: 50, marginTop: "10%"}}
                    minimumValue={80}
                    maximumValue={200}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    onValueChange={(value)=>{
                        setPreco(value);
                    }}
                    step={1}
                />
                <Text style={styles.price}>R$ {preco}</Text>
                <CustomButton 
                  title="Próximo"
                  onPress={() => { 
                    MMKV.setInt("priceRange", preco);
                    navigation.navigate("Start4");
                  }}
                  styles={styles.startButton}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    generalView: {
        backgroundColor: "black",
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },

    message: {
      fontSize: 30,
      textAlign: "center",
      marginTop: "10%",
      color: "white"
    },

    price: {
        fontSize: 20
    },

    nameInput: {
        textAlign: "center",
        fontSize: 20,
        marginTop: "10%"
    },

    startButton: {
      button: {
        borderRadius: 50,
        marginTop: "15%",
        backgroundColor: "#00b032",
        width: "50%",
        padding: 5
      },
      text: {
        fontSize: 25,
        textAlign: "center",
        color: "white"
      }
    }
  }
);

export default InsertPrice;