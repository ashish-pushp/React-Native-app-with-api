import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  Animated,
  TouchableOpacity,
  TextInput,
  TouchableHighlight
} from "react-native";
import PropTypes from "prop-types";

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    username: "",
    password: ""
  };

  handePressSignIn = () => {
    this.props.navigation.navigate("ListScreen");
  };

  handlePressSignUp = () => {
    this.props.navigation.navigate("Registration");
  };

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>WELCOME</Text>
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
          onPress={this.handePressSignIn}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupcontainer}
          onPress={this.handlePressSignUp}
        >
          <Text
            style={{
              fontFamily: "Raleway",
              fontWeight: "400",
              color: "#ffffff",
              fontSize: 16
            }}
          >
            Don't have account
            {", "}
          </Text>
          <Text
            style={{
              fontFamily: "Raleway",
              fontWeight: "400",
              color: "#ffffff",
              fontSize: 16
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signupcontainer: {
    flex: 1,
    position: "absolute",
    backgroundColor: "rgba(139, 113, 227, 0.6)",
    bottom: 0,
    right: 0,
    left: 0,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC"
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
  welcome: {
    fontSize: 25,
    color: "rgba(139, 113, 227, 0.6)",
    fontWeight: "700",
    fontFamily: "Raleway",
    letterSpacing: 6,
    marginBottom: 40
  }
});
