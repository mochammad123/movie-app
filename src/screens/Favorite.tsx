import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MovieItem from "../components/movies/MovieItem";
import { IMovie } from "../types/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { coverImageSize } from "../components/movies/MovieList";

const Favorite = ({ navigation }: any): JSX.Element => {
  const [movies, setMovies] = useState<IMovie[]>();

  const fetchMovies = async (): Promise<void> => {
    const initialData: string | null =
      await AsyncStorage.getItem("@FavoriteList");

    if (initialData !== null) {
      const favMovieList: IMovie[] = JSON.parse(initialData);
      setMovies(favMovieList);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 20,
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {movies?.map((movie) => (
          <View style={{ flexBasis: "31%" }} key={movie.id}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MovieDetail");
              }}
            >
              <MovieItem
                key={movie.id}
                movie={movie}
                size={coverImageSize["poster"]}
                coverType="poster"
              />
            </TouchableOpacity>
          </View>
        ))}
        <StatusBar translucent={false} />
      </View>
    </ScrollView>
  );
};

export default Favorite;
