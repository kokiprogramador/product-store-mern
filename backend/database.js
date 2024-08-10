import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const connectdb = () => {
    mongoose
        .connect(MONGO_URL)
        .then(() => console.log('Base de Datos Conectada'))
        .catch((err) => console.log(err));
};
export default connectdb;