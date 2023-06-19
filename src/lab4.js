import { createInterface } from "node:readline";

const rl = createInterface(process.stdin,process.stdout);

rl.question('Input size: ', (nText) => {
        const n = parseInt(nText);

    for(let j = 0; j < n; j++) {
        let line = '';
        for (let i = 0; i < n; i++) {
            line +=
            (
                i === 0 ||
                j === 0 ||
                i === n - 1 ||
                j === n - 1
            )? '*' : ' ' 
        }
        console.info(line);
    }
});