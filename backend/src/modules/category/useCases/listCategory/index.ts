import CategoriesRepository from '../../repositories/CategoriesRepository';
import ListCategoryUseCase from '../../useCases/listCategory/ListCategoryUseCase';
import ListCategoryController from '../../controllers/ListCategoryController';

const categoriesRepository = new CategoriesRepository();

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export default listCategoryController;
