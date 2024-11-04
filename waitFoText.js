export async function waitForText(bot, chatId) {
    return new Promise((resolve, reject) => {
        const onMessage = (msg) => {
            if (msg.chat.id === chatId && msg.text) {
                bot.removeListener('message', onMessage);
                resolve(msg.text);
            }
        };

        bot.on('message', onMessage); 

        setTimeout(() => {
            bot.removeListener('message', onMessage);
            reject(new Error('Timeout waiting for text'));
        }, 60000); 
    });
}