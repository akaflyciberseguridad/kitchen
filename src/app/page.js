import MainLayout from '../components/Layout/MainLayout';
import RecipeCard from '../components/Recipe/RecipeCard';
import { sampleRecipe } from '../data/recipes';

export default function Home() {
  return (
    <MainLayout>
      <RecipeCard recipe={sampleRecipe} />
    </MainLayout>
  );
}
