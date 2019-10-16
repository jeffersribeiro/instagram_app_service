import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import styles from '../assets/styles/camera'

import { RNCamera } from "react-native-camera";

export default class App extends Component {
	
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      alert(data.uri);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={camera => {
            this.camera = camera;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
					flashMode={RNCamera.Constants.FlashMode.off}
					androidCameraPermissionOptions={{
						title:"Permission to use camera",
						message:"We need your permission to use your camera phone"
					}}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
