const asyncHandler = require('../middleware/async');

// @description     Get All Members
// @route           GET /api/v1/members
exports.getMembers = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults);
});
