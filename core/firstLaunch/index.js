import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet
} from 'react-native';

import CustomButton from '../comps/CustomButton';

const FirstLaunch = ( { navigation } ) => {
  return (
    <SafeAreaView style={{flex: 1, alignSelf: "stretch"}}>
      <View style={styles.generalView}>
        <Text style={styles.title}>Meu Cardápio Vegano</Text>
        <Text style={styles.message}>
          Alguma mensagem de efeito sobre veganismo aqui
        </Text>
        <CustomButton 
          title="Começar"
          onPress={() => { navigation.navigate("Start1"); }}
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

    title: {
        fontSize: 40,
        textAlign: "center",
        color: "white"
    },

    message: {
      fontSize: 20,
      textAlign: "center",
      marginTop: "10%"
    },

    startButton: {
      button: {
        borderRadius: 50,
        marginTop: "30%",
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

export default FirstLaunch;