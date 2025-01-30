// Import Mongoose and models
import mongoose from 'mongoose';
import User from '../models/userSchema.js';
import Doctor from '../models/doctorSchema.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const secretKey = "95gQZVWKCzm9aaDnj4MZlE1/aHbzmJ30JUQiqqyMoo9BjaYQuaMpu6oo04XNYfsIEn0+n8iKbAABE7qkDR1b4IbKRfhraYqh2JcYste7EnwjM0SpcawreCDYh0ZpdrlNY4dqgtnvPGGc2IttSyFGbRGUKGqQY3uJin187fpowe7yWaTTnJ25PE6Pe7OueXHKN26k41Q4QusIJimlVm8XppG/FO4nZVzrTIuoTlIBptK3ZwolBCdriB5yoAwE3VCiFAig95GpHd+v+3tiPtZkmL2XWovIG1Ph47dharFtrP/fyAHgd57rSrnLkCmV4fzPjY0rJ9HI9aY0uCUH3O7z+A==";

const generateToken = (user) => {
    return jwt.sign(
        { userId: user._id || '', role: user.role || '' },
        secretKey,
        { expiresIn: '1h' }
    );
};

export const handleUserRegister = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;

    try {
        if (!email || !password || !name || !role) {
            return res
                .json({ error: 'All fields are required' });
        }

        // Check if the user exists
        const [user, salt] = await Promise.all([
            role === 'patient' ? User.findOne({ email }).exec() : Doctor.findOne({ email }).exec(),
            bcryptjs.genSalt(10),
        ]);

        if (user) {
            return res.json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create and save the user
        const newUser = new (role === 'patient' ? User : Doctor)({
            name,
            email,
            password: hashedPassword,
            role,
            gender,
            photo,
        });

        await newUser.save();

        // Create and send the token
        const token = generateToken(newUser);

        // Set cookie with the token
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour

        res
            .cookie('Bearer', token, { httpOnly: true, expires: expiryDate })
            .status(201)
            .json({
                success: true,
                message: 'User registered successfully',
                token
            });
    } catch (error) {
        console.error('Error in user registration:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const handleUserLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }) || await Doctor.findOne({ email });

        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // check if password is correct
        const isPasswordCorrect = bcryptjs.compareSync(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // Create and send the token
        const token = generateToken(user);
        const { password: _, role, appointments, ...rest } = user._doc;

        res.status(200).json({ success: true, message: 'User logged in successfully', token, user: { ...rest }, role });
    } catch (error) {
        console.error('Error in user login:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

