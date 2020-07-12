import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, Alert, ActionSheetIOS } from 'react-native';
import {Feather, SimpleLineIcons, AntDesign, Entypo, Ionicons, FontAwesome,MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import { not, exp, abs, color } from 'react-native-reanimated';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { State } from 'react-native-gesture-handler';

const imgData = [
    {id: 1,  imgSource:  {uri : 'https://www.itl.cat/pngfile/big/4-48377_hd-nature-wallpapers-desktop-images-4k-cool-natural.jpg'}},
    {id: 2,  imgSource:  {uri : 'https://www.cave-beblenheim.com/wp-content/uploads/2019/07/beaches-beach-paradise-ocean-palms-summer-tropical-sunshine-sea-nature-wallpaper-samsung-mobile-PIC-MCH044538.jpg'}},
    {id: 2,  imgSource:  {uri : 'https://thewallpaper.co//wp-content/uploads/2016/10preview/hd-nature-wallpapers-desktop-images-4k-free-natural-full-hd-1080p-hd-smart-phone-1912x1266.jpg'}},
    {id: 4,  imgSource:  {uri : 'https://i.pinimg.com/originals/1b/31/4f/1b314f9f2a3656e067c15cfef37a7452.jpg'}},
    {id: 5,  imgSource:  {uri : 'https://www.manhattanmobile.com/wp-content/uploads/2018/08/react-native-workshop.jpg'}},
    {id: 6,  imgSource:  {uri : 'https://lh3.googleusercontent.com/e8mlJjPDacq1AELb2O9njrWZLkr5YK8ccIMe9X5boKotkM8Nj6b7FD-eZ15tZTGL5lC7-IxyMg=w640-h400-e365'}},
    {id: 7,  imgSource:  {uri : 'https://www.tomfornorthdakota.com/wp-content/uploads/2018/11/natural-wallpaper-full-hd-full-hd-nature-wallpapers-hd-background-9-hd-wallpapers.jpg'}},
    {id: 8,  imgSource:  {uri : 'https://autumnsunshineandgabrielleangel.files.wordpress.com/2012/04/best-top-desktop-beautiful-nature-wallpapers-hd-nature-wallpaper-picture-image-photo-15.jpg'}},
    {id: 9,  imgSource:  {uri : 'https://www.wallpapers13.com/wp-content/uploads/2016/01/Kayangan-Lake-Coron-Island-Philippines-Desktop-HD-Wallpaper-For-PC-Tablet-And-Mobile-Download-915x515.jpg'}},
    {id: 10, imgSource:  {uri : 'https://4kwallpaper.wiki/wp-content/uploads/2019/06/162793.jpg'}},
    {id: 11, imgSource:  {uri : 'https://wallpaperplay.com/walls/full/3/1/9/162804.jpg'}},
    {id: 12, imgSource:  {uri : 'https://www.listofdownload.com/wp-content/uploads/2017/01/tropical-wallpaper-1366x768.png'}},
    {id: 13, imgSource:  {uri : 'https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}},
    {id: 14, imgSource:  {uri : 'https://pix10.agoda.net/hotelImages/276/276682/276682_110630002756363.jpg?s=1024x768'}},
];

  const Item = ({ item, imgstyle }) => (
    <TouchableOpacity onPress={() => Actions.push('detail', {props : item.imgSource})}>
        <Image 
          source={item.imgSource} 
          style={[styles.feedImg, imgstyle]}>
        </Image>
    </TouchableOpacity>
  )
  



const FeedScr = () => {
  const insLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png';
  const avt = 'https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/70664419_2326272464262412_8872508062431182848_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_ohc=YKEbuH9r58kAX_29yBL&oh=701584c1d8bb38c4e22216f3396bee6a&oe=5F341D10';

  const [likes, setLikes] = useState(0)

  const renderItem = ({item}) => {
    return (
      <Item item={item}/>
    );
  }

  const list = () => {
      return imgData.map(item => {
          return (
            <View style = {styles.feed}>
            <View style={styles.avatar}>
                <TouchableOpacity
                    onPress={() => Actions.profile()}>
                        <Image 
                            source={{uri : avt}} 
                            style={styles.avatarImg}>
                        </Image>
                </TouchableOpacity>

            <Text onPress={() => Actions.profile()} style={styles.userName}>Do Trung Duc</Text>
            </View>
            <View style={styles.image}>
                <TouchableOpacity 
                    onPress={() => Actions.push('detail', {props: item.imgSource})} >
                        <Image style={styles.feedImg} source={item.imgSource} />
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <TouchableOpacity 
                    style={styles.buttonReact}
                    onPress={() => setLikes(likes + 1)}>
                    <FontAwesome name="heart-o" size={30} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonReact}>
                    <MaterialCommunityIcons name="comment-outline" size={30} color="black" />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonReact}
                    onPress={() => Alert.alert("Shared!")}>
                    <Feather name="share" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.likeCount}>
                <FontAwesome style={{marginRight: 10}} name="heart" size={24} color="black" />
                <Text>{likes} Likes</Text>
            </View>
            </View>
          )
      })
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity
                onPress={()=>Actions.pop()}>
                <SimpleLineIcons 
                    style={styles.logout} 
                    name="logout" 
                    size={30} 
                    color="black"/>
            </TouchableOpacity>
          <View style={styles.logoCover}>
                <Image source={{uri : (insLogo)}} style={styles.logo}></Image>
          </View>
          <View style={styles.inboxCover}>
            <TouchableOpacity>
                <AntDesign name="inbox" size={38} color="black" style={styles.inbox} />
            </TouchableOpacity>
          </View>
        </View>

        
        <ScrollView style={styles.feedContainer}>{list()}
            {/* <View style = {styles.feed}>
                <View style={styles.avatar}>
                    <TouchableOpacity
                        onPress={() => Actions.profile()}>
                            <Image 
                                source={{uri : avt}} 
                                style={styles.avatarImg}>
                            </Image>
                    </TouchableOpacity>

                <Text onPress={() => Actions.profile()} style={styles.userName}>Do Trung Duc</Text>
                </View>
                <View style={styles.image}>
                    <Image style={styles.feedImg} source={require('../assets/2.jpg')} />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity 
                        style={styles.buttonReact}
                        onPress={() => setLikes(likes + 1)}>
                        <FontAwesome name="heart-o" size={30} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonReact}>
                        <MaterialCommunityIcons name="comment-outline" size={30} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonReact}>
                        <Feather name="share" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.likeCount}>
                    <FontAwesome style={{marginRight: 10}} name="heart" size={24} color="black" />
                    <Text>{likes} Likes</Text>
                </View>
            </View> */}

        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 0.128,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb'
  },
  feedContainer: {
      flex: 0.872,
      width: 100 + '%',
      backgroundColor: '#e8e8e8'
  },
  feed: {
    marginTop: 35,
    backgroundColor: 'white',
    width: 100 + '%',
    height: 520,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  logoCover: {
    flex: 0.85,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 60,
    marginTop: 30,
    marginLeft: 20 + '%',
  },
  inboxCover: {
    flex:0.15,
    marginLeft: 50,
  },
  inbox: {
    marginTop: 32,
  },

  /////////
  avatar: {
    flex: 0.08,
    marginTop:10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginTop: 10,
    backgroundColor: '#e8e8e8',
    flex: 0.74,
  }, 
  button: {
    flex: 0.09,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:8
  },
  likeCount: {
    flex: 0.09,
    flexDirection: 'row',
    alignItems: "center",
    paddingLeft: 20,
    borderTopWidth: 1,
    borderColor: '#dbdbdb'
  },
  ///////
  avatarImg: {
    width: 45,
    height: 45,
    borderRadius: 30,
    marginLeft: 12
  },
  userName: {
      marginLeft: 8,
      fontWeight: "bold",
      fontSize: 15
  },
  feedImg: {
      width: 100 + '%',
      height: 369
  },
  buttonReact: {
      marginHorizontal: 8,
  },
  logout: 
  {
      width: 50,
      height: 45,
      alignSelf: 'center',
      left: 14,
      top: 34
  }

});

export default FeedScr;
