module.exports = {
	dependencies: {
		'react-native-gesture-handler': {
			platforms: {
				ios: null,
			},
		},
		"react-native-camera": {
            platforms: {
                android: null // disable autolinking on android because it doesn't work correctly right now
            }
        }
	},
};
