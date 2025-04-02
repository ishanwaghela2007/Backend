import { ApiResponce } from "../utils/ApiResponce.js";
import asyncHandler from "../utils/asyncHandler.js";

const helthcheck=asyncHandler(async(requestAnimationFrame,res)=>{
     res.status(200).json(new ApiResponce(200,"success"))
})
export default helthcheck