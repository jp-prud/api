import CategoriesRepository from '../../repositories/CategoriesRepository';

class DeleteCategoryUseCase {
  categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute(categoryName: string) {
    return this.categoriesRepository.delete(categoryName);
  }
}

export default DeleteCategoryUseCase;
