import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { TagRepository } from './repository/tag.repository';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    private tagRepository: TagRepository
  ) {}

  create(createTagDto: CreateTagDto) {
    return this.tagRepository.create(createTagDto);
  }

  findAll() {
    return this.tagRepository.findAll();
  }

  findOne(id: string) {
    return this.tagRepository.findOne((tag: Tag) => tag.id === id);
  }

  update(id: string, updateTagDto: UpdateTagDto) {
    return this.tagRepository.update(id, updateTagDto);
  }

  remove(id: string) {
    return this.tagRepository.remove(id);
  }
}
