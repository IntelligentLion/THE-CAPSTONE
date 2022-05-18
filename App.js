import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function App() {
  const [disp, setDisp] = React.useState('Hello there!');
  const onReport = () => {
    setDisp('Your report has been submitted!');
    setPoints(points + 1);
  };
  const [disp2, setDisp2] = React.useState('');
  const [celebrate, setCelebrate] = React.useState();
  const onCelebrate = () => {
    setDisp2('Your celebration of kindess has been submitted! Great Job!');
    setPoints(points + 1);
  };
  const [points, setPoints] = React.useState(0);
  const onPoints = () => {
    setPoints(0);
  };
  const [totalpoints, setTotalpoints] = React.useState({points});
  return (
    <View style={styles.container}>
    <Text style = {styles.paragraph}>Submitted Points: {points}</Text>
    <Text style = {styles.paragraph}>Current Points: {points}</Text>
    <Button
    onPress = {onPoints}
    title = "Submit Points Here!"
    />
    <Text style = {styles.paragraph}> {disp} </Text>
      <Text style={styles.paragraph}>
      Submit an Issue
      </Text>
     <TextInput
   keyboardType="number-pad"
   style = {styles.row}
   clearButtonMode = "always"
/>
      <Button
  onPress={onReport}
  title="Report"
  color="#841584"
  accessibilityLabel="Click this button to report."
/>

<Text style = {styles.paragraph}>{disp2}</Text>
<Text style = {styles.paragraph}> Celebrate someone's kindness! </Text>
<TextInput
keyboardType = "number-pad"
style = {styles.row}
/>

<Button 
onPress = {onCelebrate}
title = "Celebrate!"
color = "#FF5F1F"
accessibilityLabel = "Click this button to celebrate someone's good deed!"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    borderWidth: 1,
    margin: 15,
  },
});
