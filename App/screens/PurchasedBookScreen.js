import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

const PurchasedBookScreen = ({ navigation }) => {
  const [pdfUrl, setPdfUrl] = useState([
    {
      title: "Book One",
      url: "https://drive.google.com/file/d/11hCJAMjRiNQkUFOjXEtwVqAArX1yay2D/view?usp=sharing",
    },
    {
      title: "Book Tow",
      url: "https://drive.google.com/file/d/12d_yLl-icOV9ElSdo-UfdeGzWi6VlYJG/view?usp=sharing",
    },
    {
      title: "Book Three",
      url: "https://drive.google.com/file/d/1nsky3VVp9uuRTzuupEM8Bv_eor68-5wo/view?usp=sharing",
    },
    {
      title: "Book Four",
      url: "https://drive.google.com/file/d/1fNNbssWhQpoFVOiILGoddKuICgCSefUR/view?usp=sharing",
    },
    {
      title: "Book Five",
      url: "https://drive.google.com/file/d/199p1o5R98kNIc3M4qCouYVUcPpZCE5lV/view?usp=sharing",
    },
  ]);
  return (
    <View>
      <FlatList
        renderItem={({ item }) => (
          <Button
            style={{ padding: 20 }}
            title={item.title}
            onPress={() => navigation.navigate("Readbook", { url: item.url })}
          />
        )}
        keyExtractor={(v) => v.url}
        data={pdfUrl}
      />
    </View>
  );
};

export default PurchasedBookScreen;

const styles = StyleSheet.create({});
