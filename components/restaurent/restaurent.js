import React from 'react';

// import { Container } from './styles';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SectionGrid, FlatGrid} from 'react-native-super-grid';
import {Rating} from 'react-native-ratings';
export default function restaurent() {
  const [item, setItems] = React.useState([
    {
      name: 'Chicken Taste to best Hotel',
      img: require('../../assets/unsplash_nQYALfQKmK4.png')
    },
    {
      name: 'Mughlai Taste in Love Hotel',
      img: require('../../assets/unsplash_ykThMylLsbY.png')
    },
    {
      name: 'Chicken Taste to best Hotel',
      img: require('../../assets/unsplash_nQYALfQKmK4.png')
    },
    {
      name: 'Mughlai Taste in Love Hotel',
      img: require('../../assets/unsplash_ykThMylLsbY.png')
    },
    {
      name: 'Chicken Taste to best Hotel',
      img: require('../../assets/unsplash_nQYALfQKmK4.png')
    },
    {
      name: 'Mughlai Taste in Love Hotel',
      img: require('../../assets/unsplash_ykThMylLsbY.png')
    },
  ]);
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };
  return (
    <>
      
        <FlatGrid
          itemDimension={130}
          data={item}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({item}) => (
            <View style={[styles.itemContainer, {backgroundColor: '#fff'}]}>
              <View style={{height: 100, backgroundColor: '#fff',borderTopRightRadius:14,borderTopLeftRadius:14}}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                  source={item.img}
                />
              </View>
              <View>
                <Text style={styles.cardTxt}>{item.name}</Text>
                <Rating
                  imageSize={20}
                  minValue={2.5}
                  onFinishRating={ratingCompleted}
                  style={{
                    paddingVertical: 10,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginLeft: 5,
                  }}
                />
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      marginLeft: 10,
                      padding: 0,
                      bottom: 5,
                    }}>
                    See more
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      
    </>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    height: 190,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  cardTxt:{
    padding:8,
    fontFamily:'roboto',
    color:'black',
    fontSize:13,
    textAlign:'justify',
    fontWeight:'bold',
  },
});
