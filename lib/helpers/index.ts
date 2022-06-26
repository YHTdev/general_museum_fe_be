import {hashSync,compareSync} from 'bcrypt';
import {sign,verify} from 'jsonwebtoken'

const jwtSecret = process.env.JWT_SECRET || "jwtSecret";

export const signToken = (user:any)=>{
    const token = sign(user,jwtSecret,{expiresIn:'1d'});
    return token;
}

export const verifyToken = (accessToken:string)=>{
    const verified = verify(accessToken,jwtSecret);
    return verified;
}

export const HashPassword =(password:string)=>{
    const hashPassword = hashSync(password,12);
    return hashPassword;
}

export const verifyPassword =(hashPassword:string,password:string)=>{
    const verified = compareSync(password,hashPassword);
    return verified
}