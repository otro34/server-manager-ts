import { Account, SessionToken, TokenGenerator } from "../Server/Model";
import { SessionTokenDBAccess } from "./SessionTokenDBAccess";
import { UserCredentialsDBAccess } from "./UserCredentialsDBAccess";

export class Authorizer implements TokenGenerator {

    private userCredDBAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess()
    private sesionTokenDBAccess: SessionTokenDBAccess = new SessionTokenDBAccess()

    async generateToken(account: Account): Promise<SessionToken | undefined> {
        const resultAccount = await this.userCredDBAccess.getUserCredential(account.username, account.password)

        if (resultAccount) {
            const token: SessionToken = {
                accessRights: resultAccount.accessRights,
                expirationTime: this.generateExpirationTime(),
                username: resultAccount.username,
                tokenId: this.generateRandomTokenId(),
                valid: true
            }
            await this.sesionTokenDBAccess.storeSessionToken(token)
            return token
        } else {
            return undefined
        }
        
    }

    private generateExpirationTime() {
        return new Date(Date.now() + 60 * 60 * 1000)
    }

    private generateRandomTokenId() {
        return Math.random().toString(36).slice(2)
    }

}