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
import SelectDropdown from 'react-native-select-dropdown'

const MMKV = new MMKVLoader().initialize();

const InsertTimeToCook = ( { navigation } ) => {
    let [horario, setHorario] = React.useState(-1);
    let [buttonDisabled, setButton] = React.useState(false);

    let username = MMKV.getString("username");

    let opcoes = ['Menos de 1 hora', 'De 1 hora à 1 hora e meia', 'Mais de 1 hora e meia'];

    return (
        <SafeAreaView style={{flex: 1, alignSelf: "stretch"}}>
            <View style={styles.generalView}>
                <Text style={styles.message}>
                  {username}, quanto tempo você tem para preparar cada refeição?
                </Text>
                <SelectDropdown 
                  data={opcoes}
                  defaultButtonText='Escolha uma opção'
                  onSelect={(selectedItem, index) => {
                    setHorario(index);
                    setButton(true);
                  }}
                  buttonStyle={styles.dropdown1BtnStyle}
                  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                  dropdownStyle={styles.dropdown1DropdownStyle}
                  rowStyle={styles.dropdown1RowStyle}
                  rowTextStyle={styles.dropdown1RowTxtStyle}
                />
                <CustomButton 
                  title="Próximo"
                  onPress={() => { 
                    if (horario != -1){
                      MMKV.setInt("timeAvaliable", horario);
                      navigation.navigate("Start3");
                    }
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
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 6},
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 10,
    },
    header: {
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F6F6F6',
    },
    dropdown1BtnStyle: {
      width: "75%",
      backgroundColor: 'transparent',
      borderRadius: 8,
      borderWidth: 2,
      borderColor: '#fff',
      marginTop: "15%"
    },
    dropdown1BtnTxtStyle: {color: '#fff', textAlign: 'center'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'center'}
  }
);

export default InsertTimeToCook;