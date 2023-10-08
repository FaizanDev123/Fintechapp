import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import CountryPicker from 'react-native-country-picker-modal';
import logo from "../../assest/Paisadekho_logo.png";
import { buttoncolor } from '../../const/const';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

function LoginScreen() {
  const [countryCode, setCountryCode] = useState('IN');
  const [country, setCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation()
  
  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  const handleSendOTP = () => {
    console.log(countryCode, phoneNumber);
    navigation.navigate('otpscreen')
  };


  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Login to your Account</Text>
      <Input
        placeholder="Enter your phone number"
        leftIcon={
          <CountryPicker
            containerButtonStyle={{ marginLeft: 10 }}
            countryCode={countryCode}
            onSelect={onSelect}
          />
        }
        rightIcon={{ type: 'font-awesome', name: 'phone' }}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Login with OTP" onPress={handleSendOTP} buttonStyle={styles.button} />
      <TouchableOpacity onPress={()=>navigation.navigate('signup')}><Text style={{textAlign:'center'}}>Create New Account <Text style={{color:buttoncolor}}>signup</Text></Text></TouchableOpacity>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          By continuing, you agree with our <Text style={{ color: buttoncolor }}>privacy policy</Text>, credit Report Terms of use, and <Text style={{ color: buttoncolor }}> Terms of use.</Text>
        </Text>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 500,
    height: 60,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 30,
    marginRight: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 40,
  },
  button: {
    paddingVertical: 15,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: buttoncolor
  },
  bottomTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  bottomText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
  sheetContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  otpTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default LoginScreen;
