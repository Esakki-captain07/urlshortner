import shortid from 'shortid';
import validator from 'validator';

const { isURL } = validator;

export const generateShortId = async (req, res, next) => {
    try {
        req.shortId = shortid.generate(); // Generate a unique short ID
        next();
    } catch (error) {
        next(error); // Forward error to global error handler
    }
};

export const validateUrl = (req, res, next) => {
    const { originalUrl } = req.body;
    // Check if originalUrl is defined and is a string
    if (typeof originalUrl !== 'string') {
        return res.status(400).json({ error: 'Invalid URL: Not a string' });
    }
    // Validate if originalUrl is a valid URL
    if (!isURL(originalUrl)) {
        return res.status(400).json({ error: 'Invalid URL' });
    }
    next();
};
