const Department = require ("../models/Department");

const errorHandler = (res,error) =>{
    res.starus(500).json({message: `Xatolik ${error}`});
};

const addDepartment = (req,res)=> {
    const {name,info} = req.body;
    const department = new Department ({name,info});
    department 
    .save()
    .then((department)=> res.status(200).send(department))
    .catch((error)=> errorHandler(res,error));
};
const getDepartment = (req,res) => {
    Department.findById(req.params.id)
    .then((department)=> res.status(200).json(department))
    .catch((error)=> errorHandler(res,error));
};
const deleteDepartment = (req,res) => {
    Department.findByIdAndDelete(req.params.id)
    .then((department)=> res.status(200).json(department))
    .catch((error)=> errorHandler(res,error));
};
const editDepartment = (req,res)=>{
    const {name,info} = req.body;
    const {id} = req.params;
    Department.findByIdAndUpdate(id,{name,info},{new:true})
    .then((department)=> res.status(200).json(department))
    .catch((error)=> errorHandler(res,error));
};
const getDepartments = (req,res) =>{
    Department.find()
    .sort({createAt: -1})
    .then((department)=> res.status(200).json(department))
    .catch((error)=> errorHandler(res,error));
}



module.exports = {
    addDepartment,
    getDepartment,
    deleteDepartment,
    editDepartment,
    getDepartments,
}