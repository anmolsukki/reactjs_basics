import React, { useState, useEffect, useCallback } from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [ userIngredients, setUserIngredients ] = useState([]);

  useEffect(() => {
    fetch('https://zarves-f4f72.firebaseio.com/ingredients.json')
    .then(response => response.json())
    .then(responseData => {
      const loadedIngredients = [];
      for(const key in responseData) {
        loadedIngredients.push({
          id: key,
          title: responseData[key].title,
          amount: responseData[key].amount
        })
      }
      setUserIngredients(loadedIngredients)
    })
  }, []) //used like this [] as a second argument, useEffect act like componentDidMount: it runs only ones (after the first render)

  const filteredIngredientHandler = useCallback(filteredIngredient => {
    setUserIngredients(filteredIngredient)
  }, [])

  const addIngredientHandler = ingredient => {
    fetch('https://zarves-f4f72.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json ' }
    }).then(response =>  {
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevIngredients => [...prevIngredients, {id: responseData.name, ...ingredient}] )
    })
  }

  const removeIngrediantHandler = ingredientId => {
    fetch(`https://zarves-f4f72.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE'
    }).then(response => {
      setUserIngredients(prevIngredients =>
        prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
      )
    })
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler } />

      <section>
        <Search onLoadIngredients={filteredIngredientHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngrediantHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
