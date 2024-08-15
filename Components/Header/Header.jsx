import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity, } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../../theme'
// import { Button } from 'native-base'


const Header = () => {
  return (
    <View >
        <View style={Styles.container}>
        <Icon name="menu" color="white" size={30}/>
        <Text style={Styles.containerText}>WearNWash</Text>
       
        </View>

        {/* <Button> hare krishna</Button> */}


        
        
        
        
      
    </View>
  )
}
const Styles=StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        paddingHorizontal:20,
        borderWidth:1,
        borderColor:'black',
        height:120,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        backgroundColor:"green",
        marginTop:30
        
    },

    containerText:{
        fontSize:25,
        fontWeight:"600",
        color:"white"
        
    }
})

export default Header
