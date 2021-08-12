export const getOne = model => async (req,res) => {

}

export const getMany = model => async (req,res) => {

}

export const createOne = model => async (req,res) => {

}

export const updateOne = model => async (req,res) => {

}

export const deleteOne = model => async (req,res) => {

}

export const crudControllers = model =>  ({
    deleteOne : deleteOne(model),
    updateOne :  updateOne(model),
    createOne : createOne(model),
    getMany : getMany(model),
    getOne : getOne(model),
});