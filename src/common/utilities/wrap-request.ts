import { Request, Response } from "express";

export function WrapRequest(fn: (req: Request, res: Response) => void) {
  return (req: Request, res: Response) => fn(req, res);
}
