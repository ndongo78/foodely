import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
        borderRadius:50,
      }}
    />
  );
}

const Skip = ({ ...props }) => (
  <TouchableOpacity
    style={{ marginHorizontal: 10 }}
    {...props}
  >
    <Text style={{ fontSize: 16 }}>Ignorer</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity
    style={{ marginHorizontal: 10 }}
    {...props}
  >
    <Text style={{ fontSize: 16 }}>Suivant</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{ marginHorizontal: 10 }}
    {...props}
  >
    <Text style={{ fontSize: 16 }}>Terminer</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.navigate("Home")}
      pages={[
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../../assets/onboarding1.png')}
            resizeMode='contain'
            style={{ width: "100%" }}
          />,
          title: 'Tous nos produits sont frais et cultivés par nos agriculteurs locaux',
          subtitle: '',
          titleStyles: {
            fontSize: 25,
            fontWeight: '600',
            position: 'absolute',
            bottom: 140,
            left: -160,
            backgroundColor: "#fdeb93"
          }
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../../assets/onboarding-img2.png')}
            resizeMode='contain'
            style={{ width: "100%" }}
          />,
          title: 'Commander vos plats préféres depuis chez vous. Simple et facile',
          subtitle: '',
          titleStyles: {
            fontSize: 25,
            fontWeight: '600',
          }
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../../assets/onboarding2.png')}
            resizeMode='contain'
            style={{ width: "100%", height: '93%' }}
          />,
          title: 'Nous vous livrons devant votre porte',
          subtitle: "",
          titleStyles: {
            fontSize: 25,
            fontWeight: '600',
            position: 'absolute',
            bottom: 160,
            left: -160,
            backgroundColor: "#fdeb93"
          }
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});