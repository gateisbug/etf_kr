import { ETF } from "define";

const kodex:ETF[] = [
	{
		operator: "삼성투자증권",
		name: "KODEX 200",
		ticker: "069500",
		explain: "대한민국 국가대표! 주식시장을 대표하는 200개 종목으로 구성된 KOSPI 200 지수를 그대로 추적하는, 규모와 거래량에서 대한민국 국가대표 ETF입니다.",
		tags: ["KOSPI200", "인덱스"],
		link: "https://m.kodex.com/product_view.do?fId=2ETF01",
		detail : {
			fee: 0.15, distribution: true
		}
	}
]

export default kodex;
