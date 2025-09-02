import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const homescreen = ({ navigation, route }) => {
  const { title, author, isbn, publishedDate, genre, Added_Date} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Submission Confirmation</Text>
      <Text style={styles.text}>The following details were submitted:</Text>
      
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Title:</Text>
        <Text style={styles.value}>{title}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Author:</Text>
        <Text style={styles.value}>{author}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>ISBN:</Text>
        <Text style={styles.value}>{isbn}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Published Date:</Text>
        <Text style={styles.value}>{publishedDate}</Text>
      </View>
      
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Genre:</Text>
        <Text style={styles.value}>{genre}</Text>
      </View>
      
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Added Date:</Text>
        <Text style={styles.value}>{Added_Date}</Text>
      </View>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
  },
});

export default homescreen;