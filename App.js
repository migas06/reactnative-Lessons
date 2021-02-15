import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreens';
import ListScreen from './src/screens/ListScreen';
import ListImages from './src/screens/ListImages'
import CounterScreen from './src/screens/CounterScreen'
import ColorsScreen from './src/screens/ColorsScreen'
import SquareColorScreen from './src/screens/SquareColorScreen'
import EditTextScreen from './src/screens/EditTextScreen'
import BoxScreen from './src/screens/BoxScreen'
import RestaurantApp from './src/restaurantApp/screens/RestaurantHome'
import SearchComponent from './src/restaurantApp/components/SearchComponent'
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    ListImages: ListImages,
    Counter: CounterScreen,
    Colors: ColorsScreen,
    Square: SquareColorScreen,
    EditText: EditTextScreen,
    Box : BoxScreen,
    RestaurantApp: RestaurantApp,
    SearchComponent: SearchComponent,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Learning ReactNative',
    },
  }
);

export default createAppContainer(navigator);
