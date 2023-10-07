import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Button } from 'react-native-elements';
import logo from "../../assest/Paisadekho_logo.png"
import { buttoncolor } from '../../const/const';
import { useNavigation } from '@react-navigation/native';
const OTPScreen = () => {
    const navigation = useNavigation()
  const [phoneNumber, setPhoneNumber] = useState('+1234567890');
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpRefs = useRef([]);
  const focusNext = (index) => {
    if (index < 3) {
      otpRefs.current[index + 1].focus();
    }
  };
  const renderOtpBoxes = () => {
    return otp.map((digit, index) => (
      <TextInput
        key={index}
        style={styles.otpBox}
        maxLength={1}
        keyboardType="number-pad"  
        ref={ref => otpRefs.current[index] = ref} 
        onChangeText={(text) => {
            const otpArr = [...otp];
            otpArr[index] = text;
            setOtp(otpArr);
            if (text) {
              focusNext(index); 
            } else if (index > 0 && text.length === 0) {
              otpRefs.current[index - 1].focus(); 
            }
          }}
          value={digit}
      />
    ));
};
console.log(otp,"ottpp")
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image source={logo} style={styles.logo} />

        </View>

   
      <View style={styles.phoneNumberContainer}>
        <Text style={styles.phoneText}>We have sent an OTP to {phoneNumber}</Text>
        <TouchableOpacity onPress={() => console.log('Edit Phone Number')}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.otpContainer}>
        {renderOtpBoxes()}
      </View>
      <Button title="Resend OTP" type="clear" onPress={() => console.log('Resend OTP')} buttonStyle={styles.resendBtn} titleStyle={styles.resendBtnText} />
      <Button title="Verify Mobile" onPress={() => navigation.navigate('MainApp')} buttonStyle={styles.verifyBtn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',  
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:40,
    textAlign:'center'

  },
  logo: {
    width: 340,
    height: 60,
    marginBottom: 20,
    marginTop: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  phoneText: {
    color: '#8D8D92', 
  },
  editText: {
    color: buttoncolor,  
    textDecorationLine: 'underline',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: buttoncolor,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',  
    backgroundColor: 'white',  
  },
  resendBtn: {
    marginBottom: 20,
  },
  resendBtnText: {
    color: buttoncolor,
  },
  verifyBtn: {
    backgroundColor: buttoncolor,
  },
});

export default OTPScreen;
