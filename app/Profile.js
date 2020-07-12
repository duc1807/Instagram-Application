import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, Alert, ActionSheetIOS } from 'react-native';
import { Feather, AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
import { not } from 'react-native-reanimated';
import { Router, Scene, Actions } from 'react-native-router-flux';
import React, { useState, Component } from 'react';

const BLUE_COLOR   = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_COLOR   = 'rgb(120,213,250)';

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
const centerImg = Math.floor(imgData.length / 3); 

const Item = ({ item, onPress, imgstyle }) => (
  <TouchableOpacity onPress={() => Actions.push('detail', {props : item.imgSource})}>
      <Image 
        source={item.imgSource} 
        style={[styles.images, imgstyle]}>
      </Image>
  </TouchableOpacity>
)

const ProfileScr = () => {
  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState('ok');
  const avt = 'https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/70664419_2326272464262412_8872508062431182848_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_ohc=YKEbuH9r58kAX_29yBL&oh=701584c1d8bb38c4e22216f3396bee6a&oe=5F341D10';

  const renderItem = ({item}) => {
    return (
      <Item item={item}/>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navbarContainer}>

          <TouchableOpacity style={styles.buttonHeader}>
            <AntDesign 
              name="arrowleft" 
              size={32} 
              color="gray"
              onPress={() => Actions.pop()} 
              style={{marginTop:7}} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonHeader}>
            <Entypo name="dots-three-vertical" size={24} color="gray" style={{marginTop:6}} />
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={{uri : avt}} style={styles.avatarImg}/>
        </View>
             
        <View style={styles.headerRight}>

          <Text style={styles.nameText}>Do Trung Duc</Text>
          <Text style={styles.jobText}>Student</Text>

          <View style={styles.button}>

            <TouchableOpacity 
              style={styles.followButton} 
              onPress={() => {setCount(count + 1); 
              Alert.alert("Followed")}}> 
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.sendButton}
              onPress={() => Alert.alert("Message sent!")}>
                {<Feather name="send" size={19} color="white" />}
            </TouchableOpacity>
            
          </View>
        </View>
      </View>

      <View style={styles.line}></View>

      <View style={styles.count}>
        <View style={styles.countPhotos}>
            <Text style={styles.nameText}>{imgData.length}</Text>
            <Text style={styles.jobText}>Photos</Text>
        </View>
        <View style={styles.countFollowers}>
            <Text style={styles.nameText}>{count}</Text>
            <Text style={styles.jobText}>Followers</Text>
        </View>
        <View style={styles.countFollowing}>
            <Text style={styles.nameText}>0</Text>
            <Text style={styles.jobText}>Following</Text>
        </View>
      </View>

        <SafeAreaView style={{flex: 0.7}}>
            <FlatList
            columnWrapperStyle={{flexWrap: 'wrap'}}
            numColumns={3}
            data={imgData}
            renderItem={renderItem}
            keyExtractor= {(item) => item.id}
            extraData={selectedId}>
            </FlatList>
        </SafeAreaView>

        <View style={styles.footer}>
            <TouchableOpacity>
                <AntDesign style={styles.footerIcons} name="picture" size={35} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons style={styles.footerIcons} name="md-add-circle-outline" size={38} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Feather style={styles.footerIcons} name="user" size={36} color="black" />
            </TouchableOpacity>
        </View>
    </View>
  );
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
    borderTopWidth: 2,
    borderColor: '#dbdbdb',
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
    marginLeft:15,
    borderRadius: 50,
    borderWidth: 2,
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
    margin: 1.3,
    width: 135,
    height: 135
  },
  footerIcons: {
    marginTop: 5,
    marginLeft: 38,
    marginRight: 38,
  },
});

export default ProfileScr;