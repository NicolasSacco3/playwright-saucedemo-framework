
import { Page, Locator } from '@playwright/test';
import { HeaderComponent } from '../components/HeaderComponent';

export class InventoryPage {
    readonly page: Page;
    readonly title: Locator;
    readonly backpackButton: Locator;
    readonly header: HeaderComponent;
    readonly removeBackpackButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('[data-test="title"]');
        this.backpackButton = page.locator(
            '[data-test="add-to-cart-sauce-labs-backpack"]'
        );
        this.header = new HeaderComponent(page);
        this.removeBackpackButton = page.locator(
        '[data-test="remove-sauce-labs-backpack"]');
    }

    async getTitleText() {
        return await this.title.textContent();
    }

    async addBackpackToCart() {
        await this.backpackButton.click();
    }
}
