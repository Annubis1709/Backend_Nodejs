/* const  user = 'Edier_Sanz';
const password = 'fVCpgQsprdLWWc4i';
*/
const database = 'myMongoDb';
module.exports = {
  db: `mongodb+srv://${process.env.NODE_USER_DB}:${process.env.NODE_PASS_DB}@cluster0.fmgrw.mongodb.net/${database}`,
};
