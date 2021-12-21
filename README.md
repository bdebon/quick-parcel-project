# 🏁 Introduction

This is the a quick starter project made and used by Benjamin Code to quickly experiment stuffs when he's trying to replicate cool effects he sees on the web.

## 💻 Installation & Runnig

To install dependencies all you need to do is run this command:

```shell
npm install
```

### Dev server

```shell
npm run dev
```

Run the above command to launch dev server and then go to `localhost:3000`

### Build

```shell
npm run build
```

To compile codes & build for production. That will create a **"./dist"** directory in the root (more details [here](https://vitejs.dev/guide/build.html)).

## 🚧 Handling changes

Change the html and modify the css in the good file in `./src/scss`.
That is almost everything you need to know.

## ⚡ Alias to quickly upload the code on **codesandbox**

You must install [codesandbox command line](https://codesandbox.io/docs/environment) on your computer. Then add this alias to your `.zshrc`:

```shell
alias share_code='rm -rf dist && codesandbox ./'
```

## 📍 Note

I use this quick start kit to quickly launch new project for my live-streams on Twitch. At the end, the goal is to publish on **[codesandbox](https://codesandbox.io/)** the result.

This version uses **ViteJS** [as the development environment. This version is an alternative to the one using **Parcel** (see [codesandbox](https://github.com/bdebon/quick-parcel-project) & [main](https://github.com/bdebon/quick-parcel-project/tree/main) branches).

## Benjamin Code

It's also the project he uses for his Twitch livestreams.

A real project was made with this quick starter:

[benjamincode.tv](https://benjamincode.tv)

To support Benjamin Code, you can follow him on:

[<image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" height="12" /> YouTube](https://www.youtube.com/channel/UCLOAPb7ATQUs_nDs9ViLcMw) [<image src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1200px-Twitter_Bird.svg.png" height="12" style="margin-left: 10px" /> Twitter](https://twitter.com/benjamincodeYT) [<image src="https://upload.wikimedia.org/wikipedia/commons/d/dd/LOGO_TWITCH_CAR_JE_LIVE_SUR_TWITCH_ET_J%27AI_60_000_ABONEE.png" height="12" style="margin-left: 10px" /> Twitch](https://www.twitch.tv/benjamincode)
