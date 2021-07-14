import { IncomingMessage, ServerResponse } from "http";
import { HTTP_CODES, HTTP_METHODS } from "../Shared/Model";
import { UsersDBAccess } from "../User/UsersDBAccess";
import { BaseRequestHandler } from "./BaseRequestHandler";
import { Utils } from "./Utils";

export class UsersHandler extends BaseRequestHandler {

    private usersDBAccess: UsersDBAccess = new UsersDBAccess()

    public constructor(req: IncomingMessage, res: ServerResponse) {
        super(req,res)
    }

    async handleRequest() :  Promise<void> {
        switch (this.req.method) {
            case HTTP_METHODS.GET:
                await this.handletGet()
                break;
            default:
                this.handleNotFound()
                break;
        }
    }

    private async handletGet() {
        const parsedUrl = Utils.getUrlParameters(this.req.url)
        const a = 1
        throw ''
    }


}