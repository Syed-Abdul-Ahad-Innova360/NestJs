import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{
    get(){
        return {name: "Ahad", email: "syedabdulahad924@gmail.com"}
    }
}