import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FormScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Confirmation', {
      title,
      author,
      isbn,
      publishedDate,
      genre,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Book Title:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Enter book title"
      />

      <Text style={styles.label}>Author:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAuthor}
        value={author}
        placeholder="Enter author's name"
      />

      <Text style={styles.label}>ISBN:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setIsbn}
        value={isbn}
        placeholder="Enter ISBN"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Published Date:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPublishedDate}
        value={publishedDate}
        placeholder="YYYY-MM-DD"
      />
      
      <Text style={styles.label}>Genre:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setGenre}
        value={genre}
        placeholder="Enter genre"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default FormScreen;