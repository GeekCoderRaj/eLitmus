
import CustomErrorHandler from '../services/CustomErrorHandler';


import { Result , User} from "../models";
const quizController = {
    async store(req,res,next){
          console.log(req.body)
          const user = await User.findOne({email: req.body.email});
          if(!user)
          { 
            return next(CustomErrorHandler.unAuthorized);
          }
          const result = new Result(req.body);
          try{
            await result.save()
            res.status(200).json({success: true});
          }catch(e)
          {
            res.status(400).json({success: false})
          }
        },
        async showAll(req,res,next){
            const data = await Result.find().select('-_id -createdAt -updatedAt -__v');
            res.status(200).json({data})
        }        
    }
    

export default quizController;