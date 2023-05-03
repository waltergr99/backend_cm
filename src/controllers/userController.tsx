
import User from '../models/user'

const authentificate = async (req:any, res:any) => {
    const {email, password} = req.body;

    // comprobate if user exists 
    const user = await User.findOne({email});
    if(!user){
        const error = new Error("El usuario no esta registrado");
        return res.status(404).json({msg: error.message});
    }

    if(await user.comprobarPassword(password)){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // token: generarJWT(user._id),
            phone: user.phone,
            image: user.image,
            country: user.country,
            city: user.city,
            password: user.password,
        })
    }else{
        const error = new Error("Contraseña incorrecta");
        return res.status(403).json({msg: error.message});
    }
    
}


export {
    authentificate
}