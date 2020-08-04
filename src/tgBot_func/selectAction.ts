import TelegramBot from "node-telegram-bot-api";
import tgResult from "../model/tgFunc.model";
const doULikeMe = async (msg: TelegramBot.Message, match: RegExpExecArray): Promise<tgResult> => {
    const title = "Do you like this bot?";
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: 'Yes I like it',
                    callback_data: JSON.stringify({
                        'action': 'LikeThisBot',
                        'data': true
                    })
                },
                {
                    text: 'Maybe',
                    callback_data: JSON.stringify({
                        'action': 'LikeThisBot',
                        'data': false
                    })
                }
                ]
            ]
        }
    };
    return {
        chatId: msg.chat.id,
        text: title,
        opts: opts
    }
}
export default doULikeMe