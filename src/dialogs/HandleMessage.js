const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async function HandleMessage(context) {

  switch (context.event.text) {
    case 'La':
    case 'la':
      T(context);
      return;
    case 'Li':
      await context.sendText('https://jacobhsu.tw/life');
      return;
    default:
      try {
        const completion = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: context.event.text ,
          max_tokens: 200,
        });
        await context.sendText(completion.data.choices[0].text.trim());
      } catch (error) {
        await context.sendText(error); 
        return 'default';
      }
  }
};
async function T(context) {
  const template = [
    {
      thumbnailImageUrl:
        'https://gw.alicdn.com/imgextra/i4/TB1q5XqoCR26e4jSZFESuvwuXXa.jpg',
      title: 'Larp',
      text: '劇本店',
      actions: [
        {
          type: 'uri',
          label: '夢迴探案館',
          uri: 'https://www.google.com/search?q=' + encodeURI('夢迴探案館'),
        },
        {
          type: 'uri',
          label: '遊域',
          uri: 'https://www.google.com/search?q=' + encodeURI('遊域'),
        },
        {
          type: 'uri',
          label: '410號檔案室',
          uri: 'https://www.google.com/search?q=' + encodeURI('410號檔案室'),
        },
      ],
    },
    {
      thumbnailImageUrl:
        'https://gw.alicdn.com/imgextra/i4/TB1q5XqoCR26e4jSZFESuvwuXXa.jpg',
      title: 'Larp',
      text: '劇本店',
      actions: [
        {
          type: 'uri',
          label: '衛斯理探案館',
          uri:
            'https://www.google.com/search?q=' +
            encodeURI('衛斯理探案館天祥館'),
        },
        {
          type: 'uri',
          label: '松山星球',
          uri: 'https://www.google.com/search?q=' + encodeURI('松山星球'),
        },
        {
          type: 'uri',
          label: '劇光燈',
          uri: 'https://www.google.com/search?q=' + encodeURI('劇光燈larp'),
        },
      ],
    },
    {
      thumbnailImageUrl:
        'https://gw.alicdn.com/imgextra/i4/TB1q5XqoCR26e4jSZFESuvwuXXa.jpg',
      title: 'Larp',
      text: '劇本店',
      actions: [
        {
          type: 'uri',
          label: '八天的日記',
          uri: 'https://www.google.com/search?q=' + encodeURI('八天的日記'),
        },
        {
          type: 'uri',
          label: 'JoKer LARP 沉浸式劇場',
          uri: 'https://www.google.com/search?q=' + encodeURI('joKerlarp'),
        },
        {
          type: 'uri',
          label: '從前從前劇本館',
          uri: 'https://www.google.com/search?q=' + encodeURI('從前從前劇本館'),
        },
      ],
    },
  ];
  const altText = '劇本店';
  await context.replyCarouselTemplate(altText, template);
}
