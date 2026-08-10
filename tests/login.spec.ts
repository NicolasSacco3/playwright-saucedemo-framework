import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../fixtures/users';
import { InventoryPage } from '../pages/InventoryPage';

const loginUsers = [
    users.standard,
    users.problem
];

for (const user of loginUsers) {

    test(`Login exitoso - ${user.username}`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            user.username,
            user.password
        );

        await expect(page).toHaveURL(/inventory/);
    });
}
test('Login con usuario bloqueado', async ({ page }) => {

    const loginPage = new LoginPage(page);

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