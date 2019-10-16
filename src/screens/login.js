import React, { Component } from 'react'
import stylesLogin from '../assets/styles/login'
import {
	View,
	Text,
	TextInput,
	TouchableNativeFeedback, 
	Image
} from 'react-native'


export default class LoginScreen extends Component {
	render() {
		return (
			<View style={stylesLogin.homeStyling}>
				<Image
					style={{ width: '70%', height: 90, marginTop: 36 }}
					source={require('../assets/images/instagram-logo.png')}></Image>
				<TextInput
					placeholder={'Nome de Usuário'}
					style={stylesLogin.inputDefault} />
				<TextInput
					placeholder={'Senha'}
					style={stylesLogin.inputDefault} />
				<TouchableNativeFeedback
					onPress={() => this.props.navigation.navigate('Home')}>
					<Text
						style={stylesLogin.buttonLogin}>Entrar
					</Text> 
				</TouchableNativeFeedback>
				<Text>Esqueceu seus detalhes de login?</Text>
				<Text style={{ color: 'skyblue' }}>Obter ajuda para Fazer login</Text>
				<Text style={{ fontWeight: 'bold', fontSize: 16 }}>OU</Text>
				<TouchableNativeFeedback>
					<Text
						style={stylesLogin.buttonLoginFacebook}>Entrar com o facebook</Text>
				</TouchableNativeFeedback>
			</View>
		)
	}
}