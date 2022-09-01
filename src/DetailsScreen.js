import * as React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const DetailsScreen = ({route}) => {
    
  const {image} = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: image.urls.small}} />
          <View style={styles.image_description}>
            <Text style={styles.title}>
              {image?.id}
            </Text>
            <Text style={styles.description}>{JSON.stringify(image)}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
  },
  image_description: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'beige',
  },
  image: {
    height: 400,
    flex: 1,
    width: null,
  },
  title: {
    marginLeft: 10,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: "black"
  },
  description: {
    fontSize: 16,
    marginLeft: 10,
    color: "black"
  },
});