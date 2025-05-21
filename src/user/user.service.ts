import { Injectable } from "@nestjs/common";
// import { UpdateUserDTO } from "./DTO/updateUserDTO";
// import { CreateUserDTO } from "./DTO/create-user.dto";
import { Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService{
    constructor(@InjectRepository(User) private usersRepository: Repository<User>){}
    // get(){
    //     return {name: "Ahad", email: "syedabdulahad924@gmail.com"}
    // }

    // update(userData: UpdateUserDTO, userId: number){
    //     return {body: userData, userId}
    // }

    // create(userData: CreateUserDTO){
    //     return{message:"Successfully created", body: userData}
    // }



    get(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}