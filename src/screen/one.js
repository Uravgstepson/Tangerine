import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

import {movieData} from '../../assets/Datas/MovieData';

const One = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={movieData}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({item}) => {
          return (
            <View style={styles.dataContainer}>
              <Image style={styles.movieImage} source={{uri: item.imageLink}} />
              <View style={styles.Desc}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.years}>
                  <Text style={styles.year}>{item.year}</Text>
                </View>
                <View style={styles.ratings}>
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
  },
  flatListContainer: {
    padding: 8,
  },
  movieImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  dataContainer: {
    margin: 10,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  year: {
    marginLeft: 5,
  },
  Desc: {
    display: 'flex',
    justifyContent: 'center',
    margin: 4,
  },
  years: {
    marginTop: 4,
  },
  rating: {
    marginLeft: 5,
  },
  ratings: {
    marginTop: 4,
  },
});

export default One;
