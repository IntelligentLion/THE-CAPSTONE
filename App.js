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
    setSubmitPoints(submitPoints + points);
    setPoints(0);
  };
  const [submitPoints, setSubmitPoints] = React.useState(0);
  const onSubmitPoints = () => {
  };
  const [reports, setReports] = React.useState('I saw a kid wearing a red shirt and blue pants on Tuesday hit another student. The person who got hit did not complain, yet it was still very hurtful of the kid in the red shirt and blue pants.');
  const [reports1, setReports1] = React.useState('I saw someone say rude things to someone else today. He was wearing a black shirt and a black pant and was really tall -- around 6.5 feet. He gave physical and emotional damage to the person that he was bullying.');
  const [reports2, setReports2] = React.useState('I saw someone vandalize the walls yesterday. He was an 8th grader, and was wearing a black sw');
  const [totalpoints, setTotalpoints] = React.useState({points});

  return (
    <View style={styles.container}>
    <Text style = {styles.paragraph}> {disp} </Text>
    <Text style = {styles.paragraph}>Submitted Points: {submitPoints}</Text>
    <Text style = {styles.paragraph}>Current Points: {points} </Text>
    <Button
    onPress = {onPoints}
    title = "Submit Points Here!"
    />
    <Text style = {styles.paragraph}>
      Rules: 
      </Text>
      <Text>
      1. You must not mention someone's name. Only descriptive features are allowed. If needed tell your teacher the name of the person you are going to report and then your teacher will give you further instructions. If names are mentioned, the teachers will eventually know. So DO NOT mention names.  
      </Text>
      <Text style = {styles.paragraph}>___</Text>
      <Text>
      2. Show WINGS behavior. We expect you to be willing, integrous, noble, generous, and self-directed while using this site. Making fake reports on others to get points will not be allowed. We will check all reports before allowing WINGS cards to be distributed. 
      </Text>
      <Text style = {styles.paragraph}>___</Text>
      <Text>
      3. Don't mess around! Do not make unnecessary reports! (Adds onto rule 2).
      </Text>
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

<Text style = {styles.paragraph}>Other Reports</Text>
<Text style = {styles.anonymous}><Text></Text>Anonymous:</Text> <Text>{reports}</Text>
<Text style = {styles.anonymous}><Text></Text>Anonymous:</Text> <Text>{reports1}</Text>

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
  anonymous: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    }
});
