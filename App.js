import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function App() {
  const [submit, setSubmit] = React.useState();
  const onSubmit = () => {
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Submit an Issue
      </Text>
     <TextInput
   keyboardType="number-pad"
   style = {styles.row}
/>
      <Button
  onPress={onSubmit}
  title="Report"
  color="#841584"
  accessibilityLabel="Click this button to report."
/>

<Text style = {styles.paragraph}> Celebrate someone! </Text>
<TextInput
keyboardType = "number-pad"
style = {styles.row}
/>

<Button 
onPress = {onSubmit}
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
