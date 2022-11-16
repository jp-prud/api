import { Request, Response } from 'express';
import ListCategoryUseCase from '../useCases/listCategory/ListCategoryUseCase';

class ListCategoryController {
  listCategoryUseCase: ListCategoryUseCase;

  constructor(listCategoryUseCase: ListCategoryUseCase) {
    this.listCategoryUseCase = listCategoryUseCase;
  }

  async handle(request: Request, response: Response) {
    const categories = await this.listCategoryUseCase.execute();

    return response.json(categories);
  }
}

export default ListCategoryController;
