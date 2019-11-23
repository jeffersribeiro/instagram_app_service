import {StyleSheet} from 'react-native'

let count = 1;

setInterval(()=> {
count ++
}, 1000)

const styles = StyleSheet.create({
    featured: { 
        margin:9,
        height: 82,
        width: 82,
        borderRadius: 82,
        borderColor:'#eb4823',
        borderStyle:'dashed',
        borderWidth:1.4,
        transform: [{ 
            rotate: `${count}deg`
             
        }]
    }
})
export default styles