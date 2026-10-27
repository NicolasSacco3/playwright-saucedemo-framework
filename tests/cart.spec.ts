import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { loginAsStandardUser } from '../utils/loginHelper';

test('Verificar producto agregado al carrito', async ({ page }) => {

  
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginAsStandardUser(page);

    await inventoryPage.addBackpackToCart();

    await inventoryPage.header.openCart();

    await expect(cartPage.backpackName)
    .toHaveText("Sauce Labs Backpack");

});