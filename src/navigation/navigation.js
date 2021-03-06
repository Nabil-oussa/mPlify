import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { store } from '../store/store';
import HomePage from '../containers/HomePage/HomePage';
import UserList from '../containers/UserList/UserList';
import UserDetails from '../containers/UserDetails/UserDetails';
import PostDetails from '../containers/PostDetails/PostDetails';

const MainNavigator = createStackNavigator({
  Home: { screen: HomePage },
  UserDetails: { screen: UserDetails },
  UserList: { screen: UserList },
  PostDetails: { screen: PostDetails },
},
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(MainNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;