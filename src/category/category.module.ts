import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './repository/category.repository';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
})
export class CategoryModule {}
