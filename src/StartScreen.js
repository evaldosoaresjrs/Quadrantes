import React from 'react'
import {TouchableOpacity, StyleSheet,  View, Text, Image,Alert, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


const TitleScreen = ({ navigation }) => {
    return (
     <View style={styles.container}>
        <ImageBackground
            source={require('../assets/home-background.jpg')} // Imagem de fundo
            style={styles.background}
            resizeMode="cover"    
            blurRadius={10}
            >
        </ImageBackground>
        
        <View style={styles.contentContainer}>
            <Image // Icone do app
            source={require('../assets/icon.png')}
            style={{width: 250, height: 250}}
            />
    
            <Text style={[styles.title, styles.textShadow]}>
            QUADRANTES
            </Text>
            
            <TouchableOpacity // Botão começar
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}>Começar</Text>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.textButton}>
            <Text style={[styles.loginText, styles.textShadow]}>Entrar na minha conta</Text>
            </TouchableOpacity>
    
        </View>
    </View>
    )
};

const SignInScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <ImageBackground
            source={require('../assets/home-background.jpg')} // Imagem de fundo
            style={styles.background}
            resizeMode="cover"
            blurRadius={10}
        >
        </ImageBackground>
        <Icon name="arrow-back" size={40} color="white" onPress={() => navigation.goBack()} style={[styles.backButton, styles.textShadow]}></Icon>
        </View>
    );  
};

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <ImageBackground
            source={require('../assets/home-background.jpg')} // Imagem de fundo
            style={styles.background}
            resizeMode="cover"
            blurRadius={10}
        >
        </ImageBackground>
        <Icon name="arrow-back" size={40} color="white" onPress={() => navigation.goBack()} style={[styles.backButton, styles.textShadow]}></Icon>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkgray',
        position: 'absolute',
        zIndex: 99,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 50,
        color: 'white',
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.5)', 
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 5, 
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(12, 153, 68)',
        height: 80,
        width: 300,
        padding: 10,
        borderRadius: 40,
        top: 140,
    },
    textButton: {
        position: 'absolute',
        bottom: 25,
    },
    loginText: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 40,
        color: 'white',
        fontSize: 25,
        zIndex: 2,
    },
    buttonText: {
        color: "white",
        fontSize: 33,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export {TitleScreen, SignInScreen, LoginScreen};