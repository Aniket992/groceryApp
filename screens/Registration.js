import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const Register = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Implement registration logic here
    // You can send the registration data to your server or perform any other actions
    
    // For simplicity, let's assume registration is successful for any non-empty username, email, and password
    if (username && email && password) {
      alert("Registration successful!");
        navigation.navigate("Products");
      // Optionally, navigate to the login screen or any other screen after successful registration
      // For example: navigation.navigate("Login");
    } else {
      // Handle invalid registration data (show error message, etc.)
      alert("Invalid registration data. Please fill in all fields.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default Register;
