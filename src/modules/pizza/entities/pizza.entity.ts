import { ObjectType, Field, Int } from '@nestjs/graphql';

class Ingredient {
  ingredient: string;
  cost: number;
}

@ObjectType()
export class Pizza {
  @Field(() => Int, { description: 'unique id' })
  id?: number;

  @Field({ nullable: true, description: 'name of pizza' })
  name: string;

  @Field(() => [Ingredient], { nullable: true, description: 'ingridients' })
  ingredients: Ingredient[];

  @Field(() => Int, { description: 'cost' })
  pizzaCost: number;
}
