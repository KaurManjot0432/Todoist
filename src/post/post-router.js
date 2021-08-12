import { Router } from "express";
import controllers from "./post-controller";
const router = Router();


router
.route('/post')
.get(controllers.getOne)
.post(controllers.createOne);

router
.route('/post/:id')
.put((req,res) => {
    // console.log(req.body);
    console.log(req.params);
    res.send("OK Router put");
})
.patch((req,res) => {
    res.send("OK Router patch");
})
.delete((req,res) => {
    res.send("OK Router delete");
});

export default router;