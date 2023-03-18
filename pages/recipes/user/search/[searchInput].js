/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getUserRecipes } from '../../../../api/recipeData';
import RecipeCard from '../../../../components/RecipeCard';
import { useAuth } from '../../../../utils/context/authContext';

export default function SearchResultUser() {
  const [searchResults, setSearchResults] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { searchInput } = router.query;

  const getRecipeSearchResults = () => {
    getUserRecipes(user.uid).then((searchResultsArray) => {
      const filterResults = searchResultsArray.filter((recipes) => recipes.name.toLowerCase().includes(searchInput) || recipes.description.toLowerCase().includes(searchInput));
      console.warn(filterResults);
      setSearchResults(filterResults);
    });
  };

  useEffect(() => {
    getRecipeSearchResults();
    return () => {
      setSearchResults([]);
    };
  }, [searchInput]);
  return (
    <div>
      <div className="d-flex flex-wrap">
        {searchResults.map((obj) => (
          <RecipeCard key={obj.firebaseKey} recipeObj={obj} onUpdate={getRecipeSearchResults} />
        ))}
      </div>
    </div>
  );
}
