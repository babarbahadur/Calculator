import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default ({ onPress, text, axis, specialButton }) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if(specialButton=== "double") {
        buttonStyles.push(styles.buttonDouble);
    }

    if(axis=== "x") {
        buttonStyles.push(styles.xAxisStyle);
        textStyles.push(styles.xAxisStyle);
    }

    if(axis=== "y") {
        buttonStyles.push(styles.yAxisStyle);
    }
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
          <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
      );
      
}
const styles = StyleSheet.create({
    text: {
      color: "#fff",
      fontSize: 25
    },
    button: {
      backgroundColor: "#0F8B12",
      flex: 1,
      height: Math.floor(buttonWidth - 10),
      alignItems: "center",
      justifyContent: "center",
      borderRadius: Math.floor(buttonWidth),
      margin: 5
    },
    buttonDouble: {
        width: screen.width / 2 - 10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40
    },
    xAxisStyle: {
        backgroundColor: "#A8A8A8",
        color: "#191919",
    },
    yAxisStyle: {
        backgroundColor: "#D27900",
    }
  });
  
  //Y Asis #FF8E16
  // Green button #0CAC4A