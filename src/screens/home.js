import React, {Component} from 'react';
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import styles from '../assets/styles/home';
import Highlights from '../components/highlights/highlights';
import Posts from '../components/posts/posts';
import ImagesPosts from '../components/ImagePosts/imagePosts';
import Stories from '../components/stories/index';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView 
      style={styles.container}>
        <ScrollView
      showsVerticalScrollIndicator={false}
        >
          <ScrollView
          style={{paddingLeft:'2%'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
          <View style={{display:"flex",flexDirection:'row'}}> 
            <Highlights />
            <Highlights />
            <Highlights />
            <Highlights />
            <Highlights />
            <Highlights />
            <Highlights />
            <Highlights />
            <Highlights />
          </View>
          </ScrollView>
          <ImagesPosts />
          <ImagesPosts />
          <ImagesPosts />
          <ImagesPosts />
          <ImagesPosts />
          <ImagesPosts />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
