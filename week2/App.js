import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function App() {
  const feedData = [
    {
      id: 1,
      name: "CoderSchool",
      image: require("./assets/1.gif"),
      likeCount: 128,
      avatar: require("./assets/avatar.jpg"),
    },
    {
      id: 2,
      name: "Whoami",
      image: require("./assets/2.jpg"),
      likeCount: 20,
      avatar: require("./assets/avatar.jpg"),
    },
    {
      id: 3,
      name: "CoderSchool",
      image: require("./assets/1.gif"),
      likeCount: 128,
      avatar: require("./assets/avatar.jpg"),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <View style={{ width: 27 }} />
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Feather name="inbox" size={35} color="black" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {feedData.map((feed) => {
          return (
            <View>
              <View>
                <View style={styles.avatarWrapper}>
                  <Image source={feed.avatar} style={styles.avatarImage} />
                  <Text style={styles.posterName}>{feed.name}</Text>
                </View>
              </View>
              <View style={styles.imageWrapper}>
                <Image
                  source={feed.image}
                  style={styles.imagePoster}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.iconWrapper}>
                <Feather
                  name="heart"
                  style={styles.icon}
                  onPress={() => alert("Liked")}
                />
                <Feather
                  name="message-square"
                  style={styles.icon}
                  onPress={() => alert("Comment")}
                />
                <Feather
                  name="share"
                  style={styles.icon}
                  onPress={() => alert("Share")}
                />
              </View>
              <View style={styles.likeCount}>
                <FontAwesome name="heart" style={styles.likeCountIcon} />
                <Text style={styles.likeCountText}>
                  {" "}
                  {feed.likeCount} likes
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    // flex: 1,
    paddingBottom: 70,
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#f3f6fa",
  },
  avatarWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
    marginHorizontal: 12,
  },
  avatarImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderColor: "grey",
    borderWidth: 1,
  },
  logo: {
    flex: 1,
    height: 40,
    width: null,
  },
  logoWrapper: {
    marginTop: 23,
    flexDirection: "row",
  },
  posterName: {
    marginLeft: 12,
    fontSize: 20,
    fontWeight: "bold",
  },
  imagePoster: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  imageWrapper: {
    height: 440,
  },
  icon: {
    fontSize: 28,
    color: "black",
    marginHorizontal: 5,
  },
  iconWrapper: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  likeCount: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  likeCountIcon: {
    fontSize: 28,
    color: "black",
    marginHorizontal: 5,
  },
  likeCountText: {
    fontSize: 16,
    textAlign: "center",
  },
});
