import dotenv from 'dotenv';
import connectDB from './config/db.js';
import packages from './data/packages.js';
import users from './data/users.js';
import Package from './models/PackageModel.js';
import User from './models/UserModel.js';


dotenv.config()
connectDB();


const importData = async () => {
    try {
      
        await User.deleteMany();
        await User.insertMany(users)
        await Package.insertMany(packages)
        // await Photo.deleteMany();
        // await Photo.insertMany(photos);

    
        console.log('data imported')
        process.exit(0);
    } catch (error) {
        console.error(error)
        process.exit(1);
        
    }

}

const destroyData = async () => {
    try {
   
        await User.deleteMany();

        console.log('data destroyed')
        process.exit(0);
    } catch (error) {
        console.error(error)
        process.exit(1);
        
    }

}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}