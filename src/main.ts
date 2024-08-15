import "dotenv/config";
import { helloWorld } from "./hello-world.js"


const main = async () => {
	helloWorld();
	console.log(`You're running in ${process.env.NODE_ENV}`);
}

main();