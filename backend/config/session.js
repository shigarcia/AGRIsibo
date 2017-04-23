'use strict';

module.exports = (req, res, next) => {
	if (typeof res !== 'undefined') {
		//check if session exists
	    if (req.session && req.session.user) {
	        return next();
	    }
	    //session does not exist
	    res.status(403).send({UNAUTH: 'NO ACTIVE SESSION'});
	}
	
	if (req.session && req.session.user) {
		return next();
	}
}
