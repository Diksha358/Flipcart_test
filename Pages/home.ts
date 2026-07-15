/*import {Page} from '@playwright/test';

export class HomePage {
  
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get searchInput() {
        return this.page.getByPlaceholder('Search for Products, Brands and More');}
}
    */import { Page, Locator } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly searchInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput =page.getByTitle('Search for Products, Brands and More');
        //this.searchInput = page.getByPlaceholder('Search for Products, Brands and More');
    }
}  
