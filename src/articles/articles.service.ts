import { ArticleModel } from './entities/article.model';
import { Injectable } from '@nestjs/common'
import { CreateArticleDto } from './dto/create-article.dto'

@Injectable()
export class ArticlesService {
  async create(createArticleDto: CreateArticleDto): Promise<ArticleModel> {
    return await ArticleModel.create(createArticleDto)
  }

  async findAll(): Promise<ArticleModel[]>  {
    return await ArticleModel.findAll()
  }

  async findOne(id: number): Promise<ArticleModel>  {
    return await ArticleModel.findOne({where: { id }})
  }

  async delete(id: number) {
    return await ArticleModel.destroy({where: { id }})
  }
}
