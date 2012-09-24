function (doc) {
	if (doc._id.substr(0,8) === "subject:") {
		emit(doc._id.substr(8), {
			"acronym":doc.acronym,
			"title":doc.title,
			"comments":doc.comments			
		});
	}
};