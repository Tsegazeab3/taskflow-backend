#!/usr/bin/node
import * as fs from "node:fs/promises"
// using json in then catch :
// const file: Promise<string | void> = fs.readFile("mock-users.json", "utf-8");
// file.then((file_str) => {
// 	console.log(`${file_str}found file this works`)
//
// })
// 	.catch((err: any) => console.log(`${err}\n either couldn't find the file or the json function is not working`))
// using asynch await





// asynch await feels more familiar when coming from python3
// const read = async (filename: string) => {
// 	try {
// 		const data = await fs.readFile(filename, "utf-8");
// 		const json_file = JSON.parse(data);
//
// 		console.log(json_file[1].firstName);
// 	}
// 	catch (err: any) {
// 		console.log(`${err}`)
// 	}
// }
// read("mock-users.json");

// reading an http request
const readJson = async () => {
	try {
		const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
		const dataJson = await data.json();
		console.log(dataJson);
	}
	catch (err) {
		console.log(err);
	}
}
readJson();
