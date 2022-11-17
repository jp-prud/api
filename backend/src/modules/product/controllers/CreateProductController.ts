import { Request, Response } from 'express';
import CreateProductUseCase from '../useCases/createProduct/CreateProductUseCase';

class CreateProductController {
  createProductUseCase: CreateProductUseCase;

  constructor(createProductUseCase: CreateProductUseCase) {
    this.createProductUseCase = createProductUseCase;
  }

  handle(request: Request, response: Response) {
    try {
      this.createProductUseCase.execute();

      response.status(201);
    } catch (error) {
      console.log(error);

      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default CreateProductController;
