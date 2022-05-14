import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function App() {
  const [submit, setSubmit] = React.useState(0);
  const onSubmit = () => {
  }
  const[submitButton, setSubmitButton] = React.useState(0);
  const[content, setContent] = React.useState(0);
  const onContent = (newContent) => {
    setContent(newContent);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Submit a issue
      </Text>
     <TextInput
   onChangeText={submitButton}
   value={content}
   keyboardType="number-pad"
/>
      <Button
  onPress={onSubmit}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
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
});
