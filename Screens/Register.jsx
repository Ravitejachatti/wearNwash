import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { postRegister } from '../Redux/Auth/action';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]+$/, "Phone number must be numeric").required('Phone is required'),
  password: Yup.string().min(6, 'Password too short').required('Password is required'),
  gender: Yup.string().required('Gender is required'),
  location: Yup.string().required('Location is required')
});

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [errorMessage,setErrorMessage ] = useState("")

  const handleSubmit = (values) => {
    console.log("Form submission initiated with values:", values);

    dispatch(postRegister(values))
      .then((res) => {
        console.log("Res:", res);
        
        if(res?.message){
             navigation.navigate("Login"); 
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        if(err?.response?.data?.message ){
          setErrorMessage(err?.response?.data?.message)
        }
      });
  };

  console.log("hare krishna")
  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '', password: '', gender: '', location: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
     
      {({ values, handleChange, handleBlur, handleSubmit, errors, touched, setFieldValue }) => (
        <View style={styles.inputContainer}>
           <Text style={{textAlign:"center", color:"red"}}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            placeholder='Name'
          />
          {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

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
            keyboardType='numeric'
            style={styles.input}
            value={values.phone}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            placeholder='Phone'
          />
          {touched.phone && errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

          <TextInput
            style={styles.input}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder='Password'
            secureTextEntry
          />
          {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          <View style={styles.inputWrapper}>
            <RNPickerSelect
              onValueChange={(value) => setFieldValue('gender', value)}
              placeholder={{
                label: 'Gender',
                value: null,
              }}
              value={values.gender}
              items={[
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
              ]}
              style={{
                inputIOS: styles.input,
                inputAndroid: styles.inputSelect,
                placeholder: styles.placeholder,
              }}
            />
          </View>
          {touched.gender && errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}

          <View style={styles.inputWrapper}>
            <RNPickerSelect
              onValueChange={(value) => setFieldValue('location', value)}
              placeholder={{
                label: 'Locations',
                value: null,
              }}
              value={values.location}
              items={[
                { label: 'MHP-1', value: 'MHP-1' },
                { label: 'MHP-2', value: 'MHP-2' },
                { label: 'MHP-3', value: 'MHP-3' },
                { label: 'AUB1-1', value: 'AUB1-1' },
                { label: 'AUB1-2', value: 'AUB1-2' },
                { label: 'AUB2-1', value: 'AUB2-1' },
                { label: 'AUB2-3', value: 'AUB2-3' },
                { label: 'SMT-1', value: 'SMT-1' },
                { label: 'SMT-2', value: 'SMT-2' },
                { label: 'MT-1', value: 'MT-1' },
                { label: 'MMT-2', value: 'MMT-2' },
              ]}
              style={{
                inputIOS: styles.input,
                inputAndroid: styles.inputSelect,
                placeholder: styles.placeholder,
              }}
            />
          </View>
          {touched.location && errors.location && <Text style={styles.errorText}>{errors.location}</Text>}

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
  );
};

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
});

export default Register;
