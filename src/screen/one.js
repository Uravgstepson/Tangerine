import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {movieData} from '../../assets/Datas/MovieData';

const One = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{padding: 8}}
        data={movieData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View
              style={{
                margin: 8,
                backgroundColor: 'lavender',
                borderWidth: 1,
              }}>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default One;
