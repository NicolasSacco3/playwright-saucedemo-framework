import { test, expect } from '@playwright/test';
import { loginAsStandardUser } from '../utils/loginHelper';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Compra completa de un producto', async ({ page }) => {

    const inventoryPage = new InventoryPage(page);

    const checkoutPage = new CheckoutPage(page);

    await loginAsStandardUser(page);

    await inventoryPage.addBackpackToCart();

    await inventoryPage.openCart();

    await checkoutPage.startCheckout();

    await checkoutPage.completeInformation(
        'Nicolas',
        'Sacco',
        '1832'
    );

    await checkoutPage.finishPurchase();

    await expect(
        checkoutPage.getSuccessMessage()
    ).toHaveText('Thank you for your order!');

});
test('Compra sin completar el nombre ', async ({ page }) => {

    const inventoryPage = new InventoryPage(page);

    const checkoutPage = new CheckoutPage(page);

    await loginAsStandardUser(page);

    await inventoryPage.addBackpackToCart();

    await inventoryPage.openCart();

    await checkoutPage.startCheckout();

    await checkoutPage.completeInformation(
        '',
        'Sacco',
        '1832'
    );

    await expect(
        checkoutPage.getErrorMessage()
    ).toContainText('First Name is required');

});
