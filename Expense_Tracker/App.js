import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,

        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarInactiveTintColor: GlobalStyles.colors.gray300,
        headerShadowVisible: false,
        sceneStyle: { backgroundColor: 'white' },
        headerStyle: { backgroundColor: 'white' },
        headerRight: () => (
          <IconButton icon="add"
            size={18}
            color={GlobalStyles.colors.black100}
            onPress={() => { navigation.navigate('ManageExpense') }}
          />
        )
      })}>
      <BottomTabs.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={18} color={color} />
          )
        }} />
      <BottomTabs.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={18} color={color} />
          )
        }} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
          }}>

          <Stack.Screen
            name='ExpensesOverview'
            component={ExpensesOverview}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name='ManageExpense'
            component={ManageExpenses}
            options={{
              sceneStyle: { backgroundColor: 'white' },
              headerStyle: { backgroundColor: 'white' },
            }} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
