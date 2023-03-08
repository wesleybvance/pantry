import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleRecipe } from '../../../api/recipeData';
import RecipeForm from '../../../components/forms/RecipeForm';

export default function EditRecipe() {
  const [editRecipe, setEditRecipe] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleRecipe(firebaseKey).then(setEditRecipe);
  }, [firebaseKey]);

  return (
    <>
      <Head>
        <title>Update {editRecipe.name}</title>
      </Head>
      <RecipeForm obj={editRecipe} />
    </>
  );
}
