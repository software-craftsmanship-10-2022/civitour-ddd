export class TourCapacity{

    #value: number;

    private constructor(value: number){
        this.#value = value
    }

    public static create(value: number): TourCapacity{

        if(value < 1 || value > 51){
            throw new Error('Capacity must be greater than 1 and less than 51.')
        }
         
        return new TourCapacity(value);
    }

    get value(): number{
        return this.#value;
    }
}