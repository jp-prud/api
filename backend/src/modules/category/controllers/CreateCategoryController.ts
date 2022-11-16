import { Request, Response } from 'express';
import { ICategory } from '../types';
import CreateCategoryUseCase from '../useCases/createCategory/CreateCategoryUseCase';

class CreateCategoryController {
  createCategoryUseCase: CreateCategoryUseCase;

  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase;
  }

  async handle(request: Request, response: Response) {
    const input: ICategory = request.body;

    try {
      const categories = await this.createCategoryUseCase.execute(input);

      return response.json(categories);
    } catch (error) {
      console.log(error);
    }
  }
}

export default CreateCategoryController;
