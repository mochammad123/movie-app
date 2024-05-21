import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.marginVertical20}>Movie Page</Text>
      <Button
        title="Go to Movie Detail"
        onPress={() => {
          navigation.navigate("MovieDetail");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  marginVertical20: {
    marginVertical: 20,
  },
});

export default Home;
