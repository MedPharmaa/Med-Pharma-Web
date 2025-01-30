import jwt from 'jsonwebtoken';
import Doctor from '../models/doctorSchema.js';
import User from '../models/userSchema.js';

export const authenticate = async (req, res, next) => {
    // get token from header
    const authToken = req.headers.authorization;
    // console.log(authToken);
    // verify if token exists
    if (!authToken || !authToken.startsWith('Bearer')) {
        return res.status(401).json({
            success: false,
            message: 'Access denied, no token provided'
        });
    }

    try {
        // Extract the token from the "Bearer <token>" format
        const token = authToken.split(' ')[1];

        // verify token
        const decoded = jwt.verify(token, "95gQZVWKCzm9aaDnj4MZlE1/aHbzmJ30JUQiqqyMoo9BjaYQuaMpu6oo04XNYfsIEn0+n8iKbAABE7qkDR1b4IbKRfhraYqh2JcYste7EnwjM0SpcawreCDYh0ZpdrlNY4dqgtnvPGGc2IttSyFGbRGUKGqQY3uJin187fpowe7yWaTTnJ25PE6Pe7OueXHKN26k41Q4QusIJimlVm8XppG/FO4nZVzrTIuoTlIBptK3ZwolBCdriB5yoAwE3VCiFAig95GpHd+v+3tiPtZkmL2XWovIG1Ph47dharFtrP/fyAHgd57rSrnLkCmV4fzPjY0rJ9HI9aY0uCUH3O7z+A==");
        // console.log(decoded);

        // Extract user ID and role from the decoded token
        req.userId = decoded.userId;
        req.role = decoded.role;

        // console.log(req.userId);
        // console.log(req.role);

        // Call next middleware
        next();
    } catch (error) {
        // Handle token verification errors
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: 'Session expired. Please login again.'
            });
        }
        return res.status(401).json({
            success: false,
            message: 'Access denied, invalid token'
        });
    }
};

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId;

    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    console.log(patient);
    console.log(doctor);

    if (patient) {
        user = patient;
    } else if (doctor) {
        user = doctor;
    } else {
        return res.status(401).json({
            success: false,
            message: "User not found"
        });
    }

    if (!roles.includes(user.role)) {
        return res.status(401).json({
            success: false,
            message: "You aren't authorized"
        });
    }
    next();
}
