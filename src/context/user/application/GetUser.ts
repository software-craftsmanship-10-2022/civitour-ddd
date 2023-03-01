import { UseCase } from "../../shared/application/UseCase";
import { UserRepo } from "../domain/UserRepo";
import { UserId } from "../domain/UserId"

export class GetUser implements UseCase {

    private userRepo: UserRepo

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo
    }
    execute(id: string) {
        const userId = UserId.create(id);
        return this.userRepo.get(userId)
    }
}