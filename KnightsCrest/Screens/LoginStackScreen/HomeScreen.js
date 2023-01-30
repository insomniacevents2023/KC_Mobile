import { SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet, View, Animated, Pressable, Text} from 'react-native';
import { useRef, useState } from 'react'; 
import IDfront from '../../components/IDfront';
import IDback from '../../components/IDback';

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
      <SafeAreaView>
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
        <Pressable style = {styles.button} onPress = {handleFlip}>
          <Text>Scan Card</Text>
        </Pressable>
      </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    },
    button: {
      width: 250,
      height:35,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      elevation: 3,
      backgroundColor: "#ffc904",
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 1
      }
},});