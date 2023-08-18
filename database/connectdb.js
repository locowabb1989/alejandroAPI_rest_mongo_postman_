
import mongoose from "mongoose";
try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("conexion exitosa");
} catch (error) {
    console.log("error de conexion"+ error);
}

//mongodb+srv://<username>:<password>@atlascluster.qljgd9x.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://alejandrowabb:Wa112233@atlascluster.qljgd9x.mongodb.net/?retryWrites=true&w=majority