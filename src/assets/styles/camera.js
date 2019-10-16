import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  capture: {
    borderWidth: 1.5,
		borderStyle: "dotted",
		borderColor: 'darkgray',
		height: 60,
		width: 60,
		borderRadius: 60,
    backgroundColor: 'rgba(100,100,100,0.3)',
		zIndex: 2,
		marginBottom: 10
  },
  buttonText: {
    fontSize: 14
  }
});
export default styles