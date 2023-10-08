import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  
import { buttoncolor } from '../../const/const';
import { useNavigation } from '@react-navigation/native';
const EmploymentTypeScreen = () => {
    const [selectedType, setSelectedType] = useState('');
    const navigation = useNavigation()
    const employmentTypes = [
        { name: 'Salaried', description: 'Receive fixed amount of income every month' },
        { name: 'Self-Employed Business', description: 'Run a business' },
        { name: 'Self-Employed Professional', description: 'Engage in a profession (Eg: Doctor, C.A., Lawyer, etc)' }
    ];

    return (
        <ScrollView style={styles.container}>
                           <TouchableOpacity style={styles.backButtonContainer} onPress={()=>navigation.goBack()}>
                    <Text style={styles.backArrow}>{"<"}</Text>
                </TouchableOpacity>
                <View style={styles.header}>
       
       <Text style={styles.title}>Employment Type</Text>
   </View>
   <View style={styles.line} />

            {employmentTypes.map((type) => (
                <TouchableOpacity 
                    key={type.name} 
                    style={styles.optionContainer} 
                    onPress={() => setSelectedType(type.name)}>
                    
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.optionTitle}>{type.name}</Text>
                        <FontAwesome 
                            name={selectedType === type.name ? 'dot-circle-o' : 'circle-o'} 
                            size={24} 
                            color={buttoncolor} 
                            style={styles.checkbox} 
                        />
                    </View>
                    
                    <Text style={styles.optionDescription}>{type.description}</Text>
                </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.continueButton}>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center'
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
    optionContainer: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#E0E0E0',
        padding: 15,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    optionTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    optionDescription: {
        fontSize: 16,
        color: 'grey'
    },
    checkbox: {
        marginLeft: 10
    },
    continueButton: {
        backgroundColor: buttoncolor,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
    continueText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default EmploymentTypeScreen;
