import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { dtoCreateTask } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll () {
    return this.appService.getAll()
  }

  @Get(':id')
  async getOne(@Param('id') id: string){
    return this.appService.getOne(id)
  }

  @Post()
  async create (@Body() dto: dtoCreateTask) {
    return this.appService.create(dto)
  }

  @Delete(':id')
  async delete (@Param('id') id: string) {
    return this.appService.delete(id)
  }
}
