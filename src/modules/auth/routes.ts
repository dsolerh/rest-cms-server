import { Router } from "express";
import { WrapRequest } from "../../common/utilities/wrap-request";
import { AuthController } from "./controllers/auth.controller";

const routes = Router();
const path = "/auth";
const controller = new AuthController();

routes.post(`${path}/sign-up`, WrapRequest(controller.signUp));

export default routes;
