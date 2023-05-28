import { v4 as uuidv4 } from 'uuid';

const random = uuidv4();

let randomOffenseCode = "";

for (let i = 0; i < 4; i++) {
   if (i === 1) {
      randomOffenseCode += "-";
   }
   randomOffenseCode += random[i];
};

export default randomOffenseCode;