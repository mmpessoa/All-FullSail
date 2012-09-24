$(document).ready(function() {
	$.ajax({
		"url": '/asdproject/_all_docs?include_docs=true&startkey="creature:cryptid:"&endkey="creature:cryptid:zzzz"',
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, subject){
				var acronym = subject.doc.acronym;
				var topic = subject.doc.topic;
				var comments = subject.doc.comments;
				$('#subjectlist').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
							  .text(topic)
						)
				);
			});
			$('#subjectlist').listview('refresh');
		}
	});
});