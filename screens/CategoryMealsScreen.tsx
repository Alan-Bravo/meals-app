import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props: any) => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData: any): object => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory: any = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
