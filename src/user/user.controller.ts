import { Controller, Get, Post, Param, Req, Body, BadRequestException, Patch, ParseIntPipe, Delete } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";
import { UpdateUserDTO } from "./DTO/updateUserDTO";
import { CreateUserDTO } from "./DTO/create-user.dto";

@Controller('/user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get('/')
    getUser() {
        return this.userService.get()
    }

    // @Post('/')
    // createUser(@Body() body:{email:string; password:string}){
    //     const {email,password} = body
    //     return {message:"user created successfully"}
    // }

    @Post('/')
    createUser(@Body() CreateUserDTO: CreateUserDTO) {
        return this.userService.create(CreateUserDTO)
    }

    //    @Patch("/:userId")
    //    updateUser(@Body() userData: UpdateUserDTO, @Param() param: {userId: number}){
    //     return this.userService.update(userData, param)
    //    }


    // @Patch("/:userId")
    //    updateUser(@Body() userData: UpdateUserDTO, @Param('userId', ParseIntPipe) userId: number){
    //     return this.userService.update(userData, userId)
    // }


    @Get('/:userId')
    async getUserwithId(@Param('userId', ParseIntPipe) userId: number) {
        const id = userId;
        const user = await this.userService.show(id);

        if (user == null) {
            return { message: 'No user with this id' };
        }

        return user;
    }

    @Delete("/:userId")
    async DeleteUser(@Param("userId",ParseIntPipe) userId: number){
        return this.userService.delete(userId)
    }

    @Patch("/:userId")
    async updateUser(@Body() userData: UpdateUserDTO, @Param("userId",ParseIntPipe) userId:number){
        return await this.userService.update(userData,userId)
    }

}