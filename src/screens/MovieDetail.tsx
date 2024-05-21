import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const MovieDetail = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.marginVertical20}>Movie Detail Page</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate("Home");
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

export default MovieDetail;
