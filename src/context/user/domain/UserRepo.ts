import { User } from "./User";
import { UserId } from "../domain/UserId"

export interface UserRepo {
    get: (id: UserId) => User
}