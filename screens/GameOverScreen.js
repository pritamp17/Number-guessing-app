import React from 'react'
import { View, Text, StyleSheet,Image, Button ,Alert} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

function GameOverScreen(props) {
    return (
        <View style={styles.screen}>
        <TitleText> The Game is Over !</TitleText>
         <View style={styles.imageContainer}>
        <Image source={require('../assets/success.png')}
         style={styles.image}
         resizeModel="cover"
          />
           </View>

            <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
         Your Phone Needed <Text style={styles.highlight}>{props.roundsNumber} </Text> 
         rounds to guess the number<Text style={styles.highlight}> {props.userNumber}</Text>
         </BodyText>
            </View>

        {/* <BodyText> Number was: {props.userNumber}</BodyText> */}
        <MainButton onPress={props.onRestart}>
        NEW GAME
        </MainButton>
        </View>
    )
}

const styles = StyleSheet.create({

screen: {
    flex:1,
    justifyContent:'center',
    alignItems:'center' 
}, 
imageContainer: {
     width: 300,
     height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow:'hidden',
    marginVertical: 30
},
image: {
    width: '100%',
    height: '100%',
    // border
},
resultText: {
  textAlign: 'center',
  fontSize: 20
},
resultContainer: {
    marginHorizontal: 30,
    marginVertical: 20
}
,
highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
}

});
export default GameOverScreen
