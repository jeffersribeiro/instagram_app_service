import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-ionicons';
import styles from '../assets/styles/profile';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import NewFeatured from '../components/ new_featured/index';
import ImagesPosts from '../components/images_posts/index';

class Profile extends Component {
  render() {
    return (
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
            <Text style={styles.inforProfileButtonsText}>Editar perfil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ProfileDescriptions}>
          <Text style={(styles.ProfileDescriptionsText, {fontWeight: 'bold'})}>
            Bume
          </Text>
          <Text style={(styles.ProfileDescriptionsText, {color: 'darkgray'})}>
            Serviço de automação
          </Text>
          <Text style={(styles.ProfileDescriptionsText, {color: 'skyblue'})}>
            #Bume #MidiasSociais
          </Text>
          <Text style={(styles.ProfileDescriptionsText, {color: 'skyblue'})}>
            Belo Horizonte, Brazil
          </Text>
        </View>
        <View style={styles.ProfileFeatured}>
          <View style={styles.profileFeaturedImage}>
            <NewFeatured />
          </View>
          <View style={styles.profileFeaturedImage}>
            <NewFeatured />
          </View>
          <View style={styles.profileFeaturedImage}>
            <NewFeatured />
          </View>
          <View style={styles.profileFeaturedImage}>
            <NewFeatured />
          </View>
        </View>
        <View style={styles.ProfileContacts}>
          <TouchableOpacity>
            <Text style={styles.ProfileContactsText}>Enviar Email</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.ProfileContactsText}>Como Chegar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profilePosts}>
          <ImagesPosts />
        </View>
      </View>
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
