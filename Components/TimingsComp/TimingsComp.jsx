import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Timings } from '../utils/Timings';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Circle from "react-native-vector-icons/FontAwesome";
import { AddData } from '../../Storage/AddData';
import { GetData } from '../../Storage/GetData';
import { theme } from '../../theme';
const TimingsComp = () => {
  const [time, setTime] = useState("");

  
  useEffect(() => {
    const storeTime = async () => {
      if (time) {
        try {
          await AddData('time', time);
         // console.log("Time added:", time);
        } catch (err) {
         // console.log("Error adding time:", err);
        }
      }
    };
    storeTime();
  }, [time]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedTime = await GetData('time');
        if (storedTime) {
          setTime(storedTime);
        //  console.log("Retrieved time:", storedTime);
        }
      } catch (err) {
      //  console.log("Error retrieving time:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <ScrollView>
       <View style={Styles.selectedShow}>
          <View style={Styles.selectedIcons}>
            <Circle name="circle" size={22}  color="green" />
            <Text>Available</Text>
          </View>

          <View style={Styles.selectedIcons}>
            <Circle name="circle" color="gray" size={22}/>
            <Text>notAvailable</Text>
          </View>
       </View>
      <View style={Styles.cardContainer}>
       
        {
          Timings?.map((item, index) =>
            <TouchableOpacity
              style={Styles.timingsCard}
              key={index}
              onPress={() => { setTime(item.time); }}
            >
              <View>
                <Text><Icon name="washing-machine" color={theme.color.third} size={120} /></Text>
                <Text style={Styles.CardText}>{item.time}</Text>
              </View>
            </TouchableOpacity>
          )
        }
      </View>

        <View>
          <TouchableOpacity style={Styles.btn}>
            <Text style={{fontSize:22, textAlign:"center",color:"white"}}>Proceed</Text>
          </TouchableOpacity>
        </View>

    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  timingsCard: {
    borderWidth: 1,
    borderColor: '#000',
    width: "31%",
    height: 180,
    borderRadius: 14,
    borderStyle: 'solid',
  },

  cardContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    paddingHorizontal: 10,
    paddingTop: 10
  },
  CardText:{
    fontSize:17,
    textAlign:"center",
    textShadowColor:"gray"
  },
  selectedShow:{

    width:"60%",
    margin:"auto",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
  justifyContent:"space-between",
  paddingVertical:10
  },
  selectedIcons:{
    display:"flex",
    alignItems:"center",
    flexDirection:"row",
    gap:6
  },
  btn:{
   
    width:"60%",
    paddingHorizontal:15,
    paddingVertical:15,
    margin:"auto",
    borderRadius:13,
    marginVertical:25,
    backgroundColor:"green",
   
  }
});

export default TimingsComp;
