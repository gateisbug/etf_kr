import { ETF } from "define";
import json from "./kindex.json";

const [ ...KINDEX ] = json;

const kindex:ETF[] = KINDEX as unknown as ETF[];

export default kindex;
