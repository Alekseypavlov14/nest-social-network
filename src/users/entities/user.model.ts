import { AllowNull, Column, Model, Table } from 'sequelize-typescript'
import { DataTypes } from 'sequelize'

interface UserCreationModel {
  login: string
  password: string
}

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel, UserCreationModel> {
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
    unique: true,
  })
  login: string

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
  password: string
}
