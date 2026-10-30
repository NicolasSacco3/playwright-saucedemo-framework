import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { loginAsStandardUser } from '../utils/loginHelper';

test('Agregar un producto al carrito', async ({ page }) => {

  
    const inventoryPage = new InventoryPage(page);


    await loginAsStandardUser(page);    


    await expect(inventoryPage.backpackButton).toBeVisible();

    await expect(inventoryPage.backpackButton).toBeEnabled();

    await expect(inventoryPage.backpackButton).toHaveAttribute(
    'data-test',
    'add-to-cart-sauce-labs-backpack'
    );

    await inventoryPage.addBackpackToCart();
    await expect(inventoryPage.backpackButton).toHaveCount(0);

    await expect(inventoryPage.removeBackpackButton)
    .toBeVisible();

    await expect(inventoryPage.header.cartBadge).toHaveText('1');

});
