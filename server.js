const port = process.env.PORT || 3000;
const app = require('./app');
const { conn, Employee } = require('./db');

const init = async()=> {
  try {
    await conn.sync({ force: true });
    await Promise.all([
      Employee.create({ name: 'moe', bio: 'moes bio'}),
      Employee.create({ name: 'lucy', bio: 'lucys bio'}),
      Employee.create({ name: 'ethyl', bio: 'ethyl bio'}),
    ]);
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
}

init();


