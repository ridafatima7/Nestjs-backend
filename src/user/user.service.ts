import { Injectable, UseFilters } from '@nestjs/common';
import { userDTO } from './dto/user.dto';
@Injectable()
export class UserService {
    private users= [
        {
           id:1,
           name:"rida Fatima",
           type:"normal"
        },
        {
            id:2,
            name:"Fatima",
            type:"celebrity",
        },
        {
            id:3,
            name:"maira",
            type:"actor",
        }
    ]
    getAllUsers(){
        return this.users;
    }
    getUser(id:number){
       const user = this.users.find((user)=> user.id === id);
       if(!user){
        throw new Error("User not found");
       }
       return user;
    }
    addUser(user:userDTO){
        const id=Date.now();
        // id
        this.users.push({
            id,
            ...user
        })
        return this.getUser(id);
    }
}
