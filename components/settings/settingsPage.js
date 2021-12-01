import React, { useState } from 'react';
import {View, Text, Switch, Button, Alert} from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';

const SettingsPage = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [Enabled, setEnabled] = useState(false);
    const toggleswitch = () => setEnabled(previousState => !previousState);

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Logout",
      "Log out of the application",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel"),
          style: "cancel"
        },
        { text: "Logout", onPress: () => console.log("logout") }
      ]
    );

    return (
        <View style = {styles.sContainer}>
            <View style={styles.headerC}>
            <View style={styles.header}>
                <View style={ styles.vheader}>
                <FontAwesomeIcon icon={ faAngleLeft } color={ 'black' } size={ 28 }/>
                <Text style={styles.sT}>Settings</Text>
                </View>
                <FontAwesomeIcon icon={faSearch} size={ 22 }/>
            </View>
            <View style={styles.profileContainer}>
                <View>
                    <Text style={styles.profileText}>JBY cakes</Text>
                    <Text style={styles.profileText}>example@gmail.com</Text>
                </View>
                <View style={styles.profilePicture}></View>
                </View>
            </View>
            <View style={styles.subSection}>
                <Text style={styles.hT}>GENERAL</Text>
            <View style={styles.sOption}>
                <Text style={styles.optionsText}>Edit Profile</Text>
                <FontAwesomeIcon icon={faAngleRight} size={ 24 }/>
            </View>
            <View style={styles.sOption}>
                <Text style={styles.optionsText}>Change Password</Text>
                <FontAwesomeIcon icon={faAngleRight} size={ 24 }/>
            </View>
            <View style={styles.sOption}>
                <Text style={styles.optionsText}>Change Language</Text>
                <FontAwesomeIcon icon={faAngleRight} size={ 24 }/>
            </View>
            <Text style={styles.hT}>NOTIFICATIONS</Text>
            <View style={styles.sOption}>
                <Text style={styles.optionsText}>Notifications</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.sOption}>
                <Text style={styles.optionsText}>Job Updates</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={Enabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleswitch}
                    value={Enabled}
                />
            </View>
            <Text style={styles.hT}>TERMS AND SUPPORT</Text>
            <View style={styles.sOption}>
                <Text style={styles.optionsText}>Terms and Conditions</Text>
                <FontAwesomeIcon icon={faAngleRight} size={ 24 }/>
            </View>
            <View style={styles.sOption}>
                <Text style={styles.optionsText}>Privacy Policy</Text>
                <FontAwesomeIcon icon={faAngleRight} size={ 24 }/>
            </View>
            <View style={styles.sOption}>
                <Text style={styles.optionsText}>Support</Text>
                <FontAwesomeIcon icon={faAngleRight} size={ 24 }/>
            </View>
            </View>
            <View style={styles.footer}>
            <View style={styles.logout} >
                <Button color='tomato' title="Logout" onPress={createTwoButtonAlert} />
            </View>
            </View>
            
        </View>
    )
};

export default SettingsPage;