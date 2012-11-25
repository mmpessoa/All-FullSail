function (doc) {
	if (doc._id.substr(0,9) === "creature:") {
		emit(doc._id);
	}
};