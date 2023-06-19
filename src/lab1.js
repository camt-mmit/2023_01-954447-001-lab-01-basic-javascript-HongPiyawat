import { createInterface } from "node:readline";

const rl = createInterface(process.stdin,process.stdout);


rl.question('Input Score: ', (score) => {
    let grade = 0;
    if (score >= 80) {
        grade = 'A';
    }else if (score >= 70) {
        grade = 'B';
    }else if (score >= 60) {
        grade = 'C';
    }else if (score >= 50) {
        grade = 'D';
    }else {
        grade = 'F';
    }
    console.log(`Your score is ${grade}.`)
    rl.close();
});