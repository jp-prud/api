import CategoriesRepository from '../../repositories/CategoriesRepository';
import { ICategory } from '../../types';

class CreateCategoryUseCase {
  categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute(input: ICategory) {
    if (!input.icon) throw new Error('Icon is required');
    if (!input.name) throw new Error('Name is required');

    const categoryIsAlreadyExists = await this.categoriesRepository.findByName(
      input.name,
    );

    if (categoryIsAlreadyExists) throw new Error('Category is already exists');

    return this.categoriesRepository.store(input);
  }
}

export default CreateCategoryUseCase;
