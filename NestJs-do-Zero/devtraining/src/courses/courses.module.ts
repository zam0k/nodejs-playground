import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Tag])], //aqui ficam as entidades mapeadas do modulo
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}