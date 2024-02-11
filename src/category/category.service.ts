import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './repository/category.repository';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private repository: CategoryRepository) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.repository.create(createCategoryDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne((category: Category) => category.id === id);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.repository.update(id, updateCategoryDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
