import { Resolver, Query } from '@nestjs/graphql'; 
import { UsersService } from './users.service';
import { User } from './users.entity';

@Resolver()
export class UsersResolver {
    constructor(private usersService: UsersService) {}

    @Query(returns => [User]) 
    async users(): Promise<User[]> {
        return this.usersService.findAll(); 
    }
}
