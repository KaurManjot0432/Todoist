import { Router } from "express";
import controllers from "./post-controller";
const router = Router();


router
.route('/')
.get(controllers.getMany)
.post(controllers.createOne);

router
.route('/:id')
.get(controllers.getOne)
.patch(controllers.updateOne)
.delete(controllers.deleteOne);

export default router;