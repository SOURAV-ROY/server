const asyncHandler = require('../middleware/async');

// @description     Get All Abouts
// @route           GET /api/v1/abouts
exports.getAbout = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults);
});
