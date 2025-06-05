
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import FavoritesContextProvider from './store/context/favourite-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#e5e4ee' },
        headerTitleStyle: { fontFamily: 'roboto-bold', fontSize: 18 },
        headerTintColor: 'black',
        sceneStyle: { backgroundColor: '#e5e4ee' },
        drawerContentStyle: { backgroundColor: '#e5e4ee' },
        drawerActiveTintColor: '#e5e4ee',
        drawerActiveBackgroundColor: '#000',
        drawerInactiveTintColor: '#000',
        headerShadowVisible: false,
      }}>
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) =>
            <Ionicons
              name='list'
              color={color}
              size={size}
            />
        }} />
      <Drawer.Screen
        name='Favorites'
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) =>
            <FontAwesome
              name='heart'
              color={color}
              size={size}
            />
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {

  const [loaded] = useFonts({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-semibold': require('./assets/fonts/Roboto-SemiBold.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!loaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style='dark' />
      <Provider store={store}>
        {/* <FavoritesContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerBackButtonDisplayMode: 'minimal',
              headerStyle: {
                backgroundColor: '#e5e4ee',
              },
              headerTitleStyle: {
                fontFamily: 'roboto-bold',
                fontSize: 18,

              },
              headerTintColor: 'black',
              contentStyle: {
                backgroundColor: '#e5e4ee'
              },
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={
                ({ route }) => ({
                  title: route.params.name,
                })
              }
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={({ route }) => ({
                title: route.params.mealName,
              })}
            />


          </Stack.Navigator>

        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({

});