import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

// const App = () => {
//   return (
//     <>
//       <View style={{backgroundColor: 'rgb(32,0,126)'}}>
//         <Text>Shraddha Singh</Text>
//       </View>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <View style={[styles.Container, {backgroundColor: 'rgb(32,0,126)'}]}>
//         <Text>Shraddha Singh</Text>
//       </View>
//     </>
//   );
// };

const App = () => {
  //const randomColor = 'rgb(32,0,126)';
  const [randomColor, setRandomColor] = useState('rgb(32,10,126)');

  const changeBG = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
    setRandomColor(color);
  };

  const ChangeBlack = () => {
    setRandomColor('#000000');
  };

  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: randomColor,
    },
    text: {
      fontSize: 30,
      backgroundColor: '#BB2CD9',
      paddingVertical: 10,
      paddingHorizontal: 40,
      color: '#FFFFFF',
      borderRadius: 15,
      textTransform: 'uppercase',
    },
    margin: {
      marginTop: 50,
    },
  });

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={styles.Container}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>tap me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ChangeBlack}>
          <Text style={[styles.text, styles.margin]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;
