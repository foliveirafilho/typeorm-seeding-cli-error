import { DataSource } from "typeorm";

export const DbDataSource = new DataSource({
  name: "default",
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "myuser",
  password: "mypass",
  database: "mydb",
  timezone: "Z",
  dateStrings: ["DATE"],
  synchronize: false,
  entities: ["./src/*.entity{.ts,.js}"],
  logging: "all",
  logger: "advanced-console",
  maxQueryExecutionTime: 180000,
  cache: false,
  migrations: ["./src/migrations/*{.ts,.js}"],
});
