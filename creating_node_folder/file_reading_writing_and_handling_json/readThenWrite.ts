import * as fs from "node:fs/promises"
const readThenWrite = async () => {
	try {
		const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
		const dataJson = await data.json();
		const file = await fs.writeFile("output.json", JSON.stringify(dataJson));
		console.log(file);
	}
	catch (err) {
		console.log(err);
	}
}
readThenWrite();

