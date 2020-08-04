import TelegramBot from "node-telegram-bot-api";
import TgCommand from "../model/tgCommand.model";
import commandList from "./tg_CommandList";
import config from '../config.json'
import tgResult from "../model/tgFunc.model";

const getHelp = async (msg: TelegramBot.Message, match: RegExpExecArray): Promise<tgResult> => {
    const result: string = commandList
        .filter((command: TgCommand) => command.public)
        .map((command: TgCommand) => `${command.command} : ${command.desc}`).join("\n");

    const serverVersion = `Server version: ${config.version}`;
    return {
        chatId: msg.chat.id,
        text: `*Command List* \n${result}\n${serverVersion}`,
        opts: { parse_mode: 'Markdown' }
    }
}

export default getHelp