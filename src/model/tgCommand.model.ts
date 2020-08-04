import TelegramBot = require("node-telegram-bot-api");
import tgResult from "./tgFunc.model";
export default interface TgCommand {
    path: RegExp,
    command: string,
    desc: string,
    btnText?: string,
    public: boolean,
    duplicate: boolean,
    func(msg: TelegramBot.Message, match?: RegExpExecArray | null): Promise<tgResult>
}