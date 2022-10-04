import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useLogging } from './src/hooks/useLogging';

export default function App() {
  const [logging] = useLogging('Application');

  useEffect(() => {
    logging.info('Application started');
  }, [logging]);

  return (
    <View style={styles.container}>
      <Text>First App from Damon</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
