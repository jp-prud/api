import { Category } from '../model/Category';

class CategoriesRepository {
  list() {
    return Category.find();
  }
}

export default CategoriesRepository;
