import Category from '../model/category.model.js';

const categoryHandler = async (req, res) => {

    try {
        const categories = await Category.find({});
        res.json(categories);
    }
    catch (err) {
        res.status(404).json({ message: "cound not find categories" })
    }
}

export default categoryHandler;