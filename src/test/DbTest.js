"use strict";
exports.__esModule = true;
var UserCredentialsDBAccess_1 = require("../Authorization/UserCredentialsDBAccess");
var Model_1 = require("../Shared/Model");
var UsersDBAccess_1 = require("../User/UsersDBAccess");
var DbTest = /** @class */ (function () {
    function DbTest() {
        this.dbAccess = new UserCredentialsDBAccess_1.UserCredentialsDBAccess();
        this.userDbAccess = new UsersDBAccess_1.UsersDBAccess();
    }
    return DbTest;
}());
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
    workingPosition: Model_1.WorkingPosition.JUNIOR
});
