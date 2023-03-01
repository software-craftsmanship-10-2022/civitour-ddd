export class UserId{

    #value: string;

    private constructor(value: string){
        this.#value = value
    }

    public static create(value: string): UserId{
        return new UserId(value);
    }

    get value(): string{
        return this.#value;
    }
}