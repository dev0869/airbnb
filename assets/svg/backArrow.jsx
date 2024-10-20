import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Pressable } from "react-native";
const BackArrow = ({ onPress }) => (
  <Pressable onPress={onPress}>
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <Path
        fill="#252525"
        d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293-1.414-1.414Z"
      />
    </Svg>
  </Pressable>
);
export default BackArrow;
