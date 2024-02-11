import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TagModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
