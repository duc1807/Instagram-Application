import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { Button, TextInput, FlatList, SafeAreaView, StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, Alert, ActionSheetIOS } from 'react-native';
import {Feather, AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
import { not } from 'react-native-reanimated';
import { Router, Scene, Actions } from 'react-native-router-flux';

const insLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png';


const LoginScr = () => {
      return(
            <View style={styles.container}>

                  <View style={styles.main}>
                  <Image style={styles.logoIns} source={{uri : insLogo}}/>
                        <TouchableOpacity style={styles.continueFB}>
                              <Entypo name="facebook" size={24} color="white" />
                              <Text style={{color: 'white', fontWeight: '600'}}>Continue with Facebook</Text>
                        </TouchableOpacity>

                        <Text style={styles.orText}>OR</Text>

                        <TextInput style={styles.inputText}
                              placeholder={'Phone number, username, or email'}></TextInput>
                        
                        <TextInput style={styles.inputPass}
                              placeholder={'Password'}
                              textContentType={'password'}
                              secureTextEntry={true}></TextInput>

                        <TouchableOpacity style={styles.loginButton}
                              onPress={() => Actions.feed()}>
                                    <Text style={styles.loginText}>Log in</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                              <Text style={styles.forgotPass}>Forgot password?</Text>
                        </TouchableOpacity>
                  </View>

                  <View style={styles.footer}>
                        <Text style={styles.footerText}>Don't have an account? </Text>
                        <TouchableOpacity>
                              <Text style={styles.signup}>Sign up</Text>
                        </TouchableOpacity>
                  </View>

            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            flexDirection: 'column',
      },
      main: {
            
            width: 100 + '%',
            flex: 0.9,
            justifyContent: "flex-start",
            alignItems: "center",
      },
      footer: {
            flexDirection: 'row',
            justifyContent: "center",
            width: 100 + '%',
            flex: 0.1,
            borderTopWidth: 0.5,
            borderColor: '#d9d9d9',
            backgroundColor: '#f2f2f2'
      },
      logoIns: {
            width:240,
            height:80,
            marginTop: 125,
      },
      continueFB: {
            width: 310,
            alignItems: "center",
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: 'rgb(71,113,246)',
            paddingVertical: 4,
            paddingHorizontal: 45,
            borderRadius: 5,
            marginVertical: 25
      },
      inputText: {
            borderWidth: 1,
            borderColor: '#dbdbdb',
            width: 310,
            padding: 11,
            borderRadius: 5,
            backgroundColor: '#f7f7f7',
            marginBottom: 7
      },
      inputPass: {
            marginBottom: 14,
            borderWidth: 1,
            borderColor: '#dbdbdb',
            width: 310,
            padding: 11,
            borderRadius: 5,
            backgroundColor: '#f7f7f7',
      },
      orText: {
            color: '#bababa',
            marginBottom: 25,
      },
      loginButton: {
            width: 310,
            height:40,
            alignItems: "center",
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: 'rgb(71,113,246)',
            paddingVertical: 4,
            paddingHorizontal: 45,
            borderRadius: 5,
            marginBottom: 30,
      },
      loginText: {
            color: 'white',
            fontWeight: '600'
      },
      forgotPass: {
            color: 'rgb(71,113,246)',
            fontSize: 12.5,
            marginTop: 10
      }, 
      footerText: {
            marginTop: 15,
            color: '#a6a6a6',
      },
      signup: {
            marginTop: 15,
            fontWeight: '500',
      }
})

export default LoginScr;