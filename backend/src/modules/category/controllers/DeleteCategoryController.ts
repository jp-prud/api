import { Request, Response } from 'express';
import DeleteCategoryUseCase from '../useCases/deleteCategory/deleteCategoryUseCase';

class DeleteCategoryController {
  deleteCategoryUseCase: DeleteCategoryUseCase;

  constructor(deleteCategoryUseCase: DeleteCategoryUseCase) {
    this.deleteCategoryUseCase = deleteCategoryUseCase;
  }

  handle(request: Request, response: Response) {
    const { categoryName } = request.params;

    try {
      this.deleteCategoryUseCase.handle(categoryName);

      response.sendStatus(201);
    } catch (error) {
      console.log(error);
    }
  }
}

export default DeleteCategoryController;
