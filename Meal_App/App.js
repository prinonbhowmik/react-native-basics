
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

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
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
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

    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
