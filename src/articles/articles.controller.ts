import { Controller, Get, Post, Body, Param, Delete, UseGuards, HttpCode } from '@nestjs/common'
import { AuthGuard } from 'src/auth.guard'
import { ArticlesService } from './articles.service'
import { CreateArticleDto } from './dto/create-article.dto'

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @UseGuards(AuthGuard)
  @Post()
  @HttpCode(200)
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto)
  }

  @Get()
  findAll() {
    return this.articlesService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.delete(+id)
  }
}
