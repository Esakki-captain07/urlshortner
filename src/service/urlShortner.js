import Url from '../model/urlModel.js'; 

const urlShortner = async (req, res) => {
    const { originalUrl } = req.body;
    const shortId = req.shortId;
    try {
        let url = await Url.findOne({ originalUrl });
        if (url) {
            return res.json({ shortUrl: `${process.env.BASE_URL}/${url.shortId}` });
        }
        url = new Url({ originalUrl, shortId });
        await url.save();
        res.status(201).json({
            shortUrl: `${process.env.BASE_URL}/${url.shortId}`
        });
    } catch (error) {
        console.error('Error in urlShortner:', error); 
        res.status(500).json({ error: 'Server error' });
    }
};

const shortUrl = async (req, res) => {
    const { shortId } = req.params;
    try {
        const url = await Url.findOne({ shortId });
        if (url) {
            return res.redirect(url.originalUrl);
        }
        res.status(404).json({ error: 'URL not found' });
    } catch (error) {
        console.error('Error in shortUrl:', error); 
        res.status(500).json({ error: 'Server error' });
    }
};

export default {
    urlShortner,
    shortUrl
};
