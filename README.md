
# *fancyfs* ╰(✿˙ᗜ˙)੭━☆ﾟ.*･｡ﾟ💾

fs functions with promises  
&nbsp;&nbsp; [**readFile**](source/read-file.ts)(path, encoding)  
&nbsp;&nbsp; [**writeFile**](source/write-file.ts)(path, data)

examples
```ts
import {readFile, writeFile} from "fancyfs"

// read/write text
const text = await readFile("LICENSE.md", "utf8")
await writeFile("LICENSE-copy.md", text)

// read/write json
const data = JSON.parse(await readFile("package.json"))
await writeFile("package-copy.json", JSON.stringify(data))
```
