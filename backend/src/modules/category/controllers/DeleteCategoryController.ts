import { Request, Response } from 'express';
import DeleteCategoryUseCase from '../useCases/deleteCategory/deleteCategoryUseCase';

class DeleteCategoryController {
  deleteCategoryUseCase: DeleteCategoryUseCase;

  constructor(deleteCategoryUseCase: DeleteCategoryUseCase) {
    this.deleteCategoryUseCase = deleteCategoryUseCase;
  }

  async handle(request: Request, response: Response) {
    const { categoryId } = request.params;

    try {
      await this.deleteCategoryUseCase.execute(categoryId);

      response.sendStatus(202);
    } catch (error) {
      console.log(error);
    }
  }
}

export default DeleteCategoryController;
