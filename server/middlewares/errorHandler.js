module.exports = (err, req, res, next) => {
    if (err.name === 'SequelizeValidationError') {
        let error = [];
        err.errors.forEach(x => {
            error.push(x.message);
        });
        res.status(400).json(error);
    } else if (err.name === 'SequelizeDatabaseError') {
        if (err.original.code === '23502') {
            res.status(400).json({
                msg: 'Error 23502'
            })
        } else {
            res.status(500).json({
                msg: 'Internal Server Error'
            })
        }
    } else if (err.name === 'NotFoundError'){
        res.status(404).json({ msg: 'Error Not Found' });
    } else if(err.name === 'SequelizeUniqueConstraintError'){
        res.status(400).json(err.errors[0].message);
    } else if(err.name === 'BadRequestError'){
        res.status(400).json(err.message);
    } else if(err.name === 'JsonWebTokenError') {
        res.status(401).json(err.message);
    } else if(err.name === 'TokenExpiredError') {
        res.status(401).json(err.message);
    } else if(err.name === 'NotBeforeError') {
        res.status(401).json(err.message);
    } else if(err.name === 'ForbiddenError'){
        res.status(403).json(err.message);
    } else {
        console.log(err)
        res.status(500).json({
            msg: 'Internal Server Error'
        });
    }
}