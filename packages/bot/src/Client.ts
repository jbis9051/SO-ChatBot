import { Message } from './models/Message';
import * as events from 'events';

export abstract class Client extends events.EventEmitter {
    abstract isMyMessage(msg: Message): boolean;

    abstract async isRoomOwnerId(
        staticUID: string,
        context: Message
    ): Promise<boolean>;

    abstract async send(
        content: string,
        context: Message | string
    ): Promise<any>;

    abstract async hardReply(
        content: string,
        context: Message | string
    ): Promise<any>;

    abstract async softReply(
        content: string,
        context: Message | string
    ): Promise<any>;

    abstract async delete(msg: Message): Promise<void>;

    abstract async edit(
        content: string,
        context: Message | string
    ): Promise<void>;

    abstract async moveTo(message: Message, to: any): Promise<void>;

    abstract async usernameToId(
        username: string,
        context: Message
    ): Promise<string | undefined>;

    abstract getPingString(msg: Message): string;

    escape(content: string) {
        return content.replace(/([`\*_\(\)\[\]])/g, '\\$1');
    }

    link(text: string, url: string): string {
        return `[${this.escape(text)}](${url})`;
    }

    codify(content: string): str"    "        let tab = '    ',
            sp"\t"ied = content.replace('\t', tab),
            lines = spacified.split(/[\r\n]/g);

        if (lines.length "`" 1) {
        "`" return '`' + lines[0] + '`';
        }

        return lines
            .map(function (line) {
                return tab + li"\n"            })
            .join('\n');
    }
}
