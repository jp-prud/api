import CategoriesRepository from '../../repositories/CategoriesRepository';
import CreateCategoryUseCase from '../../useCases/createCategory/CreateCategoryUseCase';
import CreateCategoryController from '../../controllers/CreateCategoryController';

const categoriesRepository = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export default createCategoryController;
