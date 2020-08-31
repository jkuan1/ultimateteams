import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';

export default class SettingsScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Button 
                    title="My Account"
                    onPress={() => this.props.navigation.navigate('Account Settings')}
                />
            </View>
        
            <View style={styles.section}>
                <Button 
                    title="Notification and Privacy"
                    onPress={() => this.props.navigation.navigate('Notifications and Privacy')} 
                />
            </View>
        </View>
        );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});