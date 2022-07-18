'use strict';
const fs=require('fs')
let data=fs.readFileSync("./seeders/data.json", "utf8")
let studentData=JSON.parse(data)
console.log(studentData)

let l=Object.values(studentData).length;
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   for(let i=0;i<l;i++){
     await queryInterface.bulkInsert('Users', [{
      chapterId: studentData[i]['C#'],
      chapterName: studentData[i]['CHAPTER NAME'],
      topicId: studentData[i]['T#'],
      topicName: studentData[i]['TOPIC NAME'],
      conceptId: studentData[i]['CN#'],
      conceptName: studentData[i]['CONCEPT NAME'],
      description:studentData[i]['DESCRIPTION'],
      eValue:studentData[i]['E value'],
      createdAt: new Date(),
      updatedAt: new Date()
     
       }], {});
  }
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
