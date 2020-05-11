import React, { Fragment,Component } from 'react';
import { Container, Button, Text, View } from 'native-base';
//import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet,TextInput,TouchableOpacity,SafeAreaView,Switch,PermissionsAndroid, Platform, Alert,FlatList,ActivityIndicator } from 'react-native';
import { Formik } from "formik";
import * as yup from "yup";
//import Contacts from 'react-native-contacts';
//import ContactsPicker from 'react-native-contacts-chooser';
import Contacts from 'react-native-unified-contacts';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Select from 'react-select';
import Contacts1 from 'react-native-contacts';

const DATA = [
   {
     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
     title: 'First Item',
   },
   {
     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
     title: 'Second Item',
   },
   {
     id: '58694a0f-3da1-471f-bd96-145571e29d72',
     title: 'Third Item',
   },
 ];

 function Item({ title }) {
   return (
     <View style={styles.item}>
       <Text style={styles.title}>{title}</Text>
     </View>
   );
 }

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = yup.object({

   name: yup
   .string()
   .label("Name")
   .required(),
   phone: yup
   .string()
   .label("Phone number")
   .required()
   .matches(phoneRegExp, 'Phone number is not valid'),
    
 });
 
const scaryAnimals = [
   { label: "Alligators", value: 1 },
   { label: "Crocodiles", value: 2 },
   { label: "Sharks", value: 3 },
   { label: "Small crocodiles", value: 4 },
   { label: "Smallest crocodiles", value: 5 },
   { label: "Snakes", value: 6 },
 ];
 

 var items = [
   //name key is must.It is to show the text in front
   { id: 1, name: 'angellist' },
   { id: 2, name: 'codepen' },
   { id: 3, name: 'envelope' },
   { id: 4, name: 'etsy' },
   { id: 5, name: 'facebook' },
   { id: 6, name: 'foursquare' },
   { id: 7, name: 'github-alt' },
   { id: 8, name: 'github' },
   { id: 9, name: 'gitlab' },
   { id: 10, name: 'instagram' }
 ];
 
//  var items= Contacts.getContacts( (error) =>  {
//    if (error) {
//      console.error(error);
//    }
//    else {
      
//       console.error("success");
//    }
//  });

 const StyledSwitch = ({ formikKey, formikProps, label, ...rest }) => (
   <View style={{ marginHorizontal: 20 }}>
     <Text style={{ marginBottom: 3 }}>{label}</Text>
     <Switch
       style={{ marginRight: 330 }}
       value={formikProps.values[formikKey]}
       onValueChange={(value) => {
         formikProps.setFieldValue(formikKey, value);
       }}
       {...rest}
     />
     <Text style={{ color: "red" }}>
       {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
     </Text>
   </View>
 );

class Inputs extends Component {
    state = {
       email: '',
       password: '',
       phone: '',
       name: '',
       isLoading: true,
       myContacts:[],
       FlatListItems: [
         { id: '1', value: 'A' },
         { id: '2', value: 'B' },
         { id: '3', value: 'C' },
         { id: '4', value: 'D' },
         { id: '5', value: 'E' },
         { id: '6', value: 'F' },
         { id: '7', value: 'G' },
         { id: '8', value: 'H' },
         { id: '9', value: 'I' },
         { id: '10', value: 'J' },
         { id: '11', value: 'K' },
         { id: '12', value: 'L' },
         { id: '13', value: 'M' },
         { id: '14', value: 'N' },
         { id: '15', value: 'O' },
         { id: '16', value: 'P' },
         { id: '17', value: 'Q' },
         { id: '18', value: 'R' },
         { id: '19', value: 'S' },
         { id: '20', value: 'T' },
         { id: '21', value: 'U' },
         { id: '22', value: 'V' },
         { id: '23', value: 'W' },
         { id: '24', value: 'X' },
         { id: '25', value: 'Y' },
         { id: '26', value: 'Z' },
       ]
    }
    FlatListItemSeparator = () => {
      return (
        //Item Separator
        <View
          style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
        />
      );
    }
    GetItem(item) {
      //Function for click on an item
      Alert.alert(item);
    }
    

    handleEmail = (text) => {
       this.setState({ email: text })
    }
    handlePassword = (text) => {
       this.setState({ password: text })
    }
    login = (email, pass) => {
       alert('email: ' + email + ' password: ' + pass)
    }
    handlePhone = (text) => {
        this.setState({ phone: text })
     }
     handleName = (text) => {
      this.setState({ name: text })
   }
    readContact=()=>{
        Contacts.selectContact( (error, contact) =>  {
            if (error) {
              console.error(error);
            }
            else {
               
                this.handlePhone(contact['phoneNumbers'][0]['stringValue']);
                this.handleName(contact['displayName']);
                //console.log(contact['displayName']);
            }
          });
    }

    getMyContact=()=>{
      PermissionsAndroid.request(
         PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
         {
           'title': 'Contacts',
           'message': 'This app would like to view your contacts.',
           'buttonPositive': 'Please accept bare mortal'
         }
       ).then(() => {
         Contacts1.getAll((err, contacts) => {
           if (err === 'denied'){
            this.setState({ isLoading: false }); 
             // error
           } else {
             // contacts returned in Array
             this.setState({ isLoading: false }); 
             this.setState({ myContacts: contacts })
             //console.log(this.state.myContacts);
           }
         })
       })
  }

  componentDidMount() {
   this.getMyContact();
  }
    render() {
       return (
         
            
                        
          <View style = {styles.container}>
                 <View  >
                             <Text style={styles.appTitleLarge}>POSAH |Remittance</Text>
                             
                </View>
                <View  >
                <Text style={styles.appTitleLarge}></Text>
                             
                </View>
                <View  >
                             <Text style={styles.appTitleSmall}>Choose contact</Text>
                             
                </View>
      
      <View>
      {this.state.isLoading &&  <ActivityIndicator size="large" color="#0000ff" />} 
      </View>
<View>
<View  >
                             <Text style={styles.appTitleSmall}></Text>
                             
</View>

<FlatList
          data={this.state.myContacts}
          //data defined in constructor
          ItemSeparatorComponent={this.FlatListItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View>
              <Text
                style={styles.item}
                onPress={this.GetItem.bind(
                  this,
                  'Id : ' + item.recordID + ' Value : ' + item.phoneNumbers[0]
                )}>
                {item['displayName']}
              </Text>
            </View>
          )}
        />
</View>

                <Formik
      initialValues={{
        email: "",
        password: "",
        phone:  "",
        name: ""
      }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));

        actions.resetForm();
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={validationSchema}
    >
       {(formikProps) => (
        <React.Fragment>
    
        </React.Fragment>
      )}
</Formik>            
             
          </View>    
         
       )
    }
 }
 export default Inputs
 
 const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#0000FF',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#0000FF',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    },
    appTitleLarge: {
                fontSize: 30,
                fontFamily: 'Legal Std Bold',
                fontWeight: 'bold',
                color: '#0000FF'
            },
            appTitleSmall: {
                fontSize: 30,
                fontFamily: 'Legal Std Bold',
                marginLeft: 10,
                color: '#0000FF'
            },
            appTitleView: {
                        flexDirection: 'row'
                    }
 })
