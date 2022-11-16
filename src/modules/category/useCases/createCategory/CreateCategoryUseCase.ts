import CategoriesRepository from '../../repositories/CategoriesRepository';
import { ICategory } from '../../types';

class CreateCategoryUseCase {
  categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute({ icon, name }: ICategory) {
    if (!icon) throw new Error('Icon is required');
    if (!name) throw new Error('Name is required');

    return this.categoriesRepository.store({ icon, name });
  }
}

export default CreateCategoryUseCase;
