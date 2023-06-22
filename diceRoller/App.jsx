import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import DiceFive from './assests/dice5.png';

const App = () => {
  const uri = DiceFive;
  return (
    <>
      <View>
        <Image source={uri} />
        <TouchableOpacity>
          <Text>Play game</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;
