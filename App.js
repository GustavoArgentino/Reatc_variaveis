import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground} from 'react-native';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount = () => {
    setCount1(count1 + 1);
  };

  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };

  const zerar = () => {
    setCount1(0);
    setCount2(0);
  };

  return (
    <ImageBackground source={{uri:'https://preview.redd.it/kanye-west-graduation-3840x2160-v0-kjektcn4myv91.png?auto=webp&s=09ab551caf64aa606dc8720953ad6abaca36c079'}} style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.counterContainer}>
          <View style={styles.counter}>
            <Text style={styles.title}>Contador 1</Text>
            <Text style={styles.count}>{count1}</Text>
            <Button title="Incrementar" onPress={incrementCount} />
          </View>
          <View style={styles.counter}>
            <Text style={styles.title}>Contador 2</Text>
            <Text style={styles.count}>{count2}</Text>
            <Button title="Incrementar" onPress={incrementCount2} />
            
          </View>
        </View>
        <Button title="Zerar" onPress={zerar} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
  },
  counter: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  count: {
    fontSize: 30,
    marginBottom: 5,
  },
});
