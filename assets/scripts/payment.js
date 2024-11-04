import { waitForText } from '../../waitFoText.js'
import users from '../db/db.json' with {type: "json"}
import * as fs from 'fs'

export async function topUpBalance(bot, msg) {
    const user = users.find(user => user.username === msg.from.username);

    console.log(user);
    await bot.sendMessage(msg.message.chat.id, "Пришлите мне сумму на которую хотите пополнить");
    const newBalance = await waitForText(bot, msg.message.chat.id);

    user.balance += Number(newBalance);

    fs.writeFileSync("./assets/db/db.json", JSON.stringify(users, null, '\t'));

    await bot.sendMessage(msg.message.chat.id, `Вы успешно пополнили баланс теперь ваш баланс составляет ${user.balance}`)
}

export async function withdrawBalance(bot, msg, amount){
    const user = users.find(user => user.username === msg.from.username)

    console.log(user)

    if (user.balance < amount){
        return await bot.sendMessage(msg.message.chat.id, "У вас недостаточно средств пополните балнс")
    }

    user.balance -= amount

    fs.writeFileSync("./assets/db/db.json", JSON.stringify(users, null, '\t'))
    await bot.sendMessage(msg.message.chat.id, "Спасибо за покупку")
}