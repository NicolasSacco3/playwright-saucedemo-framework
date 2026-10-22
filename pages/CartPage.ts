import { Page, Locator } from '@playwright/test';

export class CartPage {

    readonly page: Page;
    readonly backpackName: Locator;
    readonly removeButton: Locator;
    readonly cartItem: Locator; 

    constructor(page: Page) {
    this.page = page;
    this.backpackName = page.locator(
        '.cart_item .inventory_item_name'
    );
    this.removeButton = page.locator(
        '[data-test="remove-sauce-labs-backpack"]'
    );
    this.cartItem = page.locator('.cart_item');
        
    }

    async getProductName() {
        return await this.backpackName.textContent();
    }
    async removeBackpack() {
    await this.removeButton.click();
    }

    async getCartItemsCount() {
    return await this.cartItem.count();
}

}