const userService = require("../services/userService");

async function signup(req, res) {
    
    try {
        await userService.signup(req.body);

        if (req.body.isAdmin) {
            // Respond with JSON for admin requests
            console.log("User added successfully")
            return res.status(201).json({ message: 'User created successfully', userId: newUser._id });;
        } else {
            console.log("User added successfully1")
            return res.status(201).json({ message: 'User created successfully', userId: newUser._id });;
            
        }
    } catch (error) {
        if (req.body.isAdmin) {
            // Respond with JSON in case of errors for admin requests
            return res.json({ success: false, message: error.message });
        } else {
            // Render registration page with the error for regular users
            return res.json({ success: false, message: error.message });
            
        }
    }
}
async function login(req, res) {
    const { email, password } = req.body;
    
    try {
        const isLoggedIn = await userService.login(email, password);
        if (isLoggedIn.success) {
            console.log("ahla")
            return res.status(201).json({ message: 'User loged in successfully ', userId: isLoggedIn.user._id });;
        } else {
            res.status(401).json( { error: isLoggedIn.message }); // Render login view with error
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json( { error: "An error occurred. Please try again." });
    }
}
module.exports = {
    signup,
    login,
};