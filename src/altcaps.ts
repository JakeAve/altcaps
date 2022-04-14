import { copy } from "https://deno.land/x/copy_paste@v1.0.5/mod.ts";
const str = Deno.args[0];

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
await copy(result);
