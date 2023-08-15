import mongoose from "mongoose";
try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("conexion exitosa");
} catch (error) {
    console.log("error de conexion"+ error);
}
