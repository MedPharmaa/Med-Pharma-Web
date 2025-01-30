import Subscribe from "../models/subscribeSchema.js";

// create subscribe
export const createSubscribe = async (req, res) => {
    const newSubscribe = new Subscribe(req.body);
    try {
        const savedSubscribe = await newSubscribe.save();

        res.status(200).json({ success: true, message: 'Subscribe Submitted!', data: savedSubscribe });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

