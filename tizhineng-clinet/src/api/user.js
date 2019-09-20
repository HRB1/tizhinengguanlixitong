import request from "@/utils/request"
export const login=(body)=>request.post("/user/login",body)