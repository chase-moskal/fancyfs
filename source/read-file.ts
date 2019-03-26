
import {
	PathLike,
	readFile as fsReadFile
} from "fs"

export async function readFile(
	path: PathLike | number,
	options?: { encoding?: string | null; flag?: string; } | string | undefined | null,
	callback?: (err: NodeJS.ErrnoException, data: string | Buffer) => void
): Promise<Buffer | string> {
	return new Promise<Buffer | string>((resolve, reject) => {
		fsReadFile(path, options, (error, data) => {
			if (callback) callback(error, data)
			if (error) reject(error)
			else resolve(data)
		})
	})
}
