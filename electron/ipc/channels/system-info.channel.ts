import { IpcMainEvent } from "electron/main";
import { IIpcChannel } from "../ipc-channel.interface";
import { IpcRequest } from "../ipc-request";
import {execSync} from "child_process";

export class SystemInfoChannel implements IIpcChannel{
    getName(): string {
        return 'system-info';
    }

    handle(event: IpcMainEvent, request: IpcRequest): void {
        if(!request.responseChannel){
            request.responseChannel = `${this.getName()}_response`;
        }

        event.sender.send(request.responseChannel, { kernel: execSync('uname -a').toString() });
    }
}