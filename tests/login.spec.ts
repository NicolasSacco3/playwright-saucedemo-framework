import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../fixtures/users';
import { InventoryPage } from '../pages/InventoryPage';

test('Login exitoso', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();

    await loginPage.login(
    users.standard.username,
    users.standard.password
    );

    await expect(page).toHaveURL(/inventory/);

    expect(await inventoryPage.getTitleText()).toBe("Products");

});
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