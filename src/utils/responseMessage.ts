let success ={
    SUCCESS:{
        status:200,
        message:"Success",
        data:{},
        success:true
    },
}
let error = {
    BAD_REQUEST:{
        status:400,
        message:"BAD_REQUEST",
        error:"",
        success:false
    },
    UNAUTHORIZED:{
        status:401,
        message:"UNAUTHORIZED",
        error:"",
        success:false
    },
    NOT_FOUND:{
        status:404,
        message:"NOT_FOUND",
        error:"",
        success:false
    },
    INTERNAL_ERROR:{
        status:500,
        message:"INTERNAL_ERROR",
        error:"",
        success:false
    }   
}
let mockedResponse ={
    failure:{
        status:500,
        message:"INTERNAL_ERROR",
        error:"This is coming from mocked response.",
        success:false
    },
}

let response = {
    success,
    error,
    mockedResponse
}
export default response;