import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GetData } from '../Storage/GetData';
import CustomBtn from '../Custom/CustomBtn/CustomBtn';
import { useDispatch } from 'react-redux';
import { bookingSlot } from '../Redux/App/action';
import { theme } from '../theme';
const Payment = () => {
  const [date, setDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState(null);
  const [machineName, setMachineName] = useState(null);
  const [centerId ,setCenterId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [machineId,setMachineId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const userSelectedDetails = async () => {
      try {
        const date = await GetData("date");
        const machineName = await GetData("machineName");
        const timeSlot = await GetData("timeSlot");
        const userId = await GetData("userId");
        const centerId = await GetData("locationId");
        const machineId  = await GetData("machineId");

       
        if (date && timeSlot && machineName && userId && centerId && machineId) {
          setDate(JSON.parse(date));
          setTimeSlot(JSON.parse(timeSlot));
          setMachineName(JSON.parse(machineName));
          setUserId(JSON.parse(userId));
          setCenterId(JSON.parse(centerId))
          setMachineId(JSON.parse(machineId))
        }
      } catch (error) {
        console.error("Failed to fetch user-selected details from AsyncStorage", error);
      }
    };

    userSelectedDetails();
  }, []);




const handleSubmit = ()=>{

  const payload = {
    userId, centerId, machineId , timeSlot, date
  }

      dispatch(bookingSlot(payload))
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
},[])
}


  return (
    <View>
      <View style={styles.Container}>
        {date && <Text style={styles.heading}>Date: {date}</Text>}
        {timeSlot && <Text style={styles.heading}>Time Slot: {timeSlot}</Text>}
        {machineName && <Text style={styles.heading}>Machine ID: {machineName}</Text>}
      </View>

      <View>
        <CustomBtn text="combo" />
      </View>

     <TouchableOpacity    onPress={handleSubmit}  style={styles.btn}>
            <Text style={{ fontSize: 22, textAlign: "center", color: "white" }}>Proceed</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: 1,
    textAlign: "center",
  },
  heading: {
    fontSize: 20,
    marginBottom: 4,
    textAlign: "center",
    paddingVertical: 10,
  },

  btn:{
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "60%",
    margin: "auto",
    backgroundColor: theme.color.secondary,
    marginVertical:20
   }
});

export default Payment;
