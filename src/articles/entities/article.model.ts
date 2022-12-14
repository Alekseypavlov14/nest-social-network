import { AllowNull, BelongsTo, Column, Model, Table } from 'sequelize-typescript'
import { UserModel } from 'src/users/entities/user.model'
import { DataTypes } from 'sequelize'
import { User } from 'src/users/entities/user.entity'

export interface ArticleCreationModel {
  author: User
  content: string
}

@Table({ tableName: 'articles' })
export class ArticleModel extends Model<ArticleModel, ArticleCreationModel> {
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number

  @BelongsTo(() => UserModel, 'authorId')
  author: User

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
  content: string
}
