var ObjectID = require('mongodb').ObjectID;

self.generateObjectIDSafely = function(id) {
	try {
		return ObjectID(id);
	} catch(e) {
		print(e);
	}
};
