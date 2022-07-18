const db=require ('../models/index.js');
const concept=db.Users
const Op=db.sequelize.Op;
exports.create =(req,res)  => {
    if(!req.body.chapterId){
        res.status(400).send({message:'content cannot be empty'});
        return;
    }
    // create a chapter
    const subject={
        chapterId:req.body.chapterID,
        chapterName:req.body.chapterName,

    };
// save a chapter in the database
concept.create(subject).then(data => {
    res.send(data);
})
.catch(err=>{
    res.status(500).send({
        message:err.message||'some err while creating the tutorial'
    });
})
}
// retrive from database
exports.findAll = (req, res) => {




console.log("-----------sdsdsd")  
  const chapterId=req.query.chapterId;
    var condition= chapterId?{chapterId:{[Op.like]: `%${chapterId}%`}}:null;
    concept.findAll({where:condition}).then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:err.message||"some error occured when retrieving"
        })
    })
}
// const getALL=async(req,res)=>{
//     var usersList=await Users.findAll();
//     console.log(userList)
//     res.statuscode=200;
//     res.json(UserList);
// }
// module.exports={get}