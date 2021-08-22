import React, {useState, useEffect, useContext} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import category from '../api/category';
import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import AuthContext from '../auth/context';

const ExamScreen = ({navigation, data}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);
  const [allCat, setAllCat] = useState([]);

  // const data = [
  //   { title: "Bangla" },
  //   { title: "English" },
  //   { title: "Math" },
  //   { title: "Religion" },
  //   { title: "ICT" },
  //   { title: "Physics" },
  //   { title: "Chemestry" },
  //   { title: "Biology" },
  //   { title: "Accounting" },
  //   { title: "Finance" },
  // ];

  useEffect(() => {
    if (!allCat.length) {
      data.map(v => {
        if (!allCat.includes(v) && v.p_id == null) {
          setAllCat(data => [...data, v]);
        }
      });
    }
  }, []);

  return (
    <>
      <AppScreen>
        {/* <ActivityIndicator visible={loading} /> */}

        {allCat.length ? (
          <FlatList
            data={allCat}
            keyExtractor={(v, inx) => inx}
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.title}
                onPress={() => {
                  navigation.navigate('examslessionscreen', {
                    title: `${item.title}`,
                    data,
                    id: item.id,
                  });
                }}>
                <AppText style={styles.button}>{item.title}</AppText>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <AppText>No data found!</AppText>
          </View>
        )}

        {/* <ScrollView>
          {data.map(v => (
            <TouchableOpacity
              key={v.title}
              onPress={() => {
                navigation.navigate('examslessionscreen', {
                  title: `All ${v.title} Lessions`,
                });
              }}>
              <AppText style={styles.button}>{v.title}</AppText>
            </TouchableOpacity>
          ))}

          {!data.length ? (
            !error.ok ? (
              <>
                <AppText style={styles.text2}>Somthing was wrong!</AppText>
                <AppText style={styles.text2}>{error.message}</AppText>
                <AppButton title="Retry" onPress={getCategory} />
              </>
            ) : null
          ) : null}
        </ScrollView> */}
      </AppScreen>
    </>
  );
};

export default ExamScreen;

const useStyles = theme =>
  StyleSheet.create({
    button: {
      borderWidth: 2,
      borderColor: theme.secondary,
      padding: 10,
      margin: 10,
      textAlign: 'center',
      borderRadius: 10,
      backgroundColor: theme.secondary,
      color: '#fff',
      shadowColor: theme.secondary,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
    },
    button2: {
      borderWidth: 1,
      borderColor: theme.primary,
      //padding: 10,
      //margin: 10,
      textAlign: 'center',
      borderRadius: 20,
      backgroundColor: theme.primary2,
      color: theme.white,
      borderRadius: 15,
      shadowColor: '#00070e',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
      alignSelf: 'flex-start',
      width: '46%',
      padding: '2%',
      margin: '2%',
    },
    text: {
      color: theme.secondary,
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    text2: {
      textAlign: 'center',
      color: theme.white,
    },
  });
