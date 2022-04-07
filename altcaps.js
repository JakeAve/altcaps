import clipboardy from "clipboardy";
const str = process.argv[2];

let isAlt = false;
let result = "";
for (const c of str.toLowerCase()) {
  const u = c.toUpperCase();
  if (u !== c && isAlt) {
    result += u;
    isAlt = false;
  } else if (u !== c) {
    result += c;
    isAlt = true;
  } else result += c;
}

console.log(result);
clipboardy.writeSync(result);
