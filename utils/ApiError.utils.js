class ApiError extends Error {
    constructor(
        statuscode,
        message = "Something went wrong",
        error=[],
        stack=""
    ){
        super(message);
        this.message = message;
        this.statuscode = statuscode;
        this.error = error;
        this.success = false;
        if(stack){
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}