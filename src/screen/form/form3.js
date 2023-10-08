import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { buttoncolor } from '../../const/const';
import { useNavigation } from '@react-navigation/native';
const EmploymentDetailsScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
                           <TouchableOpacity style={styles.backButtonContainer} onPress={()=>navigation.goBack()}>
                    <Text style={styles.backArrow}>{"<"}</Text>
                </TouchableOpacity>
                <View style={styles.header}>
       
       <Text style={styles.title}>Please provide your Employment Detail</Text>
   </View>
   <View style={styles.line} />

            <Text style={styles.label}>Employer Name</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    defaultValue="ABOVE EDGE TECH SOLUTIONS PVT LTD"
                />
            </View>
            
            <Text style={styles.hint}>Type slowly to select your company</Text>

            <TouchableOpacity style={styles.continueButton} onPress={()=>navigation.navigate('employeetype')}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
        </View>
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
        marginBottom: 30
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
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: buttoncolor,
        paddingBottom: 10,
        marginBottom: 20
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    editText: {
        fontSize: 16,
        color: buttoncolor,
        marginLeft: 10
    },
    hint: {
        fontSize: 16,
        marginBottom: 20,
        color: 'grey'
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

export default EmploymentDetailsScreen;
