import { Model, Optional } from "sequelize";

type DTO = Optional<any, string>

export abstract class BaseCRUDService {
  constructor(private readonly model: typeof Model & (new () => Model)) {}

  create(dto: DTO) {
    this.model.create(dto)
  }
}