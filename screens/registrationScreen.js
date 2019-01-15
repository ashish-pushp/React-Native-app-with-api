import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

const profileImage = require("./images/logo.png");
import AppBar from "./components/AppNavbar";

export default class RegistrationScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: ""
    };
  }

  registerUser = () => {
    fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json" // <-- Specifying the Content-Type
      }),
      body: "email=this.state.email&password=this.state.password" // <-- Post parameters
    })
      .then(response => response.text())
      .then(responseText => {
        alert(responseText);
      })
      .catch(error => {
        console.error(error);
        alert(error);
      });
  };
  onbackpress = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={{ backgroundColor: "#DCDCDC", flex: 1 }}>
        <AppBar
          title="Register"
          subtitle="Fill up enteries to be new user"
          onbackpress={this.onbackpress}
        />
        <View style={styles.container}>
          <View style={{ width: 150, height: 150, marginBottom: 40 }}>
            <Image source={profileImage} style={styles.img} />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://png.icons8.com/message/ultraviolet/50/3498db"
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.registerUser}
          >
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    marginTop: 60
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 310,
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 310,
    borderRadius: 30,
    backgroundColor: "rgba(139, 113, 227, 0.6)"
  },
  loginText: {
    color: "#ffffff",
    fontSize: 16
  },
  img: {
    width: 150,
    height: 150
  }
});
