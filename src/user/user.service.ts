import { Injectable } from '@nestjs/common';
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
        return this.users.find((user)=> user.id === id);
    }
}
