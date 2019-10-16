import { StyleSheet } from  'react-native'

const styles = StyleSheet.create({
    inforProfile: {
        position:"relative",
        bottom:230,
        margin:10,
        flexDirection:"row",
    },
    inforProfileTtext: {
        flex:2,
        fontSize:11,
        margin:8,
        fontWeight:'bold',
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
    },
    inforProfileNumber: {
        fontSize:19,
        fontWeight:'bold',
    },
    inforProfileImage: {
        marginRight:3,
        marginLeft:5,
        marginTop:59,
        height:110, 
        width:110, 
        borderRadius:110,
        backgroundColor:'darkgray'
    },
    inforProfileButtons: {
        borderColor:'darkgray',
        borderStyle:'solid',
        borderWidth:1,
        borderRadius: 5,
        marginHorizontal:1,
        padding:6,

    }, 
    inforProfileButtonsText :{
        fontSize:15,
        marginHorizontal:13,
        fontWeight:'bold'
    },
    inforProfileButtonslayuot: {
        flexDirection:'row',
        position:'relative',
        bottom:290,
        left:60,
    }
})

export default styles