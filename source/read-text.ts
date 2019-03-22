
import {readFile} from "./read-file"

export async function readText(path: string, encoding = "utf8"): Promise<string> {
	const buffer = await readFile(path)
	return buffer.toString(encoding)
}
