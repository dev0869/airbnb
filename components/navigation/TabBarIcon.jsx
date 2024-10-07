// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
export function TabBarIcon({ style, ...rest }) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
export function TabBarIcon2({ style, ...rest }) {
  return <FontAwesome6 size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
