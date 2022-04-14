## AltCaps

I originally did this with node, but deno is much cooler. Download deno at deno.land.

### Setup

```
git clone https://github.com/JakeAve/altcaps.git
cd altcaps
```

### Add to .zshrc

Maybe you have a lot of alt caps action in your life. You can even add this line to your .zshrc/.bashrc/bash.profile.

```
alias altcaps='deno run --allow-run ~<path-to-altcaps>/altcaps.ts'
```

### Run it

From the root folder, you can do

```
deno run --allow-run altcaps.ts "Why are you mocking me??"
```

If you add it as an alias to your .zshrc, you can do

```
altcaps "Why are alt caps so important in your life??"
```

### Compile it

You can compile with something like `deno compile --allow-run --target=<your-os> src/altcaps.ts`, but that binary be like 80MB. I also added binaries to the release so you can download malware from me instead of compiling your own.
