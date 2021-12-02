import React, { useState } from "react";
import {View, Button, Text, TextInput, Switch} from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


const SettingsComponent = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.backButtonContainer}>
                <FontAwesomeIcon icon={ faAngleLeft } color={ 'blue' } size={ 28 }/>
            </View>
            <View style={styles.profileContainer}>
                <View style={styles.profileImageBorder}/>
                <Text style={styles.text}>Account Settings</Text>
            </View>
            <View style={styles.subContainer}> 
                <View>
                    <View style={styles.sc}><TextInput style={styles.textInput} placeholder="Fullname"/><Text style={styles.save}>Save</Text></View>
                    <View style={styles.sc}><TextInput style={styles.textInput} placeholder="Email"/><Text style={styles.save}>Save</Text ></View>
                    <View style={styles.sc}><TextInput style={styles.textInput} placeholder="Contact"/><Text style={styles.save}>Save</Text></View>
                    <View style={styles.sc}><TextInput style={styles.textInput} placeholder="Category"/><Text style={styles.save}>Save</Text></View>
                </View>
            </View>
                <View style={styles.notificationContainer}>
                <Text style={ styles.t}>Notifications</Text>
                <Switch
                    trackColor={{ false: "#000", true: "#000" }}
                    thumbColor={isEnabled ? "#00" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.ot}>
                <Text style={styles.t}>FAQS</Text>
                <Text style={styles.t}>SEND FEEDBACK</Text>
                <Text style={styles.t}>ABOUT</Text>
            </View>
            <View style={styles.otc}>
            <View style={styles.resetb}>
                <TouchableOpacity>
                    <Text style={styles.rt}>RESET</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.lbc}>
                <View style={styles.lb}>
                <TouchableOpacity>
                    <Text style={styles.lt}>LOGOUT</Text>
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
    );
}

export default SettingsComponent;