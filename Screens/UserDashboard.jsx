import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity, } from 'react-native'
import { theme } from '../theme'

const UserDashboard = () => {
  return (
    <View>
        <View style={{display:'flex',height:600}} >
            <View style={Styles.containerSlots}><Text>scroll</Text>
            </View>
            
            <TouchableOpacity style={Styles.containerButton}>
                    <Text style={Styles.containerButtonText}>Book a Slot</Text>
            </TouchableOpacity>
            
            
        </View>
      
    </View>
  )
}
const Styles=StyleSheet.create({
    containerSlots:{
        flex:1,
    },
    containerButton: {
        color: theme.color.secondary,  // If this is intended for text, move it to the text style
        backgroundColor: theme.color.secondary,
        width: '60%', // Or any other value that fits your design
        padding: 10,
        borderRadius: 10,
        margin:'auto'
         // Center the button horizontally within the parent
      },
    

    containerButtonText:{
        fontSize:20,
        textAlign:'center',
        color:'white'
    }
})

export default UserDashboard
