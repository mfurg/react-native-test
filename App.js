import React from 'react';
import { Navigator } from './src/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';
import { fetchImages } from './src/store/imagesSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const baseUrl = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

const App = () => {

  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setLoading(true)
    axios.get(baseUrl)
      .then(response => {
        dispatch(fetchImages(response.data))
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
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;