import { MyContext } from 'src/types';
import { Arg, Ctx, Int, Query, Resolver } from 'type-graphql';
import { Post } from '../entities/Post';

@Resolver()
export class PostResolver {
	//graphql type
	@Query(() => [Post])
	//typescript types
	posts(@Ctx() { em }: MyContext): Promise<Post[]> {
		return em.find(Post, {});
	}

	@Query(() => Post, { nullable: true })
	post(@Arg('id', () => Int) id: number, @Ctx() { em }: MyContext): Promise<Post | null> {
		return em.findOne(Post, { id });
	}
}
