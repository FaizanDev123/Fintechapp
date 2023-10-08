import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { buttoncolor } from '../../const/const';
const RegistrationScreen = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    return (
        <ScrollView style={styles.container}>
                        <Text style={styles.headerText}>Register</Text>

            <Text style={styles.headerText1}>Register Now And Get Best Offer</Text>

            <Text style={styles.label}>Name</Text>
            <TextInput 
                style={styles.input} 
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
            />

            <Text style={styles.label}>Phone</Text>
            <TextInput 
                style={styles.input} 
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
            />

            <Text style={styles.label}>Email</Text>
            <TextInput 
                style={styles.input} 
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
            />

            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerText}>Register</Text>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#333'
    },
    headerText1: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333'
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        marginBottom: 20
    },
    registerButton: {
        backgroundColor: buttoncolor,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
    registerText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default RegistrationScreen;
