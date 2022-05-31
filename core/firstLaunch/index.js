import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
  View,
  StyleSheet,
  Button
} from 'react-native';

const FirstLaunch = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.generalView}>
          <Text style={styles.title}>Meu Cardápio Vegano</Text>
          <Button 
            title="Começar"
            onPress={() => {alert("Todo programar esse botão")}}
            accessibilityLabel='Iniciar o programa'
            color="#000000"
            style={styles.startButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    generalView: {
        backgroundColor: "black"
    },

    title: {
        fontSize: 40
    },

    startButton: {
        borderRadius: "50%"
    }
});

export default FirstLaunch;