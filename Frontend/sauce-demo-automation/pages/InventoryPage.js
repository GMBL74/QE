class InventoryPage {
  constructor(page) {
    this.page = page;
    // selectores migrados a atributos data-test (más estables que las clases CSS)
    this.title = '[data-test="title"]';
    this.inventoryItems = '[data-test="inventory-item"]';
    this.cartBadge = '[data-test="cart-badge"]';
    this.cartLink = '[data-test="shopping-cart-link"]';
  }

  async getTitle() {
    return await this.page.textContent(this.title);
  }

  async addProductToCartByIndex(index) {
    const buttons = this.page.locator(".inventory_item .btn_inventory");
    await buttons.nth(index).click();
  }

  async getCartCount() {
    const badge = this.page.locator(this.cartBadge);
    if (await badge.isVisible()) {
      return await badge.textContent();
    }
    return "0";
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = InventoryPage;
