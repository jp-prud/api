import { Router } from 'express';
import listCategoryController from './modules/category/useCases/listCategory';
import createCategoryController from './modules/category/useCases/createCategory';
import deleteCategoryController from './modules/category/useCases/deleteCategory';

export const router = Router();

// List categories
router.get('/categories', (request, response) =>
  listCategoryController.handle(request, response),
);

// Create categories
router.post('/categories', (request, response) => {
  createCategoryController.handle(request, response);
});

// Delete category
router.delete('/categories/:categoryId', (request, response) => {
  deleteCategoryController.handle(request, response);
});

// List products
router.get('/products', (req, res) => {
  res.send('OK');
});

// Create products
router.post('/products', (req, res) => {
  res.send('OK');
});

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// List orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// Delete or Cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
