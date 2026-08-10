import { Page } from '@playwright/test';

export class CheckoutPage {

  constructor(private page: Page) {}

  async startCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async completeInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    await this.page.locator('[data-test="continue"]').click();
  }

  async finishPurchase() {
    await this.page.locator('[data-test="finish"]').click();
  }

  getSuccessMessage() {
    return this.page.locator('[data-test="complete-header"]');
  }
  getErrorMessage(){
    return this.page.locator('[data-test="error"]');
  }

}