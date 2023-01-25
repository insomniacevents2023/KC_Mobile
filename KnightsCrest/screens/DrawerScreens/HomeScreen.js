import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';
import {StyleSheet, View, Animated} from 'react-native';
import { useRef } from 'react';
import FlipCard from '../../components/FlipCard';
export default function HomeScreen({ navigation }) {

  const animate = useRef(new Animated.Value(0));

  const handleFlip = () => {
    Animated.timing(
      animate.current,
      {duration: 300,
      toValue: 180,
    useNativeDriver: true}).start();
  };
  const interpolateFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg','180deg'],
  })
  const interpolateBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg','180deg'],
  })

  
  
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
        <View>
          <Animated.View style = {[{transform: [{rotateY: interpolateFront}]}, styles.hidden]}>
            <FlipCard title = 'front'/>
          </Animated.View>
          <View style={[styles.back, styles.hidden]}>
            <FlipCard title = 'back'/>
          </View>
          <Button onPress={handleFlip} title = 'press me'></Button>
        </View>
      </View>
      </SafeAreaProvider>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center'
    },
    hidden: {
      backfaceVisibility: 'hidden',
    },
    back: {
      position: 'absolute',
      top: 0

    }
});