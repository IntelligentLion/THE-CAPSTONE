import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function App() {
  const [report, setReport] = React.useState();
  const onReport = () => {
    setReport ('Good job, your report have been submited')
  }
  const [celebrate, setCelebrate] = React.useState();
  const onCelebrate = () => {
     setCelebrate ('Good job, you successful celebrated someones kindness')
  }
  return (
    <View style={styles.container}>
     <Text style={styles.paragraph}> {report} </Text>
      <Text style={styles.paragraph}>
      Submit an Issue
      </Text>
     <TextInput
   keyboardType="number-pad"
   style = {styles.row}
/>
      <Button
  onPress={onReport}
  title="Report"
  color="#841584"
  accessibilityLabel="Click this button to report."
/>
  <Text style={styles.paragraph}>
    {celebrate}
  </Text>
      <Text style = {styles.paragraph}> 
      Celebrate someone! 
      </Text>
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
