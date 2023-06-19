import { createInterface } from "node:readline";

const rl = createInterface(process.stdin,process.stdout);

rl.question('Input size: ', (size) => {
        const n = size;
        for (let j = 1; j <= n; j++) {
            let line = '';
            for (let i = 1; i <= n - j; i++) {
                line += ' '.padStart(5,' ');
            }
            for (let k = 1; k <= j; k++) {
                line += '*'.padStart(5,' ');
            }
            console.info(line)
        }
    rl.close();
});