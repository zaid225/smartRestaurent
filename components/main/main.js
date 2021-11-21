import React from 'react';

// import { Container } from './styles';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {SectionGrid, FlatGrid} from 'react-native-super-grid';
import {Rating} from 'react-native-ratings';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  img: {
    width: 60,
    height: 60,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 0,
    textAlign: 'justify',
    color: 'black',
    top: 0,
    left: 0,
    marginRight: 20,
  },
  container1: {
    left: 17,
    bottom: 0,
    top: 57,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    marginLeft: 15,
  },
  card1: {
    backgroundColor: '#FFCC63',
    borderRadius: 12,
    width: 110,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  btn1: {
    backgroundColor: '#fff',
    width: 42,
    height: 42,
    top: 12,
    left: 12,
    borderRadius: 21,
  },
  icon1: {
    height: 35,
    width: 35,
    top: 5,
    left: 2,
    borderRadius: 0,
  },
  cardTxt1: {
    top: 10,
    bordeRadius: null,
    fontFamily: 'roboto',
    color: 'black',
    fontSize: 14,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  para1: {
    color: '#fff',
    top: 5,
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 20,
    height: 150,
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
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
  headingSection: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex:0,
    
  },
  headingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  gridView1: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer1: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height:205

  },
  
  card2: {
    borderRadius: 12,
  },
});
export default function main() {
  const [items, setItems] = React.useState([
    {
      name: 'Appetizer',
      para: '149 Course',
      img: require('../../assets/bowl.png'),
    },
    {
      name: 'Main Dish',
      para: '112 Course',
      img: require('../../assets/hotbowl.png'),
    },
    {
      name: 'Desserts',
      para: '150 Course',
      img: require('../../assets/dessert.png'),
    },
  ]);
  const [item, setItem] = React.useState([
    {name: 'TURQUOISE', code: '#1abc9c'},
    {name: 'EMERALD', code: '#2ecc71'},
  ]);
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };

  return (
    <>
      <View style={styles.container1}>
        <Image
          style={styles.img}
          source={require('../../assets/profile.png')}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.txt}>
          Hello, Tommy {'\n'}
          What food you want today?
        </Text>
      </View>
      <SectionGrid
        itemDimension={90}
        // staticDimension={300}
        // fixed
        // spacing={20}
        sections={[
          {
            data: items.slice(0, 3),
          },
        ]}
        style={styles.gridView}
        renderItem={({item, section, index}) => (
          <View style={[styles.itemContainer]}>
            <Card style={styles.card1}>
              <TouchableOpacity style={styles.btn1}>
                <Image style={styles.icon1} source={item.img} />
              </TouchableOpacity>
              <Card.Content>
                <Title style={styles.cardTxt1}>{item.name}</Title>
                <Paragraph style={styles.para1}>{item.para}</Paragraph>
              </Card.Content>
            </Card>
          </View>
        )}
      />
      <View style={styles.headingSection}>
        <Text style={styles.headingText}>Restaurants Near Me</Text>
       
      </View>
      <FlatGrid
          itemDimension={120}
          data={item}
          style={styles.gridView1}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({item}) => (
            <View style={[styles.itemContainer1]}>
              <Card>
                <Card.Cover
                  
                 style={{objectFit:'cover'}}
                  source={require('../../assets/unsplash_nQYALfQKmK4.png')}
                />
                <Card.Content>
                  <Title style={styles.cardTxt1}>
                    Chicken Taste to best Hotel
                  </Title>
                  <Rating
                    imageSize={20}
                    minValue={2.5}
                    onFinishRating={ratingCompleted}
                    style={{
                      paddingVertical: 10,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    }}
                  />
                </Card.Content>
                <Card.Actions>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        marginLeft: 10,
                      }}>
                      See more
                    </Text>
                  </TouchableOpacity>
                </Card.Actions>
              </Card>
            </View>
          )}
        />
    </>
  );
}
