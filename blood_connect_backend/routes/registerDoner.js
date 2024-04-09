const express = require("express");
const router = express.Router();
const multer=require ("multer");
const app = express();
app.use(express.json());
//app.use(express.urlencoded({extended:false}));
const donerRegisterController = require("../controllers/donerRegisterController");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() 
    cb(null, uniqueSuffix+file.originalname)
  }
})

const upload = multer({ storage: storage })
router.post("/",  upload.single('file'),donerRegisterController.handleNewDoner ,(req,res)=>{
    console.log(req.body);
    console.log(req.file);
  });

module.exports = router;
//donerRegisterController.handleNewDoner  