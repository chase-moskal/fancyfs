
import {readFileBuffer} from "./read-file-buffer"

export async function readFile(path: string, encoding = "utf8"): Promise<string> {
	const buffer = await readFileBuffer(path)
	return buffer.toString(encoding)
}
