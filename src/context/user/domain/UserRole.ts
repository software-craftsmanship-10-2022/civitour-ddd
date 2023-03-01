const USER_ROLES = {
    CLIENT: "client",
    GUIDE: "guide"
}

export class UserRole{

    #value: string;

    private constructor(value: string){
        this.#value = value
    }

    public static create(value: string): UserRole{
        if(!Object.values(USER_ROLES).includes(value)){
            throw new Error("Invalid user role");
        }
        return new UserRole(value);
    }

    get value(): string{
        return this.#value;
    }
}