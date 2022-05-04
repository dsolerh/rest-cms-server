import { Request, Response } from "express";

export class AuthController {
  signUp(req: Request, res: Response) {
    console.log(req);
    return res.send("Hello");
  }
}
