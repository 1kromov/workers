const {Router} = require("express");

const workerRouter = require("./workers.routes");
const deparmentRouter = require("./department.routes");
const router = Router();

router.use("/api/worker",workerRouter);
router.use("/api/department",deparmentRouter);

module.exports = router;