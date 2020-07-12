import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, Alert, ActionSheetIOS } from 'react-native';
import {Feather, AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
import { not } from 'react-native-reanimated';
import { Router, Scene, Actions } from 'react-native-router-flux';

//Import component
import LoginScr from './app/login';
import ProfileScr from './app/Profile';
import DetailScr from'./app/Detail';
import Feed from './app/Feed';
import FeedScr from './app/Feed';

const BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_COLOR = 'rgb(120,213,250)';

const avt = 'https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/70664419_2326272464262412_8872508062431182848_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_ohc=YKEbuH9r58kAX_29yBL&oh=701584c1d8bb38c4e22216f3396bee6a&oe=5F341D10';


export default function App() {
  
  return (
      <Router>
        <Scene key='root'>

        <Scene 
            key="login"
            component={LoginScr}
            title="Login"
            direction="horizontal"
            hideNavBar
            initial>
        </Scene>

        <Scene 
            key="feed"
            component={FeedScr}
            title="Feed"
            direction="horizontal"
            hideNavBar> 
          </Scene>

          <Scene 
            key="profile"
            component={ProfileScr}
            title="Profile"
            direction="horizontal"
            hideNavBar>
          </Scene>

          <Scene
            key='detail'
            component={DetailScr}
            title="Detail"
            direction="horizontal"
            hideNavBar>
          </Scene>

        </Scene>
      </Router>
  );
}

function DetailsScreen({navigation})
{
  return (
    <View>
      <Text>Hellooooooos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flex: 0.10,
    marginTop: 20,
    justifyContent: "center", 
  },
  navbarContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width:390,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    flex: 0.2,
    flexDirection: "row",
 
  },
  count: {
    borderTopWidth: 0.5,
    borderColor: 'lightgray',
    flex: 0.10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 17,
  },
  imagesGroup: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: 'gray',
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 42,
  },  
  avatarImg: {
    width: 100,
    height: 100,
    marginLeft:15
  },
  headerLeft: {
    flex: 0.43,
    alignItems: 'center',
  },
  headerRight: {
    flex: 0.57,
  },
  button: {
    flexDirection: "row",
    marginTop: 18,
  },
  followButton: {
    backgroundColor: 'blue',
    width: 110,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.62,
    elevation: 4,
  },
  sendButton: {
    borderRadius: 30,
    marginLeft: 11,
    backgroundColor: SEND_COLOR,
    width: 56,
    height: 30,
    paddingTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'black',
    marginBottom: 5,
  },
  jobText: {
    fontSize: 12.8,
    fontWeight: '400',
    color: 'gray'
  },
  followText: {
    color: FOLLOW_COLOR,
    fontSize: 12.8,
    color: 'white',
    fontWeight: '500'
  },
  countPhotos: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center"
  },
  countFollowers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  countFollowing: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },

  //Images container
  images: {
    margin: 1.2,
  },
  footerIcons: {
    marginTop: 5,
    marginLeft: 38,
    marginRight: 38,
  },
  // line: {
  //   height: 1,
  //   backgroundColor: 'lightgray',
  //   flexDirection: 'row',
  // }



});
