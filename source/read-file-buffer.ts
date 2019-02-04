
import * as fs from "fs"

export async function readFileBuffer(path: string): Promise<Buffer> {
	return new Promise<Buffer>((resolve, reject) => {
		fs.readFile(path, (error, data) => {
			if (error) reject(error)
			else resolve(data)
		})
	})
}
