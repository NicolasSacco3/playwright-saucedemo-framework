
import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
    readonly page: Page;
    readonly cartBadge: Locator;
    readonly shoppingCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.locator(
            '[data-test="shopping-cart-badge"]'
        );
        this.shoppingCart = page.locator(
            '[data-test="shopping-cart-link"]'
        );
    }

    async getCartCount() {
        return await this.cartBadge.textContent();
    }

    async openCart() {
        await this.shoppingCart.click();
    }
}
