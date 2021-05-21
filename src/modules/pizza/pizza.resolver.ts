import { Resolver, Query, Subscription } from '@nestjs/graphql';
import { PizzaService } from './pizza.service';
import { Pizza } from './entities/pizza.entity';
import { PubSub } from 'apollo-server-express';
const pubSub = new PubSub();

@Resolver(() => Pizza)
export class PizzaResolver {
  constructor(private readonly pizzaService: PizzaService) {}

  @Query(() => [Pizza], { name: 'pizzaDefault' })
  findAll() {
    return this.pizzaService.defaultPizzas();
  }

  @Subscription(() => [Pizza], { name: 'pizzaDefault' })
  subcriptionAllPizzas() {
    const string = JSON.stringify(this.pizzaService.defaultPizzas());

    return pubSub.asyncIterator(string);
  }
}
