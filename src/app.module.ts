import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import { CategoryModule } from './category/category.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [TagModule, CategoryModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
