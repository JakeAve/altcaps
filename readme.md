## AltCaps

Unless you got node 14+ and npm already installed, this ain't gonna be worth it

### Setup

```
git clone https://github.com/JakeAve/altcaps.git
cd altcaps
npm i
```

### Add to .zshrc

Maybe you have a lot of alt caps action in your life. You can even add this line to your .zshrc/.bashrc/bash.profile.

```
alias altcaps='node ~<path-to-altcaps>/altcaps.js'
```

### Run it

From the root folder, you can do

```
node altcaps "Why are you mocking me??"
```

If you add it as an alias to your .zshrc, you can do

```
altcaps "Why are alt caps so important in your life??"
```
