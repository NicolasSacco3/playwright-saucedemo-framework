import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../fixtures/users';

export async function loginAsStandardUser(page: Page) {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        users.standard.username,
        users.standard.password
    );

}
