import CustomErrorHandler from "../services/CustomErrorHandler";
import JwtService from "../services/JwtService";
import { REFRESH_SECRET} from "../config";
const auth = async (req,res,next)=>{
    let authHeader = req.headers.authorization;
    console.log(authHeader);
    if(!authHeader){
        return next(CustomErrorHandler.unAuthorized());
    }
    const token = authHeader.split(' ')[1];
    //console.log(token);
    try{
        
        const { _id} = await JwtService.verify(token, REFRESH_SECRET);
        const user = {
          _id
        }
        req.user = user;
        next();
    }catch(err){
        return next(CustomErrorHandler.unAuthorized());
    }
}
export default auth;