import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
export const ButtonComponent = props => {
  return (
    <View style={styles.mainButtonContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity {...props}>
          <Text style={{color: '#373A40'}}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainButtonContainer: {
    alignItems: 'baseline',
  },
  buttonContainer: {
    marginTop: 8,
    borderRadius: 8,
    borderWidth: 2,
    padding: 5,
    backgroundColor: '#EEEEEE',
    borderColor: '#DC5F00',
  },
});
