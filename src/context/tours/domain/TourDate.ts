export class TourDate{

    #value: Date;

    private constructor(value: Date){
        this.#value = value
    }

    public static create(value: Date): TourDate{
        if(value < new Date()){
            throw new Error('The date cannot be earlier than the current date')
        }
        return new TourDate(value);
    }

    get value(): Date{
        return this.#value;
    }
}