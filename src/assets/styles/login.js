import  { StyleSheet } from  'react-native'

const stylesLogin = StyleSheet.create({
    homeStyling: {
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        fontSize:30,
        fontWeight: 'bold',
        backgroundColor:'white'
    },
    textDefault: {
        color:'white'
    },
    inputDefault : {
        fontSize:19,
        paddingLeft:26,
        marginTop:1,
        width:'82%',
        borderRadius:5,
        borderWidth:1,
        borderColor:'darkgray'
    },
    buttonLogin: {
        textAlign:'center',
        width:'82%',
        borderRadius:5,
        margin:0,
        fontSize:18,
        paddingVertical:15,
        color:'white',
        backgroundColor:'skyblue'
    }, 
    buttonLoginFacebook: {
        textAlign:'center',
        width:'82%',
        borderWidth:1,
        fontSize:18,
        color:'skyblue',
        borderStyle:'solid',
        borderColor:'skyblue',
        borderRadius:5,
        marginBottom:36,
        paddingVertical:15,
    }

})
export default stylesLogin