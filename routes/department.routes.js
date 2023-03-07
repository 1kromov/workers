const {Router} = require("express");
const {
    addDepartment, getDepartment, deleteDepartment,editDepartment,getDepartments,
} = require("../controllers/department.controllers");
const router = Router();

router.post("/",addDepartment);
router.get("/:id",getDepartment);
router.get("/",getDepartments);
router.put("/:id",editDepartment);
router.delete("/:id",deleteDepartment);

module.exports = router;