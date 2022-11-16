import CreateCategoryController from '../../controllers/CreateCategoryController';
import CategoriesRepository from '../../repositories/CategoriesRepository';
import CreateCategoryUseCase from './CreateCategoryUseCase';

const categoriesRepository = new CategoriesRepository();
const createCategoriesUseCases = new CreateCategoryUseCase(
  categoriesRepository,
);
const createCategoryController = new CreateCategoryController(
  createCategoriesUseCases,
);

export default createCategoryController;
