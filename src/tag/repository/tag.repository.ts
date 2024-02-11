import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { CreateTagDto } from '../dto/create-tag.dto';
import { GenericRepository } from 'src/common/repository';
import { Tag } from '../entities/tag.entity';

export class TagRepository extends GenericRepository<Tag> {
  constructor() {
    super('tags')
  }
}