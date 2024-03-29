import Head from 'next/head';
import React from 'react';
import RecipeForm from '../../components/forms/RecipeForm';

export default function AddRecipe() {
  return (
    <>
      <Head>
        <title>Create New Recipe</title>
      </Head>
      <RecipeForm />
    </>
  );
}
