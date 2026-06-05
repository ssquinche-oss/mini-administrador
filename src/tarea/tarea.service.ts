import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TareaService {

  constructor(private readonly prismaTareas: PrismaService) {}

  create(data: CreateTareaDto) {
  return this.prismaTareas.tarea.create({
    data: {
      Titulo: data.Titulo,
      Prioridad: data.Prioridad,
      Completar: data.Completar ?? false,
    }
  });
  }

  llamarTodos() {
    return this.prismaTareas.tarea.findMany();
  }

  findOne(id: number) {
    return this.prismaTareas.tarea.findUnique({ where: { id } });
  }

  update(id: number, updateTareaDto: UpdateTareaDto) {
    return this.prismaTareas.tarea.update({ where: { id }, data: updateTareaDto });
  }

  remove(id: number) {
    return this.prismaTareas.tarea.delete({ where: { id } });
  }
}

