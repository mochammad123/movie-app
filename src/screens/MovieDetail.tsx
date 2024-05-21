import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { API_ACCESS_TOKEN, API_URL } from "react-native-dotenv";

const MovieDetail = ({ navigation }: any): any => {
  const fetchData = (): void => {
    if (API_URL == null || API_ACCESS_TOKEN.length == null) {
      throw new Error("ENV not found");
    }

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      },
    };

    fetch(API_URL, options)
      .then(async (response) => await response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.marginVertical20}>Movie Detail Page</Text>
      <Button
        title="Fetch Data"
        onPress={() => {
          fetchData();
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
