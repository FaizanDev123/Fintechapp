import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { buttoncolor } from './../../const/const';
import { useNavigation } from '@react-navigation/native';
const BankSelectionScreen = () => {
    const [selectedBank, setSelectedBank] = useState('');
    const navigation =useNavigation()

    const banks = [
        { name: 'HDFC' },
        { name: 'SBI' },
        { name: 'ICICI' },
        { name: 'Kotak' },
        { name: 'Axis' },
        { name: 'BOB' },
        { name: 'PNB' },
        { name: 'Yes Bank' }
    ];

    return (
        <ScrollView style={styles.container}>
                           <TouchableOpacity style={styles.backButtonContainer} onPress={()=>navigation.goBack()}>
                    <Text style={styles.backArrow}>{"<"}</Text>
                </TouchableOpacity>
                <View style={styles.header}>
       
       <Text style={styles.title}>Select your Primary Account</Text>
   </View>
   <View style={styles.line} />
   <View style={styles.row}>
                {banks.map((bank, index) => (
                    <TouchableOpacity
                        key={bank.name}
                        style={styles.bankItem}
                        onPress={() => setSelectedBank(bank.name)}>
                        <Text style={styles.logo}>{bank.logo}</Text>
                        <FontAwesome
                            name={selectedBank === bank.name ? 'check-square' : 'square-o'}
                            size={24}
                            color="#007AFF"
                            style={styles.checkbox}
                        />
                        <Text style={styles.bankName}>{bank.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.textCon}><Text style={styles.text}>View More</Text></TouchableOpacity>
            <View style={styles.line1} />

            <TouchableOpacity style={styles.continueButton} onPress={()=>{navigation.navigate('employeSelection')}}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        marginTop:20
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    bankItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    bankName: {
        fontSize: 16,
        marginLeft: 10
    },
    checkbox: {
        width: 24,
        color:buttoncolor,
        height: 24,
    },
    continueButton: {
        backgroundColor: buttoncolor,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10
    },
    continueText: {
        color: 'white',
        fontWeight: 'bold'
    },
    backButtonContainer: {
        borderWidth: 1,
        borderColor: buttoncolor,
        borderRadius: 5,
        padding: 5,
        width:40,
        marginBottom:10
    },
    backArrow: {
        fontSize: 24,
        color: buttoncolor,
        textAlign:'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    line: {
        height: 2,
        backgroundColor: buttoncolor,
        marginBottom: 30,
        alignSelf: 'flex-start',
        width: '30%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    bankItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#b0c4de',
        width: '48%',  // approximately half the screen width
    },
    logo: {
        marginRight: 10
    },
    text:{
     textAlign:'center'
    },
    line1: {
        height: 2,
        backgroundColor: buttoncolor,
        marginBottom: 30,
        alignSelf: 'center',
        width: '20%',
    },
});

export default BankSelectionScreen;
