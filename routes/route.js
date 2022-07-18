// module.exports=app=>{
const concept=require('../controllers/controllers')
var router=require('express').Router();
router.post('/',concept.create);

function fun (){
    console.log("-------ddd------")
}
router.get('/:', concept.findAll);
router.use('/testapi',router);

// }

module.exports = router;