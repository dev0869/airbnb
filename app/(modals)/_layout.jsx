import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
const ModalLayout = () => {

  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="signUp"
        options={{
          headerTitle: () => (
            <View style={{ flex: 1, marginLeft: -116, alignItems: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Finish signing up
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "transparent",
        }}
      />
    </Stack>
  );
};

export default ModalLayout;
