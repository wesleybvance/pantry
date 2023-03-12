import { useRouter } from 'next/router';
import React from 'react';
import ViewRecipe from '../../components/ViewRecipe';

export default function RecipePage() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  return (
    <ViewRecipe key={firebaseKey} firebaseKey={firebaseKey} />
  );
}
