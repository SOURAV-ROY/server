const advancedResults = (model) => async (req, res, next) => {

    let query;

    // Copy req.query ***************
    const reqQuery = {...req.query};

    // Create Query String *********************
    let queryString = JSON.stringify(reqQuery);

    // Finding Resource *************************
    query = model.find(JSON.parse(queryString));

    // Executing Query **********
    const results = await query;
    // console.log(results);

    res.advancedResults = {
        success: true,
        count: results.length,
        data: results
    }

    next();
}

module.exports = advancedResults;
