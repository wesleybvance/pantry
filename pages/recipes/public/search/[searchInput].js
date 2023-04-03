/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getPublicRecipes } from '../../../../api/recipeData';
import RecipeCard from '../../../../components/RecipeCard';

export default function SearchResult() {
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const { searchInput } = router.query;

  const getRecipeSearchResults = () => {
    getPublicRecipes().then((searchResultsArray) => {
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
      <Head>
        <title>Recipe Search Results</title>
      </Head>
      <div className="d-flex flex-wrap">
        {searchResults.map((obj) => (
          <RecipeCard key={obj.firebaseKey} recipeObj={obj} onUpdate={getRecipeSearchResults} />
        ))}
      </div>
    </div>
  );
}
