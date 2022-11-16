import { Router } from 'express';
import listCategoryController from './modules/category/useCases/listCategory';

export const router = Router();

// List categories
router.get('/categories', (request, response) =>
  listCategoryController.handle(request, response),
);

// Create categories
router.post('/categories', (req, res) => {
  res.send('OK');
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
