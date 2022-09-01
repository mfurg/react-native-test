import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import ImageModal from 'react-native-image-modal';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import axios from 'axios';

const baseUrl = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

export const HomeScreen = ({ navigation }) => {
    
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true)
    axios.get(baseUrl)
      .then(response => {
        setImages(response.data)
        setLoading(false)
      })
      .catch(error => console.log(error));
    
  },[])

  if(loading){
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

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