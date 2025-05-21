import { Controller , Get, Post, Param, Req,Body, BadRequestException, Patch, ParseIntPipe} from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";
import { UpdateUserDTO } from "./DTO/updateUserDTO";
import { CreateUserDTO } from "./DTO/create-user.dto";

@Controller('/user')
export class UserController{

    constructor(private userService: UserService){}
   
       @Get('/')
       getUser(){
           return this.userService.get()
       }
   
       // @Post('/')
       // createUser(@Body() body:{email:string; password:string}){
       //     const {email,password} = body
       //     return {message:"user created successfully"}
       // }
   
       @Post('/')
       createUser(@Body() CreateUserDTO: CreateUserDTO){
        return this.userService.create(CreateUserDTO)
       }

    //    @Patch("/:userId")
    //    updateUser(@Body() userData: UpdateUserDTO, @Param() param: {userId: number}){
    //     return this.userService.update(userData, param)
    //    }


    @Patch("/:userId")
       updateUser(@Body() userData: UpdateUserDTO, @Param('userId', ParseIntPipe) userId: number){
        return this.userService.update(userData, userId)
    }

   
       @Get('/:userId')
       getUserwithId(@Param('userId') userId: string){
           const id = userId
           return {message:`Here is your user ${id}`}
       }
}