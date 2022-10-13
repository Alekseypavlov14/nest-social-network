import { UserModel } from './../../users/entities/user.model'
import { BelongsTo, Column, Model, Table } from 'sequelize-typescript'
import { User } from 'src/users/entities/user.entity'
import { DataTypes } from 'sequelize'

interface TokenCreationModel {
  token: string
  user: User
}

@Table({ tableName: 'tokens' })
export class TokenModel extends Model<TokenModel, TokenCreationModel> {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number

  @Column({
    type: DataTypes.STRING,
  })
  token: string

  @BelongsTo(() => UserModel, 'userId')
  user: User
}
