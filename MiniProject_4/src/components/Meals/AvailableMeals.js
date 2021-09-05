import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];



const AvailableMeals = () => {

  const [DummyMeals, setDummyMeals] = useState([])

  let Dummy_Meals = []

  useEffect(() => {
    const meals = fetch("https://react-fooda-default-rtdb.firebaseio.com/Meals.json")
      .then(res => res.json())
      .then((res) => {
        for (let meal in res) {
          Dummy_Meals.push({
            id: meal,
            name: res[meal].name,
            description: res[meal].description,
            price: res[meal].price
          })
        }
        setDummyMeals(Dummy_Meals)
      })
  }, [])

  console.log(DummyMeals)

  const mealsList = DummyMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    >
    </MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;