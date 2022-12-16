This project was bootstrapped with
[Bottender](https://github.com/Yoctol/bottender) init script.

[LINE 開發者管理後台](https://developers.line.biz/)

[從零開始在 Windows 使用 Node.js 打造專屬於你的 LINE Bot 聊天機器人](https://etrexkuo.medium.com/從零開始在-windows-使用-node-js-打造專屬於你的-line-bot-聊天機器人-173ac0f6be92)  
`npx create-bottender-app bottender-test`

[bottender.js.org/docs/](https://bottender.js.org/docs/)  
[advanced-guides-deployment](https://bottender.js.org/docs/advanced-guides-deployment/)  

Life Bot > Messaging API

Webhook URL `https://xxx-2022.ngrok.io/webhooks/line`

https://line-bot-bottender.vercel.app/webhooks/line  
`https://<your-app-name>.<your-user-name>.now.sh/webhooks/line`  

[OpenAI API](https://openai.com/api/)  
[用 Node.js 建立你的第一個 LINE Bot 聊天機器人以 OpenAI GPT-3 為例](https://israynotarray.com/nodejs/20221210/1224824056)

## Local

`npm run dev`  

line webhook URL: https://xxxxx.ngrok.io/webhooks/line  
change Life Bot > Messaging API > Webhook URL  

## Sending Feedback

Always feel free to open an issue to
[Bottender](https://github.com/Yoctol/bottender/issues) repository.

## Configuration

### The `bottender.config.js` File

Bottender configuration file. You can use this file to provide settings for the session store and channels.

### The `.env` File

Bottender utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package to load your environment variables when developing your app.

To make the bot work, you must put required environment variables into your `.env` file.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.<br>
The bot will automatically reload if you make changes to the code.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000) and ngrok runs on [http://localhost:4040](http://localhost:4040).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm run dev -- --console
yarn dev --console
```

### `npm start`

Runs the app in production mode.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm start -- --console
yarn start --console
```

### `npm run lint`

Runs the linter rules using [Eslint](https://eslint.org/).

### `npm test`

Runs the test cases using [Jest](https://jestjs.io/).

## Learn More

To learn Bottender, check out the [Bottender documentation](https://bottender.js.org/docs/en/getting-started).

For more examples, see [Bottender examples](https://github.com/Yoctol/bottender/tree/master/examples).
