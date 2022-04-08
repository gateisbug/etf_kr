import { ETF } from "define";

const kodex:ETF[] = [
	{
		operator: "삼성투자증권",
		name: "KODEX 200",
		ticker: "069500",
		explain: "대한민국 국가대표! 주식시장을 대표하는 200개 종목으로 구성된 KOSPI 200 지수를 그대로 추적하는, 규모와 거래량에서 대한민국 국가대표 ETF입니다.",
		tags: ["국내주식"],
		index: "KOSPI200",
		link: "https://m.kodex.com/product_view.do?fId=2ETF01",
		detail : {
			fee: 0.15, distribution: true
		}
	},
	{
		operator: "삼성투자증권",
		name: "KODEX WTI원유선물(H)",
		ticker: "261220",
		explain: "S&P GSCI Crude Oil Index Excess Return의 수익률을 추적하는 ETF입니다.",
		tags: ["원자재 및 통화"],
		index: "S&P GSCI CrudeOil IDX ExcessReturn",
		link: "https://www.kodex.com/product_view.do?fId=2ETF72",
		detail : { fee: 0.35, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 미국S&P에너지(합성)",
		ticker: "218420",
		explain: "전세계 에너지 산업을 이끄는 미국의 에너지 기업들 KODEX로 미국 주요 에너지 기업에 쉽고 빠르게 투자하십시오.",
		tags: ["해외주식", "업종"],
		index: "S&P Select Sector Energy Index",
		link: "https://www.kodex.com/product_view.do?fId=2ETF49",
		detail : { fee: 0.25, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 3대농산물선물(H)",
		ticker: "271060",
		explain: "소액으로 대표적인 농산물(옥수수, 콩, 밀) 선물에 분산투자할 수 있는 방법!",
		tags: ["원자재 및 통화"],
		index: "S&P Grains Select Index ER",
		link: "https://www.kodex.com/product_view.do?fId=2ETF84",
		detail : { fee: 0.55, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 보험",
		ticker: "140700",
		explain: "경기회복에 따른 금리인상, 제도개선 등에 따라 실적 개선이 기대되는 국내 대표 보험주에 투자합니다.",
		tags: ["국내주식", "업종"],
		index: "KRX 보험",
		link: "https://www.kodex.com/product_view.do?fId=2ETF31",
		detail : { fee: 0.45, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 200선물인버스2X",
		ticker: "252670",
		explain: "F-KOSPI200(KOSPI200 선물지수)의 일별수익률을 음(陰)의 2배수로 추적하는 ETF입니다.",
		tags: ["레버리지/인버스", "국내주식"],
		index: "F-KOSPI200 지수",
		link: "https://www.kodex.com/product_view.do?fId=2ETF70",
		detail : { fee: 0.64, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX S&P글로벌인프라(합성)\n",
		ticker: "269420",
		explain: "글로벌 인프라 종목에 투자합니다. 전 세계 에너지, 운송, 유틸리티 섹터에 분산투자하세요.",
		tags: ["해외주식", "업종"],
		index: "S&P Global Infrastructure Index",
		link: "https://www.kodex.com/product_view.do?fId=2ETF77",
		detail : { fee: 0.26, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 다우존스미국리츠(H)",
		ticker: "352560",
		explain: "전 세계 리츠(REITs) 시장에서 가장 큰 미국 리츠 시장! 각 섹터별로 골고루 분산되어 선진화된 미국 리츠 시장에 투자하세요.",
		tags: ["부동산"],
		index: "DowJones US Real Estate Index",
		link: "https://www.kodex.com/product_view.do?fId=2ETFC9",
		detail : { fee: 0.09, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 미국S&P500TR",
		ticker: "379800",
		explain: "미국 시장을 대표하는 대형주 500개 종목에 투자하세요. 연금투자도 가능하며, 배당금을 재투자하는 토탈리턴 ETF입니다.",
		tags: ["해외주식", "시장지수"],
		index: "S&P 500 Total Return Index",
		link: "https://www.kodex.com/product_view.do?fId=2ETFE4",
		detail : { fee: 0.05, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 콩선물(H)",
		ticker: "138920",
		explain: "기상이변, 생산량 감소, 신흥국 수요증가. 콩의 투자매력이 더욱 높아집니다.",
		tags: ["원자재 및 통화"],
		index: "S&P GSCI Soybeans(TR)",
		link: "https://www.kodex.com/product_view.do?fId=2ETF29",
		detail : { fee: 0.68, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 미국달러선물 레버리지",
		ticker: "261250",
		explain: "달러화 투자도 이제 소액으로 편리하게! 한국거래소 미국달러선물지수의 수익률을 양(陽)의 2배로 추적하는 ETF입니다.",
		tags: ["원자재 및 통화", "레버리지/인버스"],
		index: "F-USDKRW",
		link: "https://www.kodex.com/product_view.do?fId=2ETF74",
		detail : { fee: 0.45, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 미국나스닥100TR",
		ticker: "379810",
		explain: "미국 나스닥 기업 중 시가총액이 크고 거래량이 많은 100개 우량종목에 투자하세요. 연금투자도 가능하며, 배당금이 재투자되는 토탈리턴 ETF입니다.",
		tags: ["해외주식", "시장지수"],
		index: "Nasdaq-100 Total Return Index",
		link: "https://www.kodex.com/product_view.do?fId=2ETFE3",
		detail : { fee: 0.05, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 선진국MSCI World",
		ticker: "251350",
		explain: "선진국 시장에 분산투자하십시오! 23개 선진국의 중·대형주 약 1,600개 종목에 투자합니다.",
		tags: ["해외주식", "시장지수"],
		index: "MSCI World Index(KRW)",
		link: "https://www.kodex.com/product_view.do?fId=2ETF68",
		detail : { fee: 0.3, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 인버스",
		ticker: "114800",
		explain: "시장이 하락하면 수익이 나는! 기초지수(F-KOSPI200)의 일별수익률을 역방향으로 추적하는 ETF입니다.",
		tags: ["국내주식", "레버리지/인버스"],
		index: "F-KOSPI200",
		link: "https://www.kodex.com/product_view.do?fId=2ETF20",
		detail : { fee: 0.64, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 구리선물(H)",
		ticker: "138910",
		explain: "늘어나는 수요, 줄어드는 생산량! 붉은금, 구리의 투자매력이 더욱 높아집니다.",
		tags: ["원자재 및 통화"],
		index: "S&P GSCI Copper(TR)",
		link: "https://www.kodex.com/product_view.do?fId=2ETF28",
		detail : { fee: 0.68, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 고배당",
		ticker: "279530",
		explain: "KOSPI 지수 구성 종목 중 배당수익률이 높고, 변동성은 낮은 종목에 투자합니다.",
		tags: ["국내주식", "팩터"],
		index: "FnGuide 고배당 Plus 지수",
		link: "https://www.kodex.com/product_view.do?fId=2ETF96",
		detail : { fee: 0.3, distribution: true }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 은행",
		ticker: "091170",
		explain: "한국경제의 든든한 버팀목 은행! 국내 은행을 대표하는 종목으로 구성된 KRX 은행(Banks) 지수를 추적하는 ETF입니다.",
		tags: ["국내주식", "업종"],
		index: "KRX 은행",
		link: "https://www.kodex.com/product_view.do?fId=2ETF08",
		detail : { fee: 0.3, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 코스닥150롱 코스피200숏선물",
		ticker: "360150",
		explain: "ETF를 활용해 롱쇼트 전략으로 투자하세요. 코스닥150지수는 매수하고, 코스피200지수는 매도하여 지수간 갭에 투자합니다.",
		tags: ["국내주식", "전략/테마"],
		index: "코스닥150롱100% KOSPI200숏100%선물",
		link: "https://www.kodex.com/product_view.do?fId=2ETFD4",
		detail : { fee: 0.64, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 미국S&P500선물(H)",
		ticker: "219480",
		explain: "전세계 가장 큰 주식시장인 미국. 미국에 상장된 500개 글로벌 대표기업 관련 상품에 투자합니다.",
		tags: ["해외주식", "시장지수"],
		index: "S&P 500 Futures(TR)",
		link: "kodex.com/product_view.do?fId=2ETF50",
		detail : { fee: 0.25, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX 골드선물(H)",
		ticker: "132030",
		explain: "금(金)에 투자하는 가장 손쉬운 방법!! 국내 대표 ETF, KODEX로 빠르고 손쉽게 금(金)에 투자하십시오!",
		tags: ["원자재 및 통화"],
		index: "S&P GSCI Gold(TR)",
		link: "https://www.kodex.com/product_view.do?fId=2ETF24",
		detail : { fee: 0.68, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "KODEX TRF7030",
		ticker: "329670",
		explain: "리스크, 피하지 말고 고르자! 적극형 투자성향을 가진 투자자에게 적합한 자산배분 ETF로, 글로벌 선진국 주식 : 국내채권 = 7 : 3 비중으로 투자합니다.",
		tags: ["혼합자산"],
		index: "FnGuide TRF 7030",
		link: "https://www.kodex.com/product_view.do?fId=2ETFC1",
		detail : { fee: 0.1, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
	{
		operator: "삼성투자증권",
		name: "",
		ticker: "",
		explain: "",
		tags: [],
		index: "",
		link: "",
		detail : { fee: 0, distribution: false }
	},
]

export default kodex;
