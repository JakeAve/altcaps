import { toAltcaps } from "./mod.ts";
import { copy } from "https://deno.land/x/copy_paste@v1.0.5/mod.ts";

const str = Deno.args[0];

if (!str) throw new Error("yOu DiDn'T wRiTe AnYtHiNg To AlTcApS, gEnIuS");

const result = toAltcaps(str);

console.log(result);
await copy(result);

console.log(`\n\u001b[36mText copied to clipboard\u001b[0m`);
