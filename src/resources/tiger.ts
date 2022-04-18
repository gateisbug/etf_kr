import { ETF } from "define";
import json from "./tiger.json";

const [ ...TIGER ] = json;

const tiger:ETF[] = TIGER as unknown as ETF[];

export default tiger;
