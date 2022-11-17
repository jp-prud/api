import { Product } from '../model/Product';

class ProductsRepository {
  index() {
    return Product.find();
  }
}

export default ProductsRepository;
