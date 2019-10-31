import {StyleSheet} from 'react-native'

let count = 1;

setInterval(()=> {
count ++
}, 1000)

const styles = StyleSheet.create({
    featured: { 
        margin:-4.9,
        height: 95,
        width: 95,
        borderRadius: 95,
        borderColor:'#eb4823',
        borderStyle:'dashed',
        borderWidth:2,
        display:'flex',
        alignSelf:'flex-end',
        transform: [{ 
            rotate: `${count}deg`
             
        }]
    }
})
export default styles