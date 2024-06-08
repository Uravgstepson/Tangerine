import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

import {movieData} from '../../assets/Datas/MovieData';

const One = ({navigation}) => {
  const sortedMovieData = [...movieData].sort((a, b) => b.rating - a.rating);

  return (
    <View>
      <FlatList
        contentContainerStyle={{padding: 8}}
        data={movieData}
        keyExtractor={item => item.id}
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
    backgroundColor: '#1A2130',
  },
  flatListContainer: {
    padding: 8,
  },
  movieImage: {
    width: 125,
    height: 185,
    borderRadius: 10,
  },
  dataContainer: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#373A40',
  },
  year: {
    marginLeft: 5,
    backgroundColor: '#DC5F00',
    color: '#EEEEEE',
    fontWeight: 'bold',
    borderRadius: 3,
    paddingLeft: 4,
    paddingRight: 4,
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
    backgroundColor: '#373A40',
    color: '#EEEEEE',
    paddingLeft: 4,
    paddingRight: 4,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  ratings: {
    marginTop: 4,
  },
  ContainerOut: {
    backgroundColor: '#EEEEEE',
    borderColor: '#DC5F00',
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    margin: 10,
  },
  Descrip: {
    flexDirection: 'row',
  },
  buton: {
    alignItems: 'flex-end',
    margin: 4,
  },
});

export default One;
