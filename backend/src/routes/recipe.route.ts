import express, { Router } from 'express';
import recipeController from '../controllers/recipe.controller';

const recipeRouter: Router = express.Router();

recipeRouter.get('/', recipeController.getAllRecipes);
recipeRouter.get('/id/:id', recipeController.getRecipeById);
recipeRouter.get('/name/:name', recipeController.getRecipeByName);

export default recipeRouter;