import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  number: Yup.string().required('Number is required'),
  password: Yup.string().min(6, 'Password too short').required('Password is required'),
  gender: Yup.string().required('Gender is required')
});

const Register = () => {
  const handleSubmit = (values) => {
    console.log('formSubmit', values);
  };

  const navigation = useNavigation()

const handlePress=()=>{
  handleSubmit();
  navigation.navigate("Home")
}
  return (
    <Formik
      initialValues={{ name: '', email: '', number: '', password: '', gender: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors, touched, setFieldValue }) => (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            placeholder='Name'
          />
          {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

          <TextInput
            style={styles.input}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder='Email'
          />
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            value={values.number}
            onChangeText={handleChange('number')}
            onBlur={handleBlur('number')}
            placeholder='Number'
          />
          {touched.number && errors.number && <Text style={styles.errorText}>{errors.number}</Text>}

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
            {touched.gender && errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
          </View>

          <View style={styles.btn}>
            <TouchableOpacity onPress={handlePress}>
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
    paddingHorizontal: 30
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
    color: 'black'
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
    marginHorizontal: 'auto',
    backgroundColor: theme.color.secondary,
    marginVertical: 20
  },
  errorText: {
    color: 'red',
    marginBottom: 10
  }
});

export default Register;
