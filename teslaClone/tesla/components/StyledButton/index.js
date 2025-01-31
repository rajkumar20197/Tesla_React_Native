import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {

  const type = props.type;

  const background = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';
  return (
    <View style={styles.container}> 
      <Pressable
        style={[styles.button, {backgroundColor: background}]}
        onPress={() => {
          console.warn('Custom Order was pressed');
        }}  
        > 
          <Text style={[styles.text, {color: textColor}]}>Custom Order</Text>
        </Pressable>          
   </View>
  );
}
export default StyledButton; 