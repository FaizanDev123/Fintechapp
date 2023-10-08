import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buttoncolor } from '../../const/const';
const IncomeSelectionScreen = () => {
    const [selectedIncome, setSelectedIncome] = useState(null);
    const navigation = useNavigation()
    const incomes = [
        'Upto ₹3 Lacs',
        '₹3 - ₹4 Lacs',
        '₹4 - ₹5 Lacs',
        '₹5 - ₹10 Lacs',
        '₹10 Lacs +'
    ];

    return (
        <View style={styles.container}>
                           <TouchableOpacity style={styles.backButtonContainer} onPress={()=>navigation.goBack()}>
                    <Text style={styles.backArrow}>{"<"}</Text>
                </TouchableOpacity>
            <View style={styles.header}>
       
                <Text style={styles.title}>Select your Yearly Income</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.optionsContainer}>
                {incomes.map((income, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[styles.option, selectedIncome === income ? styles.selectedOption : {}]} 
                        onPress={() => setSelectedIncome(income)}
                    >
                        <Text style={selectedIncome === income ? styles.selectedOptionText : styles.optionText}>{income}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.continueButton} onPress={()=>{navigation.navigate('BankSelection')}}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
        marginTop:20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
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
    optionsContainer: {
        marginBottom: 50,
    },
    option: {
        borderColor: '#E0E0E0',
        borderWidth: 2,
        borderRadius: 5,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    optionText: {
        fontSize: 16,
    },
    selectedOption: {
        borderColor: buttoncolor,
    },
    selectedOptionText: {
        color: buttoncolor,
        fontWeight: 'bold',
    },
    continueButton: {
        backgroundColor: buttoncolor,
        padding: 15,
        borderRadius: 5,
    },
    continueText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
    }
});

export default IncomeSelectionScreen;
