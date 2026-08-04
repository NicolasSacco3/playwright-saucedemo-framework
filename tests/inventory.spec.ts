import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { loginAsStandardUser } from '../utils/loginHelper';

test('Agregar un producto al carrito', async ({ page }) => {

  
    const inventoryPage = new InventoryPage(page);


    await loginAsStandardUser(page);    


    await inventoryPage.addBackpackToCart();

    expect(await inventoryPage.getCartCount()).toBe("1");

});