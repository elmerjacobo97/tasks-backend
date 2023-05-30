import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import { TaskData } from "../interfaces";

class Task extends Model<TaskData> implements TaskData {
  public id!: number;
  public title!: string;
  public description!: string;
  public completed!: boolean;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "tasks",
  }
);

export { Task };
