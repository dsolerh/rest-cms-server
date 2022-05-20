import { BaseCRUDService } from "../../../common/utilities/base-CRUD.service";
import { User } from "../models";

export class UserService extends BaseCRUDService {
  constructor() {
    super(User)
  }
}