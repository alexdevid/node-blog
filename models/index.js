module.exports = function (db, cb) {
    db.load("./article", function (err) {
        if (err) {
            return cb(err);
        }
        return cb();
    });
};