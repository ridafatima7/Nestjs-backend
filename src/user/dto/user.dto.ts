import {IsString, MinLength} from "class-validator";
import { Transform } from "class-transformer";
export class userDTO{
    @Transform(({value})=>{
        if(value==='Virat') return "kohli";
        return value;
    })
    @IsString()
    @MinLength(3)
    name:string;
    @IsString()
    type:string;
}