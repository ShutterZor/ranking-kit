let optionCheckd;
let default_displayUnit = ['all', 'sci', 'swufe', 'ccf', 'cufe', 'sciif', 'fdu', 'sjtu', 'cssci', 'xmu', 'ruc', 'cscd', 'uibe', 'swjtu', 'xdu','sci-base', 'sci-up', 'pku'];

function checkOption() {
	chrome.storage.sync.get({"displayUnit": default_displayUnit}, function(items) {
		optionCheckd = items["displayUnit"];
		start();
	});
}

function start(){
	if (location.hostname.startsWith("scholar.google")) {
		if (optionCheckd.includes("ccf")){
			ccf.custom2rank = dblp.uri2rank;
			scholar.rankSpanList.push(ccf.getRankingSpan);
			scholar.rankSpanListSwufe.push(swufe.CCFgetRankingSpanEn);
		}
		if(optionCheckd.includes("cufe")){
			scholar.rankSpanListSwufe.push(cufe.getRankingSpan);
			scholar.rankSpanListSwufe.push(cufe.getRankingSpanEn);
		}
		if(optionCheckd.includes("ruc")){
			scholar.rankSpanListSwufe.push(ruc.getRankingSpan);
			scholar.rankSpanListSwufe.push(ruc.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci")){
			scholar.rankSpanListSwufe.push(sci.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-base")){
			scholar.rankSpanListSwufe.push(sciZhongBase.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-up")){
			scholar.rankSpanListSwufe.push(sciZhongUp.getRankingSpanEn);
		}
		if (optionCheckd.includes("uibe")){
			scholar.rankSpanListSwufe.push(uibe.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			scholar.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("fdu")){
			scholar.rankSpanListSwufe.push(fdu.getRankingSpan);
		}
		if (optionCheckd.includes("sjtu")){
			scholar.rankSpanListSwufe.push(sjtu.getRankingSpan);
		}
		if (optionCheckd.includes("cssci")){
			scholar.rankSpanListSwufe.push(cssci.getRankingSpan);
		}
		if (optionCheckd.includes("xmu")){
			scholar.rankSpanListSwufe.push(xmu.getRankingSpan);
		}
		if (optionCheckd.includes("cscd")){
			scholar.rankSpanListSwufe.push(cscd.getRankingSpanEn);
			scholar.rankSpanListSwufe.push(cscd.getRankingSpan);
		}
		if (optionCheckd.includes("swjtu")){
			scholar.rankSpanListSwufe.push(swjtu.getRankingSpanEn);
			scholar.rankSpanListSwufe.push(swjtu.getRankingSpan);
		}
		if (optionCheckd.includes("xdu")){
			scholar.rankSpanListSwufe.push(xdu.getRankingSpanEn);
			scholar.rankSpanListSwufe.push(xdu.getRankingSpan);
		}
		if (optionCheckd.includes("pku")){
			scholar.rankSpanListSwufe.push(pku.getRankingSpan);
		}
		if (optionCheckd.includes("swufe")){
			scholar.rankSpanListSwufe.push(swufe.getRankingSpanEn);
			scholar.rankSpanListSwufe.push(swufe.getRankingSpan);
		}
		scholar.run();
	} else if (location.href.startsWith(
			"https://webvpn.swufe.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kns8/defaultresult/index"
		) || location.href.startsWith("https://kns.cnki.net/kns8/defaultresult") || location.href.startsWith("https://kns.cnki.net/KNS8/AdvSearch")) {
		if(optionCheckd.includes("cufe")){
			zhiwang.rankingSpanProvider.push(cufe.getRankingSpan);	
		}
		if(optionCheckd.includes("ruc")){
			zhiwang.rankingSpanProvider.push(ruc.getRankingSpan);	
		}
		if(optionCheckd.includes("fdu")){
			zhiwang.rankingSpanProvider.push(fdu.getRankingSpan);	
		}
		if(optionCheckd.includes("sjtu")){
			zhiwang.rankingSpanProvider.push(sjtu.getRankingSpan);	
		}
		if(optionCheckd.includes("cssci")){
			zhiwang.rankingSpanProvider.push(cssci.getRankingSpan);	
		}
		if(optionCheckd.includes("xmu")){
			zhiwang.rankingSpanProvider.push(xmu.getRankingSpan);	
		}
		if(optionCheckd.includes("cscd")){
			zhiwang.rankingSpanProvider.push(cscd.getRankingSpan);
		}
		if(optionCheckd.includes("swjtu")){
			zhiwang.rankingSpanProvider.push(swjtu.getRankingSpan);
		}
		if(optionCheckd.includes("xdu")){
			zhiwang.rankingSpanProvider.push(xdu.getRankingSpan);
		}
		if(optionCheckd.includes("pku")){
			zhiwang.rankingSpanProvider.push(pku.getRankingSpan);
		}
		if(optionCheckd.includes("swufe")){
			zhiwang.rankingSpanProvider.push(swufe.getRankingSpan);
		}
		zhiwang.start();
	}
}

$(document).ready(checkOption);