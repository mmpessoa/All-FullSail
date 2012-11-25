function (doc) {
	if (doc._id.substr(0,8) === "subject:") {
		emit(doc._id.substr(8), {
			"creature":doc.creature,
			"subject":doc.subject,
			"description":doc.description
		});
	}
};
