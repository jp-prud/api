import { Category } from '../model/Category';
import { ICategory } from '../types';

class CategoriesRepository {
  index() {
    return Category.find();
  }

  findByName(name: string) {
    return Category.findOne({ name: name });
  }

  store({ icon, name }: ICategory) {
    return Category.create({
      icon,
      name,
    });
  }

  delete(categoryName: string) {
    return Category.deleteOne({ name: categoryName });
  }
}

export default CategoriesRepository;
