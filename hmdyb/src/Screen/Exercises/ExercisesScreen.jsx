import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleComponent from '../../Components/TitleComponent';
import firestore from '@react-native-firebase/firestore';


export default function ExercisesScreen() {

  const [ exercise, setExercise ] = useState('');
  const [ part, setPart ] = useState('');
  const ref = firestore().collection('exercises');

  async function addExercise() {
    await ref.add({
      title: exercise,
      part: part,
    });
    setExercise('');
    setPart('');
  }


  return (
    <View style={styles.container}>
      <TitleComponent title="Exercises" />
      <TextInput label={'New Exercise'} value={exercise} onChangeText={setExercise} />
      <TextInput label={'Part'} value={part} onChangeText={setPart} />
      <Button onPress={() => addExercise()}>Add EXERCISE</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: '#333',
  },
});
