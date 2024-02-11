import { GenericRepository } from 'src/common/repository';
import { Category } from '../entities/category.entity';

export class CategoryRepository extends GenericRepository<Category> {
  constructor() {
    super('categories')
  }
}