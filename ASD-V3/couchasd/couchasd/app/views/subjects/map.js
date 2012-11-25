function (doc) {
	if (doc._id.substr(0,8) === "subject:") {
		emit(doc._id.substr(8), {
			"reportername":doc.reportername,
			"cryptidnumber":doc.cryptidnumber,
			"cryptidtype":doc.cryptidtype,
			"encounter":doc.encounter			
		});
	}
};
