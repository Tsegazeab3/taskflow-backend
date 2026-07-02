import * as fs from "node:fs/promises"
const read = async (file_name: string): Promise<string | void> => {
	try {
		const file = await fs.readFile(file_name, "utf-8");
		console.log(`${file}`);
		return (file);
	}
	catch (err: any) {
		console.log(`couldn't find the file`);
	}
}
export default read
