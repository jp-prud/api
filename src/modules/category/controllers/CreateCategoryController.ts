import { Request, Response } from 'express';
// import { ICategory } from '../types';
import CreateCategoryUseCase from '../useCases/createCategory/CreateCategoryUseCase';

class CreateCategoryController {
  createCategoryUseCase: CreateCategoryUseCase;

  constructor(CreateCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = CreateCategoryUseCase;
  }

  async handle(request: Request, response: Response) {
    const input = request.body;

    console.log(request.body);

    try {
      await this.createCategoryUseCase.execute(input);

      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export default CreateCategoryController;
