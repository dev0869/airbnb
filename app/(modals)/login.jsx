import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, TextInput, Button, View, Pressable } from "react-native";
import { modalStyle } from "./modal.style";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Inputs from "../../components/Inputs";

export default function Login() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <SafeAreaView style={modalStyle.loginModalUpperLayer}>
      <View style={{ width: "85%" }}>
        <View style={modalStyle.loginModalWrapper}>
          <View style={modalStyle.loginInputDiv}>
            <Inputs
              style={modalStyle.loginButtonsTop}
              value={emailAddress}
              placeholder={"Email..."}
              onChange={(emailAddress) => setEmailAddress(emailAddress)}
            />
            <Inputs
              style={modalStyle.loginButtonsBottom}
              value={password}
              placeholder="Password..."
              onChange={(password) => setPassword(password)}
            />
          </View>
          <View style={modalStyle.loginInputDivText}>
            <Text style={{ width: "96%" }}>
              We’ll call or text to confirm your number. Standard message and
              data rates apply
            </Text>
          </View>

          <Pressable style={modalStyle.LoginBtn} onPress={onSignInPress}>
            <Text style={{ color: "white", fontSize: 18 }}>Continue</Text>
          </Pressable>
          <View style={modalStyle.horizontalLineWrapper}>
            <View style={modalStyle.horizontalLine}/>
            <Text>Or</Text>
            <View  style={modalStyle.horizontalLine} />
          </View>
        </View>
        <View>
          <Text>Don't have an account?</Text>
          <Link href="/(modals)/signUp">
            <Text>Sign up</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
