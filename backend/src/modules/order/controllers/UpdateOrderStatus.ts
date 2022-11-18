import { Request, Response } from 'express';
import UpdateOrderStatusUseCase from '../useCases/updateOrderStatus/UpdateOrderStatusUseCase';

class CreateOrderController {
  updateOrderUseCase: UpdateOrderStatusUseCase;

  constructor(updateOrderUseCase: UpdateOrderStatusUseCase) {
    this.updateOrderUseCase = updateOrderUseCase;
  }

  async handle(request: Request, response: Response) {
    try {
      const { orderId } = request.params;
      const { status } = request.body;

      if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
        return response.status(400).json({
          error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE',
        });
      }

      await this.updateOrderUseCase.execute({
        orderId,
        status,
      });

      return response.sendStatus(204);
    } catch (error) {
      console.log(error);

      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default CreateOrderController;
