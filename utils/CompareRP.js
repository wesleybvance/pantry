/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';

// COMPARES RECIPE INGREDIENTS TO PANTRY INGREDIENTS, RETURNS GREEN SYMBOL IF USER HAS RECIPE INGREDIENT IN PANTRY + ENOUGH FOR RECIPE, ORANGE IF USER HAS RECIPE INGREDIEENT BUT NOT ENOUGH FOR RECIPE

export default function CompareRP({ ingredient, recipeIngredientObj }) {
  if ((ingredient.id === recipeIngredientObj.id) && (ingredient.unit === recipeIngredientObj.unit) && (ingredient.amount >= recipeIngredientObj.amount)) {
    return (
      <h5>🟢</h5>
    );
  } if ((ingredient.id === recipeIngredientObj.id) && (ingredient.unit === recipeIngredientObj.unit) && (ingredient.amount < recipeIngredientObj.amount)) {
    return (
      <h5>🟠</h5>
    );
  } if ((ingredient.id === recipeIngredientObj.id) && (ingredient.unit !== recipeIngredientObj.unit)) {
    // UNIT CONVERSION & RESPONSE LOGIC
    if ((ingredient.unit === 'grams') && (recipeIngredientObj.unit === 'ounces')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 30;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'ounces') && (recipeIngredientObj.unit === 'grams')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 0.03;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'mL') && (recipeIngredientObj.unit === 'grams')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 1;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'grams') && (recipeIngredientObj.unit === 'mL')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 1;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'ounces') && (recipeIngredientObj.unit === 'mL')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 0.03;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'mL') && (recipeIngredientObj.unit === 'ounces')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 30;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'ounces') && (recipeIngredientObj.unit === 'tsp')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount / 6;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'tsp') && (recipeIngredientObj.unit === 'ounces')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 6;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'ounces') && (recipeIngredientObj.unit === 'tsbp')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount / 2;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'tbsp') && (recipeIngredientObj.unit === 'ounces')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 2;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'cup') && (recipeIngredientObj.unit === 'ounces')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount / 8;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'ounces') && (recipeIngredientObj.unit === 'cup')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 8;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'tsp') && (recipeIngredientObj.unit === 'grams')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount / 4.5;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'grams') && (recipeIngredientObj.unit === 'tsp')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 4.5;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'tbsp') && (recipeIngredientObj.unit === 'grams')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount / 14.8;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'grams') && (recipeIngredientObj.unit === 'tbsp')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 14.8;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'cup') && (recipeIngredientObj.unit === 'grams')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount / 220;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'grams') && (recipeIngredientObj.unit === 'cup')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 220;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'mL') && (recipeIngredientObj.unit === 'tsp')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 4.5;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'tsp') && (recipeIngredientObj.unit === 'mL')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount / 4.5;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'tbsp') && (recipeIngredientObj.unit === 'mL')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount / 14.8;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'mL') && (recipeIngredientObj.unit === 'tbsp')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 14.8;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'cup') && (recipeIngredientObj.unit === 'mL')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount / 220;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'mL') && (recipeIngredientObj.unit === 'cup')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 220;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'tbsp') && (recipeIngredientObj.unit === 'tsp')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount / 3;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'cup') && (recipeIngredientObj.unit === 'tsp')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount / 48;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'tsp') && (recipeIngredientObj.unit === 'tbsp')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 3;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'cup') && (recipeIngredientObj.unit === 'tbsp')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount / 16;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'tsp') && (recipeIngredientObj.unit === 'cup')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 48;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    } else if ((ingredient.unit === 'tbsp') && (recipeIngredientObj.unit === 'cup')) {
      const oldRecipeIngAmount = recipeIngredientObj.amount;
      const newRecipeIngAmount = oldRecipeIngAmount * 16;
      if (newRecipeIngAmount <= ingredient.amount) {
        return (<h5>🟢</h5>);
      } if (newRecipeIngAmount > ingredient.amount) {
        return (<h5>🟠</h5>);
      }
    }
  } return ('');
}

CompareRP.propTypes = {
  recipeIngredientObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    amount: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    unit: PropTypes.string,
    recipeId: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  ingredient: PropTypes.shape({
    firebaseKey: PropTypes.string,
    amount: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    unit: PropTypes.string,
    recipeId: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
