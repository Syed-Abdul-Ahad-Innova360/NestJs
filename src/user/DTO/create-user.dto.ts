import { IsAlphanumeric, IsString } from "class-validator";

export class CreateUserDTO{
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsAlphanumeric()
    password: string
}