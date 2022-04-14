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
alias altcaps=deno run --allow-run ~<path-to-altcaps>/altcaps.ts'
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

So in the `dist` folder, we got some executables. Naturally, I didn't test them all, so good luck with that.
