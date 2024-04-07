import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Divider } from "@rneui/themed";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import AddConsumptionScreen from "./src/addConsumptionScreen";
import "react-native-gesture-handler";
import { ThemeContext,ThemeProvider, themes } from "./ThemeContext";
import { useContext } from "react";
import { Appearance } from 'react-native';





import AllConsumptions from "./src/allConsumptions";
import {
  textBlue,
  textGrey,
  viewGrey,
  buttonLightBlue,
  viewGrey2,
} from "./src/constants";


const Stack = createStackNavigator();
export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </ThemeProvider>
  );
}


function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerStyle:{backgroundColor:theme.white,},headerTintColor:theme.text}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
        
      />
      <Stack.Screen
        name="Все расходы"
        component={AllConsumptions}
    
      />
      <Stack.Screen
        name="Добавление расхода"
        component={AddConsumptionScreen}
    
      />

      </Stack.Group>
      
    </Stack.Navigator>
  );
}



function HomeScreen({ navigation }) {
  

  const handleAddConsumption = () => {
    navigation.navigate("Добавление расхода");
  };
  const handleAllConsumptions=()=>{
    navigation.navigate("Все расходы");

  }
  const { theme, toggleTheme } = useContext(ThemeContext)


  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.viewGrey,
    },
    addConsumption: {
      backgroundColor: theme.textBlue,
      alignItems: "center",
      justifyContent: "center",
      height: 47,
      margin: 10,
      borderRadius: 7,
      width: 360,
      
    },
    text1: {
      color: "#fff",
    },
    textGeneral: {
      color: theme.textBlue,
      fontSize: 13,
      marginLeft: 20,
      marginTop: 25,
      fontWeight: "600",
      lineHeight: 15.23,
      letterSpacing: 0.16,
    },
    general: {
      backgroundColor: theme.viewGrey,
      borderRadius: 10,
      alignItems: "center",
      paddingHorizontal: 13,
      paddingVertical: 18,
      width: 360,
      height: 268,
      margin: 11,
      
    },
    component: {
      width: 322,
      
    },
    text2: {
      fontSize: 13,
      color: theme.textGrey,
      fontWeight: "600",
      fontFamily: "Roboto",
    },
    allConsumptions: {
      backgroundColor: theme.buttonLightBlue,
      borderRadius: 7,
      alignItems: "center",
      padding: 10,
      flexDirection: "row",
      justifyContent: "center",
      width: 360,
      height: 52,
      margin: 11,
    },
    debtView: {
      backgroundColor: theme.viewGrey,
      width: 360,
      height: 113,
      borderRadius: 10,
      paddingHorizontal: 13,
      paddingVertical: 18,
      margin: 19,
    },
    dept: {
      width: 323,
      height: 27,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    deptTextView1: {
      alignItems: "center",
  
      backgroundColor: theme.viewGrey2,
      borderRadius: 23,
      width: 81,
      height: 27,
    },
    deptTextView2: {
      alignItems: "center",
      backgroundColor:theme.textGrey,
      borderRadius: 23,
      width: 82,
      height: 27,
    },
    payDept: {
      backgroundColor: theme.textBlue,
      alignItems: "center",
      justifyContent: "center",
      height: 41,
      margin: 10,
      borderRadius: 7,
      width: 323,
    },
    deptText: {
      width: 59,
      height: 19,
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: "500",
    },
    priceText: {
      width: 99,
      height: 23,
      fontFamily: "Roboto",
      fontSize: 20,
      lineHeight: 23.44,
      letterSpacing: 0.16,
      fontWeight:"500",
      color:theme.text
    },
    history: {
      marginTop: 20,
      backgroundColor: theme.white,
      marginBottom:30,
      elevation:3
    },
    historyComponent: {
      backgroundColor: theme.viewGrey,
      width: 359,
      height: 53,
      borderRadius: 10,
      marginLeft: 15,
      marginTop: 13,
      padding: 15,
    },
    priceText2: {
      width: 99,
      height: 23,
      fontFamily: "Roboto",
      fontSize: 20,
      lineHeight: 23.44,
      letterSpacing: 0.16,
      color: "#44C167",
      fontWeight:"500"
  
    },
  });


  return (
    <ScrollView style={{backgroundColor: theme.white}}>
       <TouchableOpacity onPress={toggleTheme}>
        <Text style={{ color: theme.viewGrey }}>Изменить тему</Text>
      </TouchableOpacity>
      <Text style={{ color: theme.text }}>Текущая тема: {Appearance.getColorScheme()}</Text>

      <View
        style={{
          backgroundColor: theme.white ,
          borderBottomColor: "#000",
          elevation: 3,
        }}
      >
        <TouchableOpacity
          style={styles.addConsumption}
          onPress={handleAddConsumption}
        >
          <Text style={{color:"#fff"}}>ДОБАВИТЬ РАСХОД</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme}>
        <Text style={{ color: "blue" }}>Toggle Theme</Text>
      </TouchableOpacity>
        <Text style={styles.textGeneral}>ОБЩЕЕ</Text>
        <View style={styles.general}>
          <View style={styles.component}>
            <Text style={styles.text2}>Всего трат</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 322,
                height: 44,
              }}
            >
              <Text style={{ fontSize: 20, marginBottom: 5, color:theme.text }}>000</Text>
              <Text style={{ fontSize: 18, color: textGrey }}>Руб</Text>
            </View>
            <Divider orientation="vertical" width={5} />
          </View>
          <View style={styles.component}>
            <Text style={styles.text2}>Вы потратили</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 322,
                height: 44,
              }}
            >
              <Text style={{ fontSize: 20, marginBottom: 5,color:theme.text }}>000</Text>
              <Text style={{ fontSize: 18, color: textGrey }}>Руб</Text>
            </View>
            <Divider orientation="vertical" width={5} />
          </View>
          <View style={styles.component}>
            <Text style={styles.text2}>Вы оплатили</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 322,
                height: 44,
              }}
            >
              <Text style={{ fontSize: 20, marginBottom: 5,color:theme.text }}>000</Text>
              <Text style={{ fontSize: 18, color: textGrey }}>Руб</Text>
            </View>
            <Divider orientation="vertical" width={5} />
          </View>
          <View style={styles.component}>
            <Text style={styles.text2}>Вам должны</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 322,
                height: 44,
              }}
            >
              <Text style={{ fontSize: 20, marginBottom: 5,color:theme.text }}>000</Text>
              <Text style={{ fontSize: 18, color: textGrey }}>Руб</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.allConsumptions} onPress={handleAllConsumptions}>
          <MaterialCommunityIcons
            name="clipboard-text-outline"
            size={24}
            color="#1E90FF"
          />
          <Text style={{ color: textBlue, fontWeight: "600", marginLeft: 6 }}>
            ВСЕ РАСХОДЫ
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: theme.white, marginTop: 14,elevation:3 }}>
        <Text style={styles.textGeneral}>СПИСОК ЗАДОЛЖЕННОСТЕЙ</Text>
        <View style={styles.debtView}>
          <View style={styles.dept}>
            <View style={styles.deptTextView1}>
              <Text style={styles.deptText}>Матвей</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="#0097FE" />

            <View style={styles.deptTextView2}>
              <Text style={styles.deptText}>Марина</Text>
            </View>
            <Text style={styles.priceText}>000,00 руб</Text>
          </View>
          <Pressable style={styles.payDept}>
            <Text style={styles.text1}>ОПЛАТИТЬ</Text>
          </Pressable>
        </View>
        <View style={styles.debtView}>
          <View style={styles.dept}>
            <View style={styles.deptTextView1}>
              <Text style={styles.deptText}>Матвей</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="#0097FE" />

            <View style={styles.deptTextView2}>
              <Text style={styles.deptText}>Марина</Text>
            </View>
            <Text style={styles.priceText}>000,00 руб</Text>
          </View>
          <Pressable style={styles.payDept}>
            <Text style={styles.text1}>ОПЛАТИТЬ</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.history}>
        <Text style={styles.textGeneral}>ИСТОРИЯ</Text>
        <View style={styles.historyComponent}>
          <View style={styles.dept}>
            <View style={styles.deptTextView1}>
              <Text style={styles.deptText}>Матвей</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="#0097FE" />

            <View style={styles.deptTextView2}>
              <Text style={styles.deptText}>Марина</Text>
            </View>
            <Text style={styles.priceText2}>000,00 руб</Text>
          </View>
        </View>
        <View style={styles.historyComponent}>
          <View style={styles.dept}>
            <View style={styles.deptTextView1}>
              <Text style={styles.deptText}>Матвей</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="#0097FE" />

            <View style={styles.deptTextView2}>
              <Text style={styles.deptText}>Марина</Text>
            </View>
            <Text style={styles.priceText2}>000,00 руб</Text>

          </View>
        </View>
      </View>
    </ScrollView>
  );


}


