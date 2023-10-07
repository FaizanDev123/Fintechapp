import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { buttoncolor } from '../../const/const';
const CreditScreen = () => {
  const [score, setScore] = useState(700); // Default value
    const getBorderColor = (score) => {
      if(score < 400) return '#FF0000'; // Red
      if(score >= 400 && score < 600) return '#FFA500'; // Orange
      if(score >= 600) return '#4CAF50'; // Green
  }
    return (
        <ScrollView style={styles.container}>

            <View style={styles.greetingContainer}>
                <Text style={styles.greetingText}>Hey Arindam,</Text>
                <Text style={styles.subGreetingText}>Here’s your score for Sep '23</Text>
                <Text style={styles.reportText}>Next Report On: 08 Oct '23</Text>
            </View>

            <View style={[styles.scoreContainer, { borderColor: getBorderColor(score) }]}>
                <Text style={styles.score}>{score}</Text>
                <Text>Fair</Text>
            </View>

            <TouchableOpacity style={styles.downloadBtn}>
                <Text style={styles.downloadText}>Download Report</Text>
            </TouchableOpacity>

            <View style={styles.alertBox}>
                <Text style={{color:'red'}}>1 of your account is negatively impacting your credit score</Text>
            </View>

            <View style={styles.creditPlusBox}>
                <Text style={styles.creditPlusTitle}>CREDIT+</Text>
                <Text style={styles.creditPlusText}>Expert guidance for Negative account resolution</Text>
                <TouchableOpacity style={styles.creditPlusBtn}>
                    <Text style={styles.creditPlusBtnText}>Worried due to loan card rejection?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.guidanceBox}>
                <Text>Personalized Credit Expert Consultation to get your score on track</Text>
            </View>
        </ScrollView>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    iconPlaceholder: {
        width: 24,
        height: 24,
        backgroundColor: '#D1D1D1',  
        borderRadius: 12,
    },
    greetingContainer: {
        marginTop: 20,
    },
    greetingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subGreetingText: {
        fontSize: 18,
        color: 'gray',
    },
    reportText: {
        fontSize: 16,
        color: 'blue',
        marginTop: 10,
    },
    scoreContainer: {
        height: 200,
        width: 200,
        borderRadius: 100,
        backgroundColor: '#FFF',
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E0E0E0',
        borderWidth: 5,
    },
    score: {
        fontSize: 44,
        fontWeight: 'bold',
    },
    downloadBtn: {
        backgroundColor: buttoncolor,
        borderRadius: 30,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    downloadText: {
        color: '#FFF',
        fontSize: 18,
    },
    alertBox: {
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginVertical: 20,
        borderColor: '#E0E0E0',
        borderWidth: 1,
    },
    creditPlusBox: {
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#E0E0E0',
        borderWidth: 1,
    },
    creditPlusTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    creditPlusText: {
        fontSize: 18,
        marginBottom: 20,
    },
    creditPlusBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    creditPlusBtnText: {
        marginLeft: 10,
        color: 'purple',
    },
    guidanceBox: {
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginVertical: 20,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scoreContainer: {
      height: 200,
      width: 200,
      borderRadius: 100,
      backgroundColor: '#FFF',
      alignSelf: 'center',
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 5,
  },
  score: {
      fontSize: 44,
      fontWeight: 'bold',
  },
});

export default CreditScreen;
