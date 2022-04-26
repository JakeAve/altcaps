# AltCaps

I originally did this with node, but deno is much cooler. Download deno at
deno.land.

## Prereqs

- [ ] deno

## Use it as a script on your machine

### Setup

```
git clone https://github.com/JakeAve/altcaps.git
cd altcaps
```

### Add deno script to .zshrc

Maybe you have a lot of alt caps action in your life. You can even add this script
to your .zshrc/.bashrc/bash.profile.

```zsh
alias altcaps='deno run --allow-run ~<path-to-altcaps>/altcaps.ts'
# --allow-run is for the copy dependency https://deno.land/x/copy_paste@v1.0.5/mod.ts. Use at your own risk.
```

### Run it

From the root folder, you can do

```zsh
deno run --allow-run altcaps.ts "Why are you mocking me??"
# wHy ArE yOu MoCkInG mE??
#
# Text copied to clipboard
```

If you add it as an alias to your .zshrc, you can do

```zsh
altcaps "Why are alt caps so important in your life??"

# wHy ArE aLt CaPs So ImPoRtAnT iN yOuR lIfE??
#
# Text copied to clipboard
```

### Compile it

You can compile this into a huge binary with one of the following commands depending on your operating system:

- `deno task build:lin`
- `deno task build:mac86`
- `deno task build:macarm`
- `deno task build:win`

Now you can run the binary directly:

```zsh
./dist/altcaps-aarch64-apple-darwin foo
# FoO
#
# Text copied to clipboard
```

Or direct your alias to the binary:

```zsh
alias altcaps='~/<path-to-altcaps>/altcaps/dist/altcaps-aarch64-apple-darwin'
```

## Use it anywhere

If you think this is the dAnKeSt ThInG you've ever seen, you can import `toAltcaps`:

```
import { toAltcaps } from 'https://raw.githubusercontent.com/JakeAve/altcaps/main/mod.ts'
```

But since it's TS for no super good reason, you'll probably only be able to use it in deno.
