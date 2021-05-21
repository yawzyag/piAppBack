import { Module } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { PizzaResolver } from './pizza.resolver';

@Module({
  providers: [PizzaResolver, PizzaService],
})
export class PizzaModule {}
