import { Request, Response } from 'express';
import recipeService from '../services/recipe.service';

const controller = {
  getAllRecipes: async (req: Request, res: Response): Promise<void> => {
    try {
      const recipe = await recipeService.getAllRecipes();
      res.json(recipe);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
  getRecipeById: async (req: Request, res: Response): Promise<void> => {
    const recipeId = parseInt(req.params.id);
  
    if (isNaN(recipeId)) {
      res.status(400).json({ error: 'Invalid ID' });
      return;
    }
    
    try {
      const recipe = await recipeService.getRecipeById(recipeId);
      if (!recipe) {
        res.status(404).json({ error: 'Recipe not found' });
        return;
      }
      res.json(recipe);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
  getRecipeByName: async (req: Request, res: Response): Promise<void> => {
    const recipeName = req.params.name;

    try {
      const recipe = await recipeService.getRecipeByName(recipeName);
      if (!recipe) {
        res.status(404).json({ error: 'Recipe not found' });
        return;
      }
      res.json(recipe);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};



export default controller;