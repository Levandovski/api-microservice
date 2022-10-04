import { response } from "express";
import { request } from "http";
import { Auth } from "../typeorm/entities/Auth";

interface IRequest {
  email: string; 
}

class CreateHashAuth {
  public async execute({ email }: IRequest): Promise<Auth> {
    const auth = new Auth();

    auth.email = email;
    auth.token = "32123";
    const resultAuth = await auth.save();

    return resultAuth;
  }
}

export default CreateHashAuth;
