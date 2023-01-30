import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';
import {StyleSheet, View, Animated, Pressable} from 'react-native';
import { useRef, useState } from 'react'; 
import IDfront from '../components/IDfront';
import IDback from '../components/IDback';

export default function HomeScreen(props) {
  const {fName, lName, kCashNum, libNumber, UCFID, caste, expDate} = props

  //Create an animation for turning the card over
  const animate = useRef(new Animated.Value(0));
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    Animated.timing(
      animate.current,
      {duration: 300,
      useNativeDriver: true,
      toValue: isFlipped ? 0: 180,}).start(()=>setIsFlipped(!isFlipped));
  };
  const interpolateFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg','180deg'],
  })
  const interpolateBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg','360deg'],
  })

  
  
    return (
      <SafeAreaProvider>
      <View style = {styles.container}>
          <View >
            <Animated.View style = {[{transform: [{rotateY: interpolateFront}]}, styles.hidden, styles.cardContainer]}>
              <IDfront
              isFlipped= {isFlipped}
            fName= {fName}
            lName = {lName} 
            kCashNum ={kCashNum} 
            libNumber = {libNumber} 
            UCFID = {UCFID}
            caste = {caste}
              expDate = {expDate} />
            </Animated.View>
            <Animated.View style = {[{transform: [{rotateY: interpolateBack}]}, styles.back, styles.hidden, styles.cardContainer]}>
              <IDback
              UCFID = {UCFID}/>
            </Animated.View>
        </View>
        <Button title={"Scan Card"} onPress = {handleFlip}></Button>
      </View>
      </SafeAreaProvider>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: "200",
      backgroundColor: "#fff",
      alignItems: 'center', 
      justifyContent: 'center'
    },
    hidden: {
      backfaceVisibility: 'hidden',
    },
    back: {
      position: 'absolute',
      top: 0

    },
    cardContainer: {
      minHeight: 200,
      minWidth: 350,
      maxHeight: 200,
      maxWidth: 350
    }


});