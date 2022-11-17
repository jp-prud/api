import { Product } from '../model/Product';

class ProductsRepository {
  index() {
    return Product.find();
  }

  store() {
    return Product.create();
  }
}

export default ProductsRepository;
