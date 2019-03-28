
import {
	PathLike,
	WriteFileOptions,
	writeFile as fsWriteFile
} from "fs"

export async function writeFile(
	path: PathLike | number,
	data: any,
	options?: WriteFileOptions,
	callback?: (err: NodeJS.ErrnoException) => void
): Promise<void> {
	return new Promise((resolve, reject) => {
		fsWriteFile(path, data, options, error => {
			if (callback) callback(error)
			if (error) reject(error)
			else resolve(data)
		})
	})
}
