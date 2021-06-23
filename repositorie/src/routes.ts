import { Router } from "express";
import { CreateUserController} from "./controlles/CreateUserController";
import { CreateTagController } from "./controlles/CreateTagController";
import { ensureAdmin} from "./middlewares/ensureAdmin";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();


router.use(ensureAdmin)
router.post("/users", createUserController.handle);
router.post("/tags",ensureAdmin, createTagController.handle);


export { router };
