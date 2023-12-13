import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {[7, 8, 9].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.button}
              onPress={() => handlePress(number.toString())}
            >
              <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {[4, 5, 6].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.button}
              onPress={() => handlePress(number.toString())}
            >
              <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {[1, 2, 3].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.button}
              onPress={() => handlePress(number.toString())}
            >
              <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('0')}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.operationsContainer}>
        {['+', '-', '*', '/'].map((operation) => (
          <TouchableOpacity
            key={operation}
            style={styles.operationButton}
            onPress={() => handlePress(operation)}
          >
            <Text style={styles.operationButtonText}>{operation}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
        <Text style={styles.calculateButtonText}>=</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearButtonText}>C</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'right',
  },
  result: {
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  button: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    marginHorizontal: 4,
  },
  buttonText: {
    fontSize: 24,
  },
  operationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  operationButton: {
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    width: '24%',
    marginHorizontal: 4,
  },
  operationButtonText: {
    fontSize: 24,
    color: 'white',
  },
  calculateButton: {
    backgroundColor: '#2E8B57',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    marginBottom: 8,
  },
  calculateButtonText: {
    fontSize: 24,
    color: 'white',
  },
  clearButton: {
    backgroundColor: '#FF4500',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
  },
  clearButtonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default Calculator;