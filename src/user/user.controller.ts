import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get('')
    async findAll() {
        return { toto: 'tutu' };
    }

}
