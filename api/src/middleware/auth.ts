import { NextFunction,Request,Response } from "express";  
import jwt from "jsonwebtoken";

declare global {     
    namespace Express {
      interface Request {
        userId: string;
      }
    }
  }

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token= req.cookies[ "auth_token" ];   
    if(!token){
        return res.status(401).json({message:"unauthorized"});
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY as string);  
        req.userId = (decoded as {userId:string}).userId;
        next();
    }catch(error){
        console.log(error);
        return res.status(401).json({message:"unauthorized"});
    }
};

export default verifyToken;