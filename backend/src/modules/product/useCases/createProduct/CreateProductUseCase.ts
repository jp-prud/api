import ProductsRepository from '../../repositories/ProductsRepository';

class CreateProductUseCase {
  productRepository: ProductsRepository;

  constructor(productRepository: ProductsRepository) {
    this.productRepository = productRepository;
  }

  execute() {
    this.productRepository.store();
  }
}

export default CreateProductUseCase;
