import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Divider } from "@rneui/themed";
import { RadioButton } from "react-native-paper"; 
import { Feather } from '@expo/vector-icons';
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";


import {
  textBlue,
  textGrey,
  viewGrey,
  buttonLightBlue,
  viewGrey2,
} from "./constants";








export default function AddConsumptionScreen({navigation}) {
  const [choice, setChoice] = useState("Поровну на всех"); 
  const { theme } = useContext(ThemeContext);


  const handleHomeScreen=()=>{
    navigation.navigate("Home");

  }


  const styles = StyleSheet.create({
    container: {
      backgroundColor:"red"
    },
    text1: {
      width: 60,
      height: 15,
      fontFamily: "Roboto",
      fontSize: 13,
      fontWeight: "600",
      lineHeight: 15.23,
      color: theme.textGrey,
      marginTop: 10,
    },
    text2: {
      width: 69,
      height: 23,
      fontFamily: "Roboto",
      fontWeight: "400",
      fontSize: 20,
      marginTop: 13,
      marginBottom: 13,
      color: theme.text
    },
    text3: {
      fontFamily: "Roboto",
      fontWeight: "500",
      lineHeight: 47.73,
      fontSize: 40,
      color: theme.text

    },
    text4: {
      color: theme.textGrey,
      fontFamily: "Roboto",
      fontWeight: "500",
      fontSize: 24,
      lineHeight: 28.64,
      top: 10,
    },
    add: {
      margin: 17,
      color:theme.white,
      flex:1
    },
    howMuch: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    radioContainer: {
      marginTop: 10,
      backgroundColor:theme.white
    },
    radioButton: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      color: theme.textBlue,
    },
    radioLabel: {
      marginLeft: 10,
      fontFamily: "Roboto",
      fontSize: 15,
      fontWeight: "400",
      color: theme.text,
    },
    radioBtn: {
      width: 19,
      height: 19,
    },
    component: {
      flexDirection: "row",
      paddingVertical: 10,
      backgroundColor: theme.viewGrey
    },
    general: {
      backgroundColor: theme.viewGrey,
      width:359,
      height:220,
      borderRadius:15,
      marginTop:10,
      paddingTop:15
      
    },
    cancel: {
      width: 135,
      height: 47,
      borderRadius: 7,
      borderWidth: 1,
      borderColor: "#0097FE",
      alignItems: "center",
      justifyContent: "center",
    },
    addBtn: {
      width: 198,
      height: 47,
      borderRadius: 7,
      border: 1,
      backgroundColor: "#0097FE",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 17,
    },
  });


  return (
    <ScrollView style={{backgroundColor:theme.white,flex:1}}>
      <View style={styles.add}>
        <View >
          <Text style={styles.text1}>За что?</Text>
          <TextInput style={styles.text2}>Бензин</TextInput>
          <Divider orientation="vertical" width={5} />

          <Text style={styles.text1}>Сколько?</Text>
          <View style={styles.howMuch}>
            <TextInput style={styles.text3}>0</TextInput>
            <Text style={styles.text4}>РУБ</Text>
          </View>
          <Divider orientation="vertical" width={5} />

          <View style={styles.radioContainer}>
            <RadioButton.Group
              onValueChange={(value) => setChoice(value)}
              value={choice}
            >
              <View style={styles.radioButton}>
                <RadioButton
                  style={styles.radioBtn}
                  color="#0097FE"
                  value="Поровну на всех"
                />

                <Text style={styles.radioLabel}>Поровну на всех</Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton
                  style={styles.radioBtn}
                  color="#0097FE"
                  value="По-другому"
                />

                <Text style={styles.radioLabel}>По-другому</Text>
              </View>
            </RadioButton.Group>
            {choice === "По-другому" && (
              <View style={styles.general}>
                <View style={styles.component}>
                  <Text
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "600",
                      fontSize: 13,
                      color: theme.textGrey,
                      top: 5,
                      width: 20,
                      left:10
                    }}
                  >
                    А
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 20,
                      justifyContent: "space-between",
                      width: 293,
                    }}
                  >
                    <TextInput
                      style={{
                        width: 250,
                        height: 26,
                        fontSize: 20,
                        fontWeight: "500",
                        borderBottomWidth: 1,
                        borderColor: "grey",
                        color: theme.text,
                      }}
                    >
                      0
                    </TextInput>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontWeight: "500",
                        fontSize: 16,
                        color: theme.textGrey,
                      }}
                    >
                      РУБ
                    </Text>
                  </View>
                  <Divider orientation="horizontal" width={5} />
                </View>

                <View style={styles.component}>
                  <Text
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "600",
                      fontSize: 13,
                      color: theme.textGrey,
                      top: 5,
                      width: 20,
                      left:10

                    }}
                  >
                    Б
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 20,
                      justifyContent: "space-between",
                      width: 293,
                    }}
                  >
                    <TextInput
                      style={{
                        width: 250,
                        height: 26,
                        fontSize: 20,
                        fontWeight: "500",
                        borderBottomWidth: 1,
                        borderColor: "grey",
                        color: theme.text,
                      }}
                    >
                      0
                    </TextInput>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontWeight: "500",
                        fontSize: 16,
                        color: theme.textGrey,
                        
                      }}
                    >
                      РУБ
                    </Text>
                  </View>
                </View>

                <View style={styles.component}>
                  <Text
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "600",
                      fontSize: 13,
                      color: theme.textGrey,
                      top: 5,
                      width: 20,
                      left:10

                    }}
                  >
                    В
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 20,
                      justifyContent: "space-between",
                      width: 293,
                      
                    }}
                  >
                    <TextInput
                      style={{
                        width: 250,
                        height: 26,
                        fontSize: 20,
                        fontWeight: "500",
                        borderBottomWidth: 1,
                        borderColor: "grey",
                        color: theme.text,
                      }}
                    >
                      0
                    </TextInput>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontWeight: "500",
                        fontSize: 16,
                        color: theme.textGrey,
                        
                      }}
                    >
                      РУБ
                    </Text>
                  </View>
                </View>

                <View style={styles.component}>
                  <Text
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "600",
                      fontSize: 13,
                      color: theme.textGrey,
                      top: 5,
                      width: 20,
                      left:10

                    }}
                  >
                    Г
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 20,
                      justifyContent: "space-between",
                      width: 293,
                    }}
                  >
                    <TextInput
                      style={{
                        width: 250,
                        height: 26,
                        fontSize: 20,
                        fontWeight: "500",
                        borderBottomWidth: 1,
                        borderColor: "grey",
                        color: theme.text,
                      }}
                    >
                      0
                    </TextInput>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontWeight: "500",
                        fontSize: 16,
                        color: theme.textGrey,
                      }}
                    >
                      РУБ
                    </Text>
                  </View>
                </View>
              </View>
            )}
            {choice ==="Поровну на всех"&&(
               <View
               style={{
                 flexDirection: "row",
                 marginLeft: 10,
                 justifyContent: "space-between",
                 width: 359,
                 height:53,
                 backgroundColor: theme.viewGrey,
                 borderRadius:10,
                 paddingTop:10
               }}
             >
              <Feather style={{marginLeft:10,marginRight:10,top:7}} name="users" size={20} color={theme.text} />
               <TextInput
                 style={{
                   width: 292,
                   height: 26,
                   fontSize: 20,
                   fontWeight: "500",
                   borderBottomWidth: 1,
                   borderColor: "grey",
                   color: theme.text,
                 }}
               >
                 5
               </TextInput>
               <Text
                 style={{
                   fontFamily: "Roboto",
                   fontWeight: "500",
                   fontSize: 20,
                   color: theme.textGrey,
                   marginLeft:0,
                   right:40
                 }}
               >
                 ЧЕЛ
               </Text>
             </View>
            )}
          </View>
        </View>
      </View>
      <View style={{ margin: 20,backgroundColor:theme.white }}>
        <Text style={styles.text1}>Когда?</Text>
        <TextInput
          style={{
            fontSize: 20,
            marginTop: 10,
            borderBottomWidth: 1,
            borderColor: "grey",
            color: theme.text,
            backgroundColor:theme.white

          }}
        >
          11\11\11
        </TextInput>
      </View>

      <View style={{ flexDirection: "row", margin: 20 }} >
        <TouchableOpacity onPress={handleHomeScreen} style={styles.cancel}>
          <Text
            style={{
              color: "#0097FE",
              fontSize: 13,
              fontWeight: "600",
              fontFamily: "Roboto",
            }}
          >
            ОТМЕНА
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addBtn} onPress={handleHomeScreen}>
          <Text
            style={{
              color: "#fff",
              fontSize: 13,
              fontWeight: "600",
              fontFamily: "Roboto",
            }}
          >
            ДОБАВИТЬ
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


