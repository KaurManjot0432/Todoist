import { Router } from "express";

const router = Router();


router
.route('/post')
.get((req,res) => {
    res.send("OK Router get");
})
.post((req,res) => {
    res.send("OK Router post");
});

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