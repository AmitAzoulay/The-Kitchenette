const users = require("../models/users");
const bcrypt = require("bcrypt");



async function login(email, password) {
    
    const user = await (users.findOne({ email }));
    if (!user) {
        return { success: false, message: "Invalid email or password." }
    }
    const isMatch = await bcrypt.compare(password.trim(), user.password);
    if (!isMatch) {
        return { success: false, message: "Invalid email or password." };
    }
    
    user.isActive = true;
    await user.save();

    return { success: true, user };
}

async function signup(userData) {
    
    const existingEmail = await users.findOne({email: userData.email});
    const displayName = await users.findOne({displayName: userData.displayName});
    console.log(userData)
   
    if (existingEmail) {
        console.log("entered1")
        throw new Error("Email already in use.");
    }
    if (displayName) {
        console.log("entered2")
        throw new Error("Display Name already in use.");
    }
    
    if (!userData.displayName) {
        console.log("entered3")
        throw new Error("Display Name is required."); 
    }
    else if (!userData.email) {
        console.log("entered4")
        throw new Error("email is required."); 
    }
    else if (!userData.password) {
        console.log("entered5")
        throw new Error("Password is required."); 
    }

    const hashedPassword = await bcrypt.hash(userData.password.trim(), 10);

    const newUser = new users({
        displayName: userData.displayName,
        email: userData.email,
        password: hashedPassword,
        isActive: false
    });

    try {
        await newUser.save();
    } catch (error) {
        throw new Error("Failed to register user.");
    }
}

module.exports = {
    signup,
    login,
};