import { Page,  Locator } from '@playwright/test';

export class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  constructor(private page: Page) {
  this.usernameInput = page.locator('#user-name');
  this.passwordInput = page.locator('#password');
  }

    async getCurrentURL() {
      
    return this.page.url();
    }
     async navigate() {
      await this.page.goto('/');
    }
   async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.page.locator('#login-button').click();
}
   getErrorMessage() {
    return this.page.locator('[data-test="error"]');
}
}