export class TourDescription{

    #value: string;

    private constructor(value: string){
        this.#value = value
    }

    public static create(value: string): TourDescription{
        if(!value){
            throw new Error('Description cannot be empty')
        }
        return new TourDescription(value);
    }

    get value(): string{
        return this.#value;
    }
}