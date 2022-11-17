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

  delete(categoryId: string) {
    return Category.deleteOne({ _id: categoryId });
  }
}

export default CategoriesRepository;
