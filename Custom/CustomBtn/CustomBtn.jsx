import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import { theme } from '../../theme'
import { useNavigation } from '@react-navigation/native'
const CustomBtn = ({text, nav, disabled}) => {
    
    const navigation = useNavigation()

  return (

    <View style={styles.btn}>
           <TouchableOpacity
           disabled={disabled}
            onPress={()=>navigation.navigate(nav)}
           >
            <Text style={{ fontSize: 22, textAlign: "center", color: "white" }}>
              {text}
            </Text>
          </TouchableOpacity>
         
    </View>
  )
}

const styles = StyleSheet.create({
   btn:{
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "60%",
    margin: "auto",
    backgroundColor: theme.color.secondary,
    marginVertical:20
   }
})

export default CustomBtn