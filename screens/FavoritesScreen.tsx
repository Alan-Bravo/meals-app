import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props: any) => {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: 'Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;