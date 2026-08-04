import { Page, Locator } from '@playwright/test';

export class InventoryPage {

    readonly page: Page;
    readonly title: Locator;
    readonly backpackButton: Locator;
    readonly cartBadge: Locator;
    readonly shoppingCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('[data-test="title"]');
        this.backpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    }
async getTitleText() {
    return await this.title.textContent();
}
async addBackpackToCart() {
    await this.backpackButton.click();
}

async getCartCount() {
    return await this.cartBadge.textContent();
}
async openCart() {
    await this.shoppingCart.click();
}
}
