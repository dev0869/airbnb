import { View, Text } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";

import { Link } from "expo-router";
import { Pressable } from "react-native";
import { useWarmUpBrowser } from "../../hooks/useWarmupBrowser";
const Inbox = () => {
  useWarmUpBrowser();
  const handleOpenBrowser = async () => {
    await WebBrowser.openBrowserAsync("https://google.com");
  };
  return (
    <View>
      <Pressable>
        <Text onPress={handleOpenBrowser}>click</Text>
      </Pressable>
      <Link href={"/(modals)/login"}>Inbox</Link>
    </View>
  );
};

export default Inbox;
