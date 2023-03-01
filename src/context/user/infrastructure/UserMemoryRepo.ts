import { User } from "../domain/User";
import { UserPhone } from "../domain/UserPhone";
import { UserRepo } from "../domain/UserRepo";
import { UserName } from "../domain/userName";
import { UserSurname } from "../domain/userSurname";
import { UserId } from "../domain/UserId"

export class UserMemoryRepo implements UserRepo {
    get(id: UserId) {
        return User.create({
            id,
            name: UserName.create("pepe"),
            surname: UserSurname.create("patata"),
            phone: UserPhone.create("+34821647585"),
        })
    }
}
