const Workers = require ("../models/Workers");
const Department = require ("../models/Department")

const errorHandler = (res,error) =>{
    res.status(500).json({message: `Xatolik ${error}`});
};

const addWorker = async (req,res)=> {
    const {name,last_name,department_id,age,salary,subdepartment,departments} = req.body;
    const dp = await Department.findById(department_id)
    console.log(dp)
    if(!dp){
        res.status(400).send("Not found this id in department")
    }
    else {
        const worker =  Workers ({name,last_name,department_id,age,salary,subdepartment,departments});
        worker 
        .save()
        .then((worker)=> res.status(200).send(worker))
        .catch((error)=> errorHandler(res,error));
    }
    };
const getWorker = (req,res) => {
    Workers.findById(req.params.id)
    .then((worker)=> res.status(200).json(worker))
    .catch((error)=> errorHandler(res,error));
};
const deleteWorker = (req,res) => {
    Workers.findByIdAndDelete(req.params.id)
    .then((worker)=> res.status(200).json(worker))
    .catch((error)=> errorHandler(res,error));
};
const editWorker = async (req,res)=>{
    const {name,last_name,department_id,age,subdepartment,departments,salary} = req.body;
    // const update = await Department.findById ({department_id})
    // console.log(update);
    // if(!update){
    //     return res.status(400).send({message: "Bunday bolim topilmadi"})
    // }
    const {id} = req.params;
    Workers.findByIdAndUpdate(id,{name,last_name,department_id,age,salary,subdepartment,departments},{new:true})
    .then((worker)=> res.status(200).json(worker))
    .catch((error)=> errorHandler(res,error));
};
const getWorkers = async (req,res) =>{
    const worker = await Workers.find({})
    .populate({
    path:"department_id",
    match:{name: "Marketing"},
    select:"name-_id",
    options: {limit : 2}
    })
    .sort({createAt: -1})
    .then((worker)=> res.status(200).json(worker))
    .catch((error)=> errorHandler(res,error));
}



module.exports = {
    addWorker,
    getWorker,
    deleteWorker,
    editWorker,
    getWorkers,
}
