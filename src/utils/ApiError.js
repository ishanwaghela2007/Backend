export class Apierror extends Error
{
    constructor(
        statuscode,
        message="something went wrong",
        errors=[],
        stack=""
    )
    {
        super(message);
        this.statuscode=statuscode;
        this.errors=errors;
        if(stack)
        {
            this.stack=stack;
        }else
        {
            Error.captureStackTrace(this,this.constructor);
        }
        this.data=null
        this.success=false
    }
}