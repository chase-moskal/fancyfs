
import {readFile as fsReadFile} from "fs"

export async function readFile(path: string): Promise<Buffer> {
	return new Promise<Buffer>((resolve, reject) => {
		fsReadFile(path, (error, data) => {
			if (error) reject(error)
			else resolve(data)
		})
	})
}
