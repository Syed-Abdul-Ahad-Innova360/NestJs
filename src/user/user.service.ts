import { Injectable } from "@nestjs/common";
import { UpdateUserDTO } from "./DTO/updateUserDTO";
import { CreateUserDTO } from "./DTO/create-user.dto";

@Injectable()
export class UserService{
    get(){
        return {name: "Ahad", email: "syedabdulahad924@gmail.com"}
    }

    update(userData: UpdateUserDTO, userId: number){
        return {body: userData, userId}
    }

    create(userData: CreateUserDTO){
        return{message:"Successfully created", body: userData}
    }
}