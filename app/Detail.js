import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, Alert, ActionSheetIOS } from 'react-native';
import {Feather, AntDesign, Entypo, Ionicons, FontAwesome,MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import { not, exp, abs, color } from 'react-native-reanimated';
import { Router, Scene, Actions } from 'react-native-router-flux';

const DetailScr = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.props}></Image>
            </View>

            <View style={styles.content}>
                <View style={styles.title}>
                    <View style={styles.title_left}>
                        <Text style={styles.text_title}>Eiffel Tower</Text>
                        
                        <Text style={styles.text_location}><MaterialIcons name="location-on" size={20} color="#20a8ba" />Paris, Franch</Text>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Feather name="download-cloud" size={24} color="white" />
                    </TouchableOpacity>

                </View>

                <Text style={styles.status}>
                    But it also means that it 
                    inherits all limitations and changes from updated versions.
                </Text>

                <View style={styles.tag}>
                    <TouchableOpacity style={styles.tagButton}>
                        <Text style={styles.text_location}>#photography</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tagButton}>
                        <Text style={styles.text_location}>#sea</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.reaction}>
                    <View style={styles.react_left}>
                        <TouchableOpacity>
                            <FontAwesome name="heart-o" size={30} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <MaterialCommunityIcons name="comment-outline" size={32} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.react_right}>
                        <TouchableOpacity>
                            <MaterialIcons name="bookmark-border" size={36} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    imageContainer: {
        flex: 0.5,
    },
    image: {
        width: 415, 
        height: 320
    },
    content: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginTop: 45,
        marginBottom: 22,
        flex: 0.45,
        width: 88+'%',
        backgroundColor: '#f0f0f0',
        borderRadius: 15,
    },
    footer: {
        borderTopWidth: 2,
        borderColor: '#dbdbdb',
        width: 100 + '%',
        flex: 0.08,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
    footerIcons: {
        marginTop: 5,
        marginLeft: 38,
        marginRight: 38,
      },
    
      //Title part
    title: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: 55,
        height: 55,
        backgroundColor: '#3e81e6',
        justifyContent: "center",
        alignItems: 'center',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    text_title: {
        fontSize: 28,
        fontWeight: '700'
    },
    text_location: {
        fontSize: 14,
        color: '#20a8ba',
    },
    status: {
        marginTop: 30,
        fontSize: 14,
    },
    title_left: 
    {
        justifyContent: 'space-between',
    },

    //Tag part
    tag: {
        marginTop: 25,
        flexDirection: 'row',
    },
    tagButton: {
        borderRadius: 50,
        padding: 4,
        paddingHorizontal: 10,
        marginLeft: 9,
        backgroundColor: '#a3dcff'
    },
    reaction: {
        marginTop: 30,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    react_left: {
        flex: 0.3,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})

export default DetailScr;