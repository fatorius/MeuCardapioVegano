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

const MMKV = new MMKVLoader().initialize();

const InsertUsername = ( { navigation } ) => {
    const [ name, onChangeName ] = React.useState("");

    return (
        <SafeAreaView style={{flex: 1, alignSelf: "stretch"}}>
            <View style={styles.generalView}>
                <Text style={styles.message}>
                Para começar, como devo te chamar?
                </Text>
                <TextInput 
                    style={styles.nameInput}
                    onChangeText={onChangeName}
                    value={name}
                    placeholder='Digite aqui seu nome'
                />
                <CustomButton 
                  title="Próximo"
                  onPress={() => { 
                    MMKV.setString("username", name);
                    
                    navigation.navigate("Start2");
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

    nameInput: {
        textAlign: "center",
        fontSize: 20,
        marginTop: "10%"
    },

    startButton: {
      button: {
        borderRadius: 50,
        marginTop: "10%",
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
});

export default InsertUsername;