/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Image } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getSingleRecipe } from '../api/recipeData';
import RecipeIngredients from './RecipeIngredients';
import { useAuth } from '../utils/context/authContext';
import UpdatePantryFromRecipe from '../utils/UpdatePantryFromRecipe';
import { viewRecipeDetails } from '../api/mergedData';

export default function ViewRecipe({ firebaseKey }) {
  const [recipeInfo, setRecipeInfo] = useState({});
  const { user } = useAuth();
  const router = useRouter();

  const getRecipeInfo = () => {
    getSingleRecipe(firebaseKey).then(setRecipeInfo);
  };

  useEffect(() => {
    getRecipeInfo(firebaseKey);
  }, [firebaseKey]);

  return (
    <div>
      <div className="recipe-title-info-cont">
        <h1 className="title-name">{recipeInfo.name}</h1>
      </div>
      <div className="recipe-title-info-cont">
        <h5 className="recipe-info-text">{recipeInfo.description}</h5>
      </div>
      <div className="recipe-title-info-cont">{recipeInfo.time ? (<h4 className="recipe-info-text">{recipeInfo.time} minutes</h4>) : ''}
        <p> | </p>
        {recipeInfo.servings ? (<h4 className="recipe-info-text">Serves {recipeInfo.servings}</h4>) : ''}
      </div>

      <div className="recipe-container">
        <div className="photo-ing-cont">
          <div className="recipe-photo-cont">
            <Image src={recipeInfo.photo} className="recipe-photo" alt="recipePhoto" />
          </div>
          <RecipeIngredients key={firebaseKey} firebaseKey={firebaseKey} />
        </div>
        <div>
          {/* {recipeInfo.uid === user.uid ? (<Button onClick={(e) => router.replace(`/recipes/edit/${recipeInfo.firebaseKey}`)} variant="dark">Edit</Button>) : ''}
          {user ? (<UpdatePantryFromRecipe recipeId={firebaseKey} />) : ''}
          {user ? (<NoMatchRecipe recipeId={firebaseKey} />) : ''} */}
        </div>
        <div className="recipe-btn-instructions-cont">
          <div className="recipe-btns">
            <Button variant="danger" id="recipeBtnTop" className="recipe-btn-top" disabled>Instructions</Button>
            {recipeInfo.uid === user.uid ? (<Button className="recipe-btn" onClick={(e) => router.replace(`/recipes/edit/${recipeInfo.firebaseKey}`)} variant="danger">Edit Recipe</Button>) : ''}
            {user ? (<UpdatePantryFromRecipe recipeId={firebaseKey} />) : ''}
          </div>
          <div className="recipe-instructions line-break">
            <p className="instruction-text">{recipeInfo.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ViewRecipe.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
};
