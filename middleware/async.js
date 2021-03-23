const asyncHandler = sourav => (req, res, next) => {
    Promise
        .resolve(sourav(req, res, next))
        .catch(next);
}
module.exports = asyncHandler;
