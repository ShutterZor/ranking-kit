const ccf = {};

ccf.getRankingInfo = function(names) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	for (let name of names) {
		let ranking;
		if (ccf.custom2rank != undefined) {
			ranking = ccf.custom2rank(name);
		} else if (name.full != undefined) {
			ranking = ccf.full2rank[name.full.toLowerCase()];
		}
		if (ranking == undefined && name.abbr != undefined) {
			let possible = ccf.abbr2index[name.abbr.toLowerCase()];
			if (possible == undefined) {
				ranking = 'none';
				rankingInfo.info += "[" + name.abbr + "] " + name.full + ": not found\n"
			} else {
				rankingInfo.info += name.abbr + ":" + "\n";
				for (let index of possible) {
					const fullname = ccf.rank[index][0];
					console.log(fullname);
					const rank = ccf.rank[index][1];
					rankingInfo.info += fullname + ": CCF " + rank + "\n";
					ranking = rank + '?';
				}
			}
		} else if (ranking == undefined) {
			ranking = 'none';
		} else {
			rankingInfo.info += name.full + ": CCF " + ranking + "\n"
		}
		rankingInfo.rankings.push(ranking);
	}
	if (rankingInfo.info.length == 0) {
		rankingInfo.info = "not found"
	}
	return rankingInfo;
}

ccf.getRankingClass = function(rankings) {
	for (let ranking of 'ABC') {
		for (let result of rankings) {
			if (result != undefined && result[0] == ranking) {
				return 'ccf-' + ranking.toLowerCase();
			}
		}
	}
	return 'ccf-none';
}

ccf.getRankingSpan = function(names) {
	let rankingInfo = ccf.getRankingInfo(names);
	if (rankingInfo.rankings.join('/') != "none") {
		var span = $('<span>').addClass('ccf-ranking').addClass(ccf.getRankingClass(rankingInfo.rankings)).text(
			'CCF ' + rankingInfo.rankings.join('/'));
		if (rankingInfo.info.length != 0) {
			span.addClass('ccf-tooltip').append($('<pre>').addClass('ccf-tooltiptext').text(rankingInfo.info));
		}
	} else {
		var span = $('<span>').addClass('ccf-ranking').addClass(ccf.getRankingClass(rankingInfo.rankings));
		span.css('display', 'none');
	}

	return span;
}
