import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
      trim: true,
    },
    name: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    country: {
      type: String,
      require: true,
      trim: true,
    },
    city: {
      type: String,
      require: true,
      trim: true,
    },
    phone: {
      type: String,
      require: true,
      trim: true,
    },
    token: {
      type: String,
    },
    confirmado: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

usuarioSchema.methods.comprobarPassword = async function (passwordFormulario:any) {
  return (await passwordFormulario) === this.password ? true : false;
};

const User = mongoose.model("Usuario", usuarioSchema);
export default User;
