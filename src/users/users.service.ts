import { Injectable } from '@nestjs/common';
import { UsersDto } from './dto/users.dto'

@Injectable()
export class UsersService {
    private readonly users: UsersDto[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'chris',
                password: 'secret',
            },
            {
                userId: 3,
                username: 'maria',
                password: 'guess',
            },
        ];
    }
    

    async findOne(username: string): Promise<UsersDto | undefined> {
        return this.users.find(user => user.username === username);
    }
}
