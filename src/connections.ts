import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const makeNewConnection = (uri: string) => {
  console.log('uri: ', uri);
  const db = mongoose.createConnection(uri);

  db.on('error', error => {
    console.log(`MongoDB :: connection ${db.name} ${JSON.stringify(error)}`);
    db.close().catch(() =>
      console.log(`MongoDB :: failed to close connection ${db.name}`)
    );
  });

  db.on('connected', () => {
    mongoose.set('debug', (collection, method) => {
      console.log(`MongoDB :: ${db.name} ${collection}.${method}`);
    });
    console.log(`MongoDB :: connected ${db.name}`);
  });

  db.on('disconnected', () => {
    console.log(`MongoDB :: disconnected ${db.name}`);
  });

  return db;
};

export const connection = makeNewConnection(process.env.CONNECTION_URL || '');
