process.env.NTBA_FIX_319 = "1";
import TelegramBot from 'node-telegram-bot-api';
import config from './config.json';
import commandList from './tgBot_func/tg_CommandList';
import TgCommand from './model/tgCommand.model';
import tgResult from './model/tgFunc.model';

const bot = new TelegramBot(config.tg_Token, { polling: true });

commandList.forEach((command: TgCommand) => {
    if (!command.duplicate) {
        bot.onText(command.path, (msg, match) =>
            command.func(msg, match).then(({ chatId, text, opts }: tgResult) =>
                bot.sendMessage(chatId, text, opts)
            )
        )
    }
});
bot.on('message', async (msg: TelegramBot.Message) => {
    commandList
        .forEach((command: TgCommand) => {
            let btnText = command.btnText || '';
            if (btnText !== '' && msg.text?.toString().indexOf(btnText) === 0) {
                command.func(msg).then(({ chatId, text, opts }: tgResult) =>
                    bot.sendMessage(chatId, text, opts)
                )
            }
        })
});
bot.on('callback_query', async (callbackQuery: TelegramBot.CallbackQuery) => {
    const { action, data } = JSON.parse(callbackQuery?.data || '{action: "goError", data: true}');
    const msg: TelegramBot.Message | any = callbackQuery?.message;
    const opts: TelegramBot.EditMessageTextOptions = {
        chat_id: msg.chat.id,
        message_id: msg.message_id,
        parse_mode: 'Markdown',
    };
    switch (action) {
        case 'LikeThisBot':
            if (data) {
                bot.editMessageText(`${msg.text} \nGreat Thx`, opts)
            } else {
                bot.editMessageText(`${msg.text} \nOh noooo`, opts)
            }
            break;
        default:
            bot.editMessageText(`Can not solve ${action} with ${data}`, opts);
    }
});