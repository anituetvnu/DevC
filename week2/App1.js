import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  TextComponent,
} from "react-native";
import { Feather, FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

const imgData = [
  { id: 1, imgSource: require("./assets/1.gif") },
  { id: 2, imgSource: require("./assets/2.jpg") },
  { id: 3, imgSource: require("./assets/3.jpg") },
  { id: 4, imgSource: require("./assets/4.jpg") },
  { id: 5, imgSource: require("./assets/5.jpg") },
  { id: 6, imgSource: require("./assets/6.jpg") },
  { id: 7, imgSource: require("./assets/7.jpg") },
  { id: 8, imgSource: require("./assets/8.jpg") },
  { id: 8, imgSource: require("./assets/9.jpg") },
  // { id: 8, imgSource: require("./assets/10.jpg") },
];

const socialInfo = [
  { name: "Photos", quantity: 120 },
  { name: "Followers", quantity: 120 },
  { name: "Following", quantity: 120 },
];

Image.resolveAssetSource(item.imgSource).height;

const centerImgData = Math.floor(imgData.length / 2);

const deviceWidth = Dimensions.get("window").width;

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.navigate}>
        <AntDesign
          name="arrowleft"
          style={styles.backIcon}
          onPress={() => alert("back")}
        />
        <Feather
          name="menu"
          style={styles.menuIcon}
          onPress={() => alert("menu")}
        />
      </View>

      <View style={styles.avatarWrapper}>
        <Image source={require("./assets/avatar.jpg")} style={styles.avatar} />
        <View style={styles.userInfo}>
          {/* <Text style={styles.userName}>Ahri</Text>
          <Text style={styles.userJob}>The nine-tailed fox</Text> */}
          <Text style={styles.userName}>ABCDEFGH</Text>
          <Text style={styles.userJob}>ABCDEFGHABCDEFGH</Text>
          <View style={styles.followAndSend}>
            <Text style={styles.follow} onPress={() => alert("follow")}>
              Follow
            </Text>
            <Ionicons
              name="md-send"
              style={styles.sendMessage}
              onPress={() => alert("send message")}
            />
          </View>
        </View>
      </View>

      <View style={styles.interactCounter}>
        {socialInfo.map((i) => {
          return (
            <View style={styles.box}>
              <Text style={styles.number}>{i.quantity}</Text>
              <Text style={styles.content}>{i.name}</Text>
            </View>
          );
        })}
      </View>

      <View style={styles.photos}>
        <View style={styles.column}>
          {imgData.slice(0, centerImgData).map((item) => {
            return <Image source={item.imgSource} style={styles.image} />;
          })}
        </View>
        <View style={styles.column}>
          {imgData.slice(centerImgData).map((item) => {
            return <Image source={item.imgSource} style={styles.image} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
}
const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  navigate: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  backIcon: {
    fontSize: 30,
    color: "black",
  },
  menuIcon: {
    fontSize: 30,
    color: "black",
  },
  avatarWrapper: {
    flexDirection: "row",
    margin: 15,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginHorizontal: 10,
  },
  userInfo: {
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 30,
    fontWeight: "bold",
  },
  userJob: {
    fontSize: 20,
    color: "gray",
  },
  followAndSend: {
    flexDirection: "row",
  },
  follow: {
    color: "white",
    fontSize: 20,
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 25,
    backgroundColor: FOLLOW_COLOR,
    borderRadius: 20,
  },
  sendMessage: {
    fontSize: 24,
    color: "white",
    backgroundColor: SEND_MESSAGE_COLOR,
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  interactCounter: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  number: {
    fontSize: 25,
    fontWeight: "200",
    textAlign: "center",
  },
  content: {
    color: "grey",
    textAlign: "center",
  },
  photos: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    width: deviceWidth / 2 - 20,
    // height: deviceWidth / 2,
    resizeMode: "contain",
    borderRadius: 20,
    padding: 0,
    backgroundColor: "green",
  },
});
