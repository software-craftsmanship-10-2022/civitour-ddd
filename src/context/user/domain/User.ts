import { AggregateRoot } from "../../shared/domain/AggregateRoot";
import { UserPhone } from "./UserPhone";
import { UserName } from "./userName";
import { UserSurname } from "./userSurname";
import { UserId } from "./UserId";

type UserProp = {
    id: UserId
    name: UserName
    surname: UserSurname
    phone: UserPhone
}

export class User extends AggregateRoot {
    readonly id: UserId
    readonly name: UserName
    readonly surname: UserSurname
    readonly phone: UserPhone

    private constructor(props: UserProp) {
        super()
        this.id = props.id
        this.name = props.name
        this.surname = props.surname
        this.phone = props.phone
    }

    public static create (props: UserProp) {
        return new User(props)
    }
}