const {Router} = require("express");
const {
    addWorker, getWorker, deleteWorker,editWorker,getWorkers,
} = require("../controllers/workers.controllers");
const router = Router();

router.post("/",addWorker);
router.get("/:id",getWorker);
router.get("/",getWorkers);
router.put("/:id",editWorker);
router.delete("/:id",deleteWorker);

module.exports = router;