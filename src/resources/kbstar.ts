import { ETF } from "define";
import json from "./kbstar.json";

const [ ...KBSTAR ] = json;

const kbstar:ETF[] = KBSTAR as unknown as ETF[];

export default kbstar;
