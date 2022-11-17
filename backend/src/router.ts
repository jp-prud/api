import { Router } from 'express';

import DeleteCategoryController from './modules/category/useCases/deleteCategory';
import CreateCategoryController from './modules/category/useCases/createCategory';
import ListCategoryController from './modules/category/useCases/listCategory';
import ListProductController from './modules/product/useCases/listProduct';

export const router = Router();

// List categories
router.get('/categories', (request, response) =>
  ListCategoryController.handle(request, response),
);

// Create categories
router.post('/categories', (request, response) => {
  CreateCategoryController.handle(request, response);
});

// Delete category
router.delete('/categories/:categoryId', (request, response) => {
  DeleteCategoryController.handle(request, response);
});

// List products
router.get('/products', (request, response) => {
  ListProductController.handle(request, response);
});

// Create products
router.post('/products', (request, response) => {
  response.send('OK');
});

// Get products by category
router.get('/categories/:categoryId/products', (request, response) => {
  response.send('OK');
});

// List orders
router.get('/orders', (request, response) => {
  response.send('OK');
});

// Create order
router.post('/orders', (request, response) => {
  response.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (request, response) => {
  response.send('OK');
});

// Delete or Cancel order
router.delete('/orders/:orderId', (request, response) => {
  response.send('OK');
});
