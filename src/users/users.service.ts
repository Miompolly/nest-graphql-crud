import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { async } from 'rxjs';

@Injectable()
export class UsersService {
 async findAll(): Promise<User[]> {
    const user = new User();
    user.id = 1;
    user.firstName = 'Joel';
    user.lastName = 'MINANI';
    user.email = 'miompolly@gmail.com';
    user.password = 'test123';

    return [user];
  }
}
