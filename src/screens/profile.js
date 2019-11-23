import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';
import styles from '../assets/styles/profile';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Highlights from '../components/highlights/highlights';
import Posts from '../components/posts/posts';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView} from 'react-native-gesture-handler';

class Profile extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.pageProfile}>
            <View style={styles.inforProfile}>
              <Image style={styles.inforProfileImage} />
              <TouchableOpacity>
                <Icon style={styles.iconStyle} ios="ios-add" android="md-add" />
              </TouchableOpacity>
              <Text style={styles.inforProfileTtext}>
                <Text style={styles.inforProfileNumber}> 349 </Text>
                publicações
              </Text>
              <Text style={styles.inforProfileTtext}>
                <Text style={styles.inforProfileNumber}>14 mil </Text>
                seguidores
              </Text>
              <Text style={styles.inforProfileTtext}>
                <Text style={styles.inforProfileNumber}>1.469 </Text>
                seguindo
              </Text>
            </View>
            <View style={styles.inforProfileButtonslayout}>
              <TouchableOpacity style={styles.inforProfileButtons}>
                <Text style={styles.inforProfileButtonsText}>Promoçoes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inforProfileButtons}>
                <Text style={styles.inforProfileButtonsText}>
                  Editar perfil
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ProfileDescriptions}>
              <Text
                style={(styles.ProfileDescriptionsText, {fontWeight: 'bold'})}>
                Bume
              </Text>
              <Text
                style={(styles.ProfileDescriptionsText, {color: 'darkgray'})}>
                Serviço de automação
              </Text>
              <Text
                style={(styles.ProfileDescriptionsText, {color: 'skyblue'})}>
                #Bume #MidiasSociais
              </Text>
              <Text
                style={(styles.ProfileDescriptionsText, {color: 'skyblue'})}>
                Belo Horizonte, Brazil
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.ProfileFeatured}>
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
            <View style={styles.ProfileContacts}>
              <TouchableOpacity>
                <Text style={styles.ProfileContactsText}>Enviar Email</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.ProfileContactsText}>Como Chegar</Text>
              </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.profilePosts}>
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
            </SafeAreaView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator(
  {
    Profile: {
      screen: Profile,
    },
  },
  {
    drawerPosition: 'right',
    drawerWidth: 250,
    statusBarAnimation: 'fade',
    drawerType: 'slide',
  },
);

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;
