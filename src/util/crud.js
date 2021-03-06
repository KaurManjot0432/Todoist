export const getOne = model => async (req,res) => {
    try{
        const doc = await model.findById({_id : req.params.id}).exec();
        if(!doc){
            return   res.status(400).end();
        }
        console.log(doc);
        res.status(200).json({data:doc});
    }catch(e){
        console.error(e);
        res.status(400).end();
    }
}

export const getMany = model => async (req,res) => {
    try {
        const doc = await model.find({}).exec();
        if(!doc) {
            return res.status(404).end();
        }
        res.status(200).json({data: doc});
    } catch(e) {
        console.error(e);
        res.status(400).end();
    }
}

export const createOne = model => async (req,res) => {
   try{
    const doc = await model.create(req.body);
    console.log(doc);
    res.status(201).json({data:doc});
   } catch (e){
    console.error(e);
    res.status(400).end();
   }
}

export const updateOne = model => async (req,res) => {
    console.log(req.body);
    try{
       const doc = await model.findOneAndUpdate({_id : req.params.id}, req.body,{new:true}).exec();
       if(!doc){
           return res.status(400).end();
       } 
       console.log("updated");
    //    console.log(doc.title);
       res.status(200).json({data:doc});
    } catch(e){
        console.error(e);
        res.status(400).end();
    }
}

export const deleteOne = model => async (req,res) => {
    try{
        const doc = await model.findOneAndRemove({_id : req.params.id}).exec();
        if(!doc){
            return res.status(400).end();
        } 
        console.log(doc);
        res.status(200).json({data:doc});
     } catch(e){
         console.error(e);
         res.status(400).end();
     }
}

export const crudControllers = model =>  ({
    deleteOne : deleteOne(model),
    updateOne :  updateOne(model),
    createOne : createOne(model),
    getMany : getMany(model),
    getOne : getOne(model),
});