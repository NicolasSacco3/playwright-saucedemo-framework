import { test, expect } from '../support/fixtures';
import { users } from '../fixtures/users';

const loginUsers = [
    users.standard,
    users.problem
];

for (const user of loginUsers) {
    test(
        `Login exitoso - ${user.username}`,
        {
            tag: '@smoke'
        },
        async ({ page, loginPage }) => {
            await loginPage.navigate();

            await loginPage.login(
                user.username,
                user.password
            );

            await expect(page).toHaveURL(/inventory/);
        }
    );

}

test('Login con usuario bloqueado', async ({ loginPage }) => {
    await loginPage.navigate();

    await loginPage.login(
        users.locked.username,
        users.locked.password
    );

    await expect(
        loginPage.getErrorMessage()
    ).toContainText(
        'Epic sadface: Sorry, this user has been locked out.'
    );
});