import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList,Dimensions } from 'react-native';
import crediscore from '../assest/credit-score.png'
const dummyIcon = require("../../src/assest/Paisadekho_logo.png");
const screenWidth = Dimensions.get('window').width;
const sliderWidth = screenWidth * 0.8; 
import creditcard from '../assest/creditcard.jpg'
import { buttoncolor } from '../const/const';
const HomeScreen = () => {

    const productsCreditLoan = [
        { name: 'Credit Score', icon: creditcard },
        { name: 'Personal Loan', icon: creditcard },
        { name: 'Micro Loan', icon: creditcard },
        { name: 'Business Loan', icon: creditcard },
    ];

    const productsInsurance = [
        { name: 'Life Insurance', icon: creditcard },
        { name: 'Guarantee Return Plan', icon: creditcard },
        { name: 'Product 3', icon: creditcard },
        { name: 'Product 4', icon: creditcard },
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Banner */}
            <View style={styles.banner}>
    <View style={styles.leftBannerContainer}>
        <Image source={crediscore} style={styles.crediticon} />
    </View>
    <View style={styles.rightBannerContainer}>
        <Text style={styles.bannerHeading}>Get Lifetime Free Credit Score & Report</Text>
        <Text style={styles.bannerDetail}>— Track Credit Score. Free Forever</Text>
        <Text style={styles.bannerDetail}>— No impact on Credit Score</Text>
        <View style={styles.checkCreditScoreButton}>
            <Text style={styles.buttonText}>Check Credit Score Now</Text>
        </View>
    </View>
</View>

            <Text style={styles.sectionHeader}>Credit-Loan</Text>
            <View style={styles.products}>
                {productsCreditLoan.map(product => (
                    <View key={product.name} style={styles.productBox}>
                        <Image source={product.icon} style={styles.productIcon} />
                        <Text style={styles.productText}>{product.name}</Text>
                    </View>
                ))}
            </View>

            {/* Insurance Section */}
            <Text style={styles.sectionHeader}>Insurance and Other Products</Text>
            <View style={styles.products}>
                {productsInsurance.map(product => (
                    <View key={product.name} style={styles.productBox}>
                        <Image source={product.icon} style={styles.productIcon} />
                        <Text style={styles.productText}>{product.name}</Text>
                    </View>
                ))}

            </View>
                        <Text style={styles.sectionHeader}>Insurance and Other Products</Text>
            <View style={styles.products}>
                {productsInsurance.map(product => (
                    <View key={product.name} style={styles.productBox}>
                        <Image source={product.icon} style={styles.productIcon} />
                        <Text style={styles.productText}>{product.name}</Text>
                    </View>
                ))}

            </View>
{/* Sliders */}
<Text style={styles.sectionHeader}>Featured</Text>
<FlatList
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    data={['Slider 1', 'Slider 2', 'Slider 3', 'Slider 4']}
    keyExtractor={(item) => item}
    renderItem={({ item }) => (
        <View style={styles.slider}>
            <Text>{item}</Text>
        </View>
    )}
/>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        padding: 10,
    
    },
    banner: {
        width: '100%',
        height: 150,
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    products: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    productBox: {
        width: '23%', 
        height: 80,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },
    productIcon: {
        width: 30,
        height: 30,
    },
    productText: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5,
    },
    sliders: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 20,
  },
  slider: {
    width: sliderWidth,
    height: 100,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: screenWidth * 0.1, 
    marginBottom:20
},
banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 200,
    backgroundColor: 'lightblue', 
    borderRadius: 15, 
    padding: 25,
    marginBottom: 20,
},
leftBannerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},    rightBannerContainer: {
    flex: 3,
    alignItems: 'flex-start', 
    justifyContent: 'center',
},
creditIndicator: {
    fontSize: 32, 
    fontWeight: 'bold',
    color: '#FFFFFF', 
},
bannerText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'right',
},

crediticon : {
    width: 80,
    height: 80,
    marginRight:10
},
rightBannerContainer: {
    flex: 3,
    alignItems: 'flex-start', 
    justifyContent: 'space-between',
},
bannerHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
},
bannerDetail: {
    fontSize: 15,
    color: '#FFFFFF',
    marginBottom: 5,
},
checkCreditScoreButton: {
    backgroundColor: buttoncolor,
    padding: 10,
    borderRadius: 5,
    alignItems: 'flex-end',
    marginTop: 10,
},
buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    backgroundColor:buttoncolor
}


});

export default HomeScreen;
