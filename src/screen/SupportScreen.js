import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const emailIcon = require('../assest/email.png');
const phoneIcon = require('../assest/phone.png');
const whatsappIcon = require('../assest/wh.png');

const ContactScreen = () => {
    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.infoBox}>
                <Image source={emailIcon} style={styles.icon} />
                <Text style={styles.title}>Email:</Text>
                <Text style={styles.info}>care@paisabazaar.com</Text>
                <Text style={styles.description}>
                    For queries related to loans, credit cards or in case of any general enquiries
                </Text>
            </View>

            <View style={styles.infoBox}>
                <Image source={phoneIcon} style={styles.icon} />
                <Text style={styles.title}>Toll Free:</Text>
                <Text style={styles.info}>1800 208 8877</Text>
                <Text style={styles.description}>
                    Our customer service experts are here for you. Lines are open Mon-Sat from 9:30 am - 6:30 pm
                </Text>
            </View>

            <View style={styles.infoBox}>
                <Image source={whatsappIcon} style={styles.icon} />
                <Text style={styles.title}>WhatsApp:</Text>
                <Text style={styles.info}>851 009 3333</Text>
                <Text style={styles.description}>
                    You can even reach out to us via WhatsApp. Our service expert team will help you with your queries
                </Text>
            </View>

            <Text style={styles.footer}>
                Exciting offers await you! Swipe up to explore.
            </Text>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    infoBox: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        // Shadow properties for iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        // Shadow properties for Android
        elevation: 5,
    },
    
    icon: {
        width: 30,
        height: 30,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    info: {
        fontSize: 16,
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
    },
    footer: {
        fontSize: 14,
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default ContactScreen;
