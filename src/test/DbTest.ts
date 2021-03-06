import { UserCredentialsDBAccess } from '../Authorization/UserCredentialsDBAccess'
import { WorkingPosition } from '../Shared/Model'
import { UsersDBAccess } from '../User/UsersDBAccess'

class DbTest {
    public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess()
    public userDbAccess: UsersDBAccess = new UsersDBAccess()
}

/*
new DbTest().dbAccess.putUserCredential({
    username: 'user1',
    password: 'password1',
    accessRights: [1,2,3]
})*/

new DbTest().userDbAccess.putUser({
    age: 30,
    email: 'some@email.com',
    id: 'asd123123',
    name: 'John Abc',
    workingPosition: WorkingPosition.JUNIOR
})