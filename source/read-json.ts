
import {readFile} from "./read-file"

export async function readJson<T extends Object = Object>(path: string): Promise<T> {
	return JSON.parse(await readFile(path))
}
