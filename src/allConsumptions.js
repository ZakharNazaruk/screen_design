import React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import {
  textBlue,
  textGrey,
  viewGrey,
  buttonLightBlue,
  viewGrey2,
  viewLightRed,
  redText,
} from "./constants";

export default function AllConsumptions() {
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.white,
      alignItems: "center",
      flex: 1,
    },
    consumption: {
      backgroundColor: theme.viewGrey,
      width: 360,
      height: 174,
      borderRadius: 10,
      marginTop: 20,
    },
    info: {
      margin: 10,
    },

    textContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    text1: {
      fontSize: 16,
      lineHeight: 18.75,
      fontWeight: "500",
      fontFamily: "Roboto",
    },
    text1View: {
      borderRadius: 23,
      backgroundColor: theme.viewGrey2,
      width: 81,
      height: 27,
      alignItems: "center",
    },
    text2View: {
      backgroundColor: theme.textGrey,
      borderRadius: 23,
      width: 81,
      height: 27,
      alignItems: "center",
    },
    text2: {
      fontFamily: "Roboto",
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 18.75,
    },
    text3: {
      fontFamily: "Roboto",
      fontSize: 20,
      fontWeight: "400",
      lineHeight: 23.44,
      color: theme.text,
    },
    text4: {
      fontSize: 13,
      color: theme.textGrey,
      fontWeight: "600",
      fontFamily: "Roboto",
      marginLeft: 20,
    },
    input: {
      width: 286,
      height: 23,
      fontSize: 20,
      fontWeight: "400",
      fontFamily: "Roboto",
      margin: 10,
      color: theme.text,
    },
    text5: {
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: "500",

      lineHeight: 19.09,
      color: textGrey,
      top: 10,
      right: 40,
    },
    deleteView: {
      backgroundColor: theme.viewLightRed,
      width: 135,
      height: 40,
      borderRadius: 7,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    deleteText: {
      color: redText,
      fontFamily: "Roboto",
      fontSize: 13,
      fontWeight: "600",
      marginLeft: 7,
    },
    editText: {
      fontFamily: "Roboto",
      fontWeight: "600",
      fontSize: 13,
      lineHeight: 15.23,
      marginLeft: 7,
      color: "#fff",
    },
    editView: {
      backgroundColor: theme.textBlue,
      width: 173,
      height: 40,
      borderRadius: 7,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.consumption}>
        <View style={styles.info}>
          <View style={styles.textContainer}>
            <View style={styles.text1View}>
              <Text style={styles.text1}>Матвей</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="#0097FE" />
            <View style={styles.text2View}>
              <Text style={styles.text2}>Бензин</Text>
            </View>
            <Text style={styles.text3}>000,00 Руб</Text>
          </View>
          <Text style={styles.text4}>Учавствует</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.input}>А,Б,В</TextInput>
            <Text style={styles.text5}>ЧЕЛ</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity style={styles.deleteView}>
              <AntDesign name="delete" size={24} color={redText} />
              <Text style={styles.deleteText}>Удалить</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editView}>
              <Feather name="edit-2" size={24} color="#fff" />
              <Text style={styles.editText}>Редактировать</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.consumption}>
        <View style={styles.info}>
          <View style={styles.textContainer}>
            <View style={styles.text1View}>
              <Text style={styles.text1}>Матвей</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="#0097FE" />
            <View style={styles.text2View}>
              <Text style={styles.text2}>Бензин</Text>
            </View>
            <Text style={styles.text3}>000,00 Руб</Text>
          </View>
          <Text style={styles.text4}>Учавствует</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.input}>А,Б,В</TextInput>
            <Text style={styles.text5}>ЧЕЛ</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity style={styles.deleteView}>
              <AntDesign name="delete" size={24} color={redText} />
              <Text style={styles.deleteText}>Удалить</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editView}>
              <Feather name="edit-2" size={24} color="#fff" />
              <Text style={styles.editText}>Редактировать</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.consumption}>
        <View style={styles.info}>
          <View style={styles.textContainer}>
            <View style={styles.text1View}>
              <Text style={styles.text1}>Матвей</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="#0097FE" />
            <View style={styles.text2View}>
              <Text style={styles.text2}>Бензин</Text>
            </View>
            <Text style={styles.text3}>000,00 Руб</Text>
          </View>
          <Text style={styles.text4}>Учавствует</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.input}>А,Б,В</TextInput>
            <Text style={styles.text5}>ЧЕЛ</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity style={styles.deleteView}>
              <AntDesign name="delete" size={24} color={redText} />
              <Text style={styles.deleteText}>Удалить</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editView}>
              <Feather name="edit-2" size={24} color="#fff" />
              <Text style={styles.editText}>Редактировать</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
