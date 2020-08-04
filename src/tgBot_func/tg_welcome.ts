import TelegramBot from "node-telegram-bot-api";
import tgResult from "../model/tgFunc.model";
const welcome = async (msg: TelegramBot.Message, match: RegExpExecArray) : Promise<tgResult>=> {
    let welcomeMsg = `Welcome to Easy tg Bot\n`;
    welcomeMsg += `\n`;
    // https://apps.timwhitlock.info/emoji/tables/unicode
    return {
        chatId: msg.chat.id,
        text: welcomeMsg,
        opts: {
            parse_mode: 'Markdown',
            "reply_markup": {
                "keyboard": [
                    ["Start \t🚀", "Help \t🙏"],
                ]
            }

        }
    }
}
export default welcome