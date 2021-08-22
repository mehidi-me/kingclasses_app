import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import book from "../api/book";
import ActivityIndicator from "../components/ActivityIndicator";

import BookCard from "../components/BookCard";
import useApi from "../hooks/useApi";

const BookScreen = ({ navigation }) => {
  const { loading, request } = useApi(book.getBooks);
  const [data, setData] = useState([]);

  const getAllBooks = async () => {
    const res = await request();

    if (res.ok) return setData(res.data.data);
  };
  useEffect(() => {
    getAllBooks();
  }, []);
  return (
    <ImageBackground
      source={require("../assets/backgroun.jpg")}
      style={{ flex: 1 }}
    >
      <ActivityIndicator visible={loading} />
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={data}
          keyExtractor={(v) => v.id}
          numColumns={2}
          renderItem={({ item }) => (
            <BookCard
              title={item.title}
              uri={
                "http://192.168.0.104/king-classes4/resources/upload-images/" +
                item.image_url
              }
              onPress={() =>
                navigation.navigate("Bookdetails", { id: item.id })
              }
              Purchased={item.purchased ? true : false}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
