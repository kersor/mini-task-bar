import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { dtoCreateTask } from './app.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getAll () {
    const tasks = await this.prisma.task.findMany()
    return tasks
  }

  async getOne (id: string) {
    const task = await this.prisma.task.findUnique({
      where: {
        id: +id
      }
    })
    return task
  }

  async create (dto: dtoCreateTask) {
    const task = await this.prisma.task.create({
      data: dto
    })
    return task
  }

  async deleteChange (dto: number[]) {
    console.log(dto)
    const task = await this.prisma.task.deleteMany({
      where: {
        id: {
              in: dto,
          },
      },
    })
    return task
  }

  async deleteAll () {
    const task = await this.prisma.task.deleteMany()
    return task
  }
}
