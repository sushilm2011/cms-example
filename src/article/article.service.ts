import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ArticleRepository } from './repository/article.repository';
import { CategoryService } from 'src/category/category.service';
import { TagService } from 'src/tag/tag.service';
import { Article } from './entities/article.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ArticleService {
  constructor(
    private repository: ArticleRepository,
    private categoryService: CategoryService,
    private tagService: TagService,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    const tags = createArticleDto.tags.map(tag => this.tagService.findOne(tag));
    const category = this.categoryService.findOne(createArticleDto.category);

    if(!category || tags.includes(undefined)) {
      throw new BadRequestException();
    }

    const article = this.repository.create(createArticleDto);
    return this.mapArticle(article, tags, category);
  }

  findAll() {
    const articles = this.repository.findAll();
    return articles.map(article => {
      const tags = article.tags.map(tag => this.tagService.findOne(tag));
      const category = this.categoryService.findOne(article.category);
      return this.mapArticle(article, tags, category);
    })
  }

  findOne(id: string) {
    const article = this.repository.findOne((article) => article.id === id);
    const tags = article.tags.map(tag => this.tagService.findOne(tag));
    const category = this.categoryService.findOne(article.category);

    return this.mapArticle(article, tags, category);
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    if (updateArticleDto.tags) {
      const tags = updateArticleDto.tags && updateArticleDto.tags.map(tag => this.tagService.findOne(tag));
      if (tags.includes(undefined)) {
        throw new BadRequestException();
      }
    }

    if (updateArticleDto.category) {
      const category = updateArticleDto.category && this.categoryService.findOne(updateArticleDto.category);
      if(!category) {
        throw new BadRequestException();
      }
    }

    this.repository.update(id, updateArticleDto);
    return this.findOne(id);
  }

  remove(id: string) {
    this.repository.remove(id);
  }

  mapArticle(article: Article, tags: Tag[], category: Category) {
    return {
      ...article,
      tags, 
      category
    }
  }
}
