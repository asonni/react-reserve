import mongoose from 'mongoose';
const connection = {};

const connectDb = async () => {
  if (connection.isConnected) {
    // Use existing database connection
    console.log('Using existing connection');
    return;
  }
  // Use new database connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('DB Connected');
  // eslint-disable-next-line require-atomic-updates
  connection.isConnected = db.connections[0].readyState;
};

export default connectDb;
