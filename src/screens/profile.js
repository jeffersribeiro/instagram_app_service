import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from'react-native'
import styles from '../assets/styles/profile'

export default class Profile extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <View style={styles.inforProfile}>
          <Image
            style={styles.inforProfileImage}
           />
            <Text style={styles.inforProfileTtext}>
              <Text style={styles.inforProfileNumber}>  349    </Text>
              publicações
            </Text>
            <Text style={styles.inforProfileTtext}>
            <Text style={styles.inforProfileNumber}>145 mil</Text>
                seguidores
            </Text>
            <Text style={styles.inforProfileTtext}>
              <Text style={styles.inforProfileNumber}>1.469  </Text>
              seguindo
            </Text>
          </View>
          <View style={styles.inforProfileButtonslayuot}>
            <TouchableOpacity style={styles.inforProfileButtons}>
              <Text style={styles.inforProfileButtonsText}>Promoçoes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inforProfileButtons}>
              <Text style={styles.inforProfileButtonsText}>Editar perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }