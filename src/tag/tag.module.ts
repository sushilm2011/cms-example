import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { TagRepository } from './repository/tag.repository';

@Module({
  controllers: [TagController],
  providers: [TagService, TagRepository],
  exports: [TagService]
})
export class TagModule {}
