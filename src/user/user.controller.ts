import { Controller , Get, Post, Param, Req, BadRequestException} from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";

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
       createUser(@Req() req:Request){
           const {email,password} = req.body
           if(!email || !password){
               throw new BadRequestException("Enter email and password")
           }
           return {message:"user created successfully"}
       }
   
       @Get('/:userId')
       getUserwithId(@Param('userId') userId: string){
           const id = userId
           return {message:`Here is your user ${id}`}
       }
}