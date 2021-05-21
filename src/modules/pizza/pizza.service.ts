import { Injectable } from '@nestjs/common';
import { Pizza } from './entities/pizza.entity';
/* import { CreatePizzaInput } from './dto/create-pizza.input';
import { UpdatePizzaInput } from './dto/update-pizza.input'; */

@Injectable()
export class PizzaService {
  public defaultPizzas(): Pizza[] {
    const cost = 3000;
    const baseCost = 10000;
    const defaultPizzas: Pizza[] = [
      {
        id: 1,
        name: 'peperoni',
        ingredients: [
          { ingredient: 'peperoni', cost: 4500 },
          { ingredient: 'pimiento', cost },
          { ingredient: 'queso', cost },
        ],
        pizzaCost: baseCost + cost * 2 + 4500,
      },
      {
        id: 2,
        name: 'pollo',
        ingredients: [
          { ingredient: 'pollo', cost: 5000 },
          { ingredient: 'hierbas', cost },
          { ingredient: 'queso', cost },
        ],
        pizzaCost: baseCost + cost * 2 + 5000,
      },
      {
        id: 3,
        name: 'queso',
        ingredients: [
          { ingredient: 'queso', cost },
          { ingredient: 'vegetales', cost },
          { ingredient: 'hierbas', cost },
        ],
        pizzaCost: baseCost + cost * 3,
      },
      {
        id: 4,
        name: 'custom',
        ingredients: [],
        pizzaCost: baseCost,
      },
    ];
    return defaultPizzas;
  }
}
