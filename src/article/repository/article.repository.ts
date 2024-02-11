import { GenericRepository } from "src/common/repository";
import { Article } from "../entities/article.entity";

export class ArticleRepository extends GenericRepository<Article> {
  constructor() {
    super('articles');
  }
}