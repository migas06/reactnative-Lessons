import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreens';
import ListScreen from './src/screens/ListScreen';
import ListImages from './src/screens/ListImages'
import CounterScreen from './src/screens/CounterScreen'
import ColorsScreen from './src/screens/ColorsScreen'
import SquareColorScreen from './src/screens/SquareColorScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    ListImages: ListImages,
    Counter: CounterScreen,
    Colors: ColorsScreen,
    Square: SquareColorScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Learning ReactNative',
    },
  }
);

export default createAppContainer(navigator);
