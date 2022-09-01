import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import ImageModal from 'react-native-image-modal';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

export const HomeScreen = ({ navigation }) => {

  const images = useSelector((store) => store.images);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
        {images.map(image => (
          <View key={image.id}>
            <ImageModal
              resizeMode="contain"
              imageBackgroundColor="#000000"
              style={styles.image}
              source={{
                uri: image.urls.small,
              }}
            />
            <View style={styles.image_description}>
              <Text 
                style={styles.title}
                onPress={() => {
                    navigation.navigate('Details', {image});
                  }}>
                {image.id}
              </Text>
            </View>
          </View>
        ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "white"
    },
    image_description: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'beige',
    },
    image: {
      height: 600,
      width: Dimensions.get('window').width,
    },
    title: {
      marginTop: 10,
      fontSize: 24,
      textAlign: 'center',
      fontWeight: 'bold',
      color: "black"
    },
    description: {
      fontSize: 16,
      color: "black"
    },
  });