import TelegramBot = require("node-telegram-bot-api");
export default interface tgResult {
    chatId: TelegramBot.Chat["id"],
    text: string,
    opts: any
}