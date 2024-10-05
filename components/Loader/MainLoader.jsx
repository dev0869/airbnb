import { View, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
const MainLoader = () => {
  return (
    <View style={LoaderStyle.section}>
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/3366/68c1/123e7e427704f72fcad933b82e534871?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j6GoNmnQLyIurCa4QbvdoGvU5rYSvuQGbwqvEmbaln8vvaCyw-lLzU72s3b7Z7EGA6rzgd5KtRazaGNBojRejQKoqtesvvf686kXk7n97KhUDxEbyMK3FZckCjsVtVYWRa0wN6L2HjRCsU3gtbgmeVAos5vNgljLYoZxl9LD4XEXz-mN5GwRjdWYLdZ7Wa0NbYwJYPHh1FChCZvFjs~7VtLKcAbQwphG~wgg3Ce7L8iIrVWLfIf6p5zhQxYFsZLRSQhhZfYWBlPBzw1~enRBXLooMSIS-GiO-DEfYKqe383aFi5t8Z5YTj2fXRS8xs32zTbYv~QTCwOVyMR3u3Rasg__",
        }}
        style={{width:100,height:100}}
      />
    </View>
  );
};

export default MainLoader;

const LoaderStyle = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
});
