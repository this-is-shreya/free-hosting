const router = require("express").Router();
const {
  home,
  webService,
  hostWebService,
  static,
  hostStatic,
  editService,
  deleteAll,
  message,
} = require("../controllers/host");
const { checkAuthenticated } = require("../controllers/auth");

router.get("/", checkAuthenticated, home);
router.get("/webService", checkAuthenticated, webService);
router.post("/webService/web/:state", checkAuthenticated, hostWebService);
router.get("/static", checkAuthenticated, static);
router.post("/static/static/:state", checkAuthenticated, hostStatic);
router.get("/edit/:title", checkAuthenticated, editService);
router.get("/delete", checkAuthenticated, deleteAll);
router.get("/message", checkAuthenticated, message);
module.exports = router;
