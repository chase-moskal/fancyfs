
import {readText} from "./read-text"

export async function readJson<T extends Object = Object>(path: string): Promise<T> {
	return JSON.parse(await readText(path))
}
