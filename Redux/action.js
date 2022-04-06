

export const Auth = (value)=>({
    type:'auth',
    payload:value
})
export const tokenDispatch = (token)=>(
    console.log("valueGetFomAction",token),
    {
    type:'token',
    payload:token
})