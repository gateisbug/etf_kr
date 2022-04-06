import { ETF } from "define";

const kodex:ETF[] = [
	{
		name: "KODEX 200",
		ticker: "069500",
		explain: "대한민국 국가대표! 주식시장을 대표하는 200개 종목으로 구성된 KOSPI 200 지수를 그대로 추적하는, 규모와 거래량에서 대한민국 국가대표 ETF입니다.",
		tags: [],
		link: "https://m.kodex.com/product_view.do?fId=2ETF01",
		detail : {
			index: { title: "KOSPI200", info: "KOSPI200지수는 유가증권시장에 상장된 전체 종목 중에서 시장대표성,업종대표성, 유동성 등을 감안하여 선정된 200개 종목을 시가총액 가중방식으로 산출한 지수로 대한민국의 대표적인 시장지수입니다. (지수산출 : 한국거래소)" },
			basic: { asset: "53873억원", date: "2002.10.14", fee: 0.15, distribution: true },
			Top10: [
				{ category: "삼성전자", ticker: "005930", size: 28.63 },
				{ category: "SK하이닉스", ticker: "000660", size: 5.73 },
				{ category: "NAVER", ticker: "035420", size: 4.04 },
				{ category: "카카오", ticker: "035720", size: 2.99 },
				{ category: "삼성SDI", ticker: "006400", size: 2.70 },
				{ category: "현대차", ticker: "005380", size: 2.21 },
				{ category: "LG화학", ticker: "051910", size: 2.16 },
				{ category: "KB금융", ticker: "105560", size: 1.83 },
				{ category: "POSCO홀딩스", ticker: "005490", size: 1.64 },
				{ category: "셀트리온", ticker: "068270", size: 1.63 },
			]
		}
	}
]

export default kodex;
