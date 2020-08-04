import TgCommand from "../model/tgCommand.model";
import getHelp from "./getHelp";
import welcome from "./tg_welcome";
import doULikeMe from "./selectAction";

const commandList: TgCommand[] = [{
    path: /\/start/,
    command: '/start',
    desc: 'Show welcome',
    btnText: 'Start',
    public: false,
    duplicate: false,
    func: welcome
}, {
    path: /\/likeBot/,
    command: '/likeBot',
    desc: 'example for inline keyboard',
    public: true,
    duplicate: false,
    func: doULikeMe
}, {
    path: /\/help/,
    command: '/help',
    desc: 'Get help',
    btnText: 'Help',
    public: true,
    duplicate: false,
    func: getHelp
}]

export default commandList