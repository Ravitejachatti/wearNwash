import React, { useState } from 'react'
import { View ,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { postLogin } from '../Redux/Auth/action';
import { AddData } from '../Storage/AddData';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password too short').required('Password is required'),
});

const Login = () => {

  const [errorMessage,setErrorMessage] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();


  const handleSubmit = (values) => {
    console.log("Form submission initiated with values:", values);
  
    dispatch(postLogin(values))
      .then(async (res) => {
        console.log("Res:", res);
  
        if (res?.message) {
          try {
            await AddData("location", res?.location); 
            await AddData("userId", res?.id)
           navigation.navigate("Location");
          } catch (error) {
            console.log("Error saving location:", error);
          }
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        if (err?.response?.data?.message) {
          setErrorMessage(err?.response?.data?.message);
        }
      });
  };
  
  return (
    <Formik
    initialValues={{  email: '', password: ''}}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
   
    {({ values, handleChange, handleBlur, handleSubmit, errors, touched, setFieldValue }) => (
      <View style={styles.inputContainer}>
         <Text style={{textAlign:"center", color:"red"}}>{errorMessage}</Text>
      
        <TextInput
          keyboardType='email-address'
          style={styles.input}
          value={values.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          placeholder='Email'
        />
        {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

       
        <TextInput
          style={styles.input}
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          placeholder='Password'
          secureTextEntry
        />
        {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

       
        <View style={styles.btn}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={{ fontSize: 22, textAlign: 'center', color: 'white' }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )}
  </Formik>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 30,
    marginTop: 60
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 17,
    borderRadius: 15,
    marginBottom: 12,
    fontSize: 20
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 15,
    color: 'black',
    marginBottom: 10
  },
  inputSelect: {
    paddingVertical: 30,
    fontSize: 20,
  },
  btn: {
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '60%',
    alignSelf: 'center',
    backgroundColor: theme.color.secondary,
    marginVertical: 20
  },
  errorText: {
    color: 'red',
    marginBottom: 10
  }
})

export default Login
