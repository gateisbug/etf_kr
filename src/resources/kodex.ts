import { ETF } from "define";
import json from "./kodex.json";

const [ ...KODEX ] = json;

const kodex:ETF[] = KODEX as unknown as ETF[];

export default kodex;
