import { AggregateRoot } from "../../shared/domain/AggregateRoot";
import { TourCapacity } from "./TourCapacity";
import { TourDate } from "./TourDate";
import { TourDescription } from "./TourDescription";
import { TourTitle } from "./TourTitle";
import { User } from "../../user/domain/User"

type TourProps = {
    title: TourTitle
    description: TourDescription
    capacity: TourCapacity
    date: TourDate
    user: User
}

export class Tour extends AggregateRoot {
    readonly title: TourTitle
    readonly description: TourDescription
    readonly capacity: TourCapacity
    readonly date: TourDate
    readonly user: User

    private constructor(props: TourProps) {
        super()
        this.title = props.title
        this.description = props.description
        this.capacity = props.capacity
        this.date = props.date
        this.user = props.user
    }

    public static create (props: TourProps) {
        return new Tour(props) 
    }
}