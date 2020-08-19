import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const url = 'https://canada-holidays.ca/api/v1/provinces/BC';

export default class HomeScreen extends React.Component {
  state = {
    name: [],
    date: []
  }

  componentDidMount() {
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({ name: data.province.nextHoliday.nameEn})
    })
    .catch(console.log("Could not fetch name"))

    this.getDate();
  }

  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.bgImage}
          resizeMode="cover"
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome, {this.state.name}</Text>          
          </View>
          
            <View style={styles.section}>
            <Text color="#19e7f7" size={15}>
              {this.state.date}
            </Text>
            <Text size={30} bold white style={styles.title}>
              University Hill Hawks
            </Text>
          </View>
          <View style={[styles.section, styles.sectionLarge]}>
            <Text color="#19e7f7" hCenter size={15} style={styles.description}>
              {' '}
              Practice is at 3:30 today on the south fields, make sure to bring water and cleats
            </Text>
          </View>
        </ImageBackground>
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
    bgImage: {
      flex: 1,
      marginHorizontal: -20,
    },
    section: {
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sectionLarge: {
      flex: 2,
      justifyContent: 'space-around',
    },
    sectionHeader: {
      marginBottom: 8,
    },
    priceContainer: {
      alignItems: 'center',
    },
    description: {
      padding: 15,
      lineHeight: 25,
    },
    titleDescription: {
      color: '#19e7f7',
      textAlign: 'center',
      fontFamily: fonts.primaryRegular,
      fontSize: 15,
    },
    title: {
      marginTop: 30,
    },
    price: {
      marginBottom: 5,
    },
    priceLink: {
      borderBottomWidth: 1,
      borderBottomColor: colors.primary,
    },
  });