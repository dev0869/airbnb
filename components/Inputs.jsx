import React from "react";
import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Inputs = ({ placeholder, value, onChange, style }) => {
  return (
    <>
      <TextInput
        style={style}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    </>
  );
};

export default Inputs;
