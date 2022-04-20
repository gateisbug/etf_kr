import { ETF } from "define";
import json from "./arirang.json";

const [ ...ARIRANG ] = json;

const arirang:ETF[] = ARIRANG as unknown as ETF[];

export default arirang;
