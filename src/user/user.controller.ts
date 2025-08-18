import { Controller, Get, Param } from '@nestjs/common';
import { CustomParseIntPipe } from 'src/commom/pipes/custom-parse-int-pipe.pipe';

@Controller('user')
export class UserController {
  @Get(':id')
  findOne(@Param('id', CustomParseIntPipe) id: number) {
    console.log(id, typeof id);
    return `olá do controller do user #${id}`;
  }
}
