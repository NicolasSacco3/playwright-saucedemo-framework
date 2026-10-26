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

test('Login con usuario bloqueado', async ({ page, loginPage }) => {
    await loginPage.navigate();

    await loginPage.login(
        users.locked.username,
        users.locked.password
    );

    const errorMessage = loginPage.getErrorMessage();

    await expect(errorMessage).toBeVisible();

    await expect(errorMessage).toContainText(
        'Epic sadface: Sorry, this user has been locked out.'
    );
    await expect(page).not.toHaveURL(/inventory/);
});
