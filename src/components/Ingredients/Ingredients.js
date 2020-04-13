import React, { useState, useEffect, useCallback } from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from "../UI/ErrorModal"; 
import Search from './Search';

function Ingredients() {
  const [ userIngredients, setUserIngredients ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ error, setError ] = useState();

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
    setIsLoading(true);
    fetch('https://zarves-f4f72.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json ' }
    }).then(response =>  {
      setIsLoading(false);
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevIngredients => [...prevIngredients, {id: responseData.name, ...ingredient}] )
    })
  }

  const removeIngrediantHandler = ingredientId => {
    setIsLoading(true);
    fetch(`https://zarves-f4f72.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE'
    }).then(response => {
      setIsLoading(false);
      setUserIngredients(prevIngredients =>
        prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
      )
    }).catch(error => {
      setError("Something Went Wrong!")
    })
  }

  const clearError = () => {
    setError(null);
    setIsLoading(false);
  }

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler } loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngrediantHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
