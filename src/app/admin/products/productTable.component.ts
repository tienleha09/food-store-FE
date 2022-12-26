import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "src/app/model/product.model";
import { ProductRepository } from "src/app/model/product.repository";

@Component({
    selector: "app-product-table-admin",
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent{
    @Input() showEditor: boolean = false;
    @Output() showEditorEvent = new EventEmitter();
    dismissModalName: string = '';
    itemsPerPage: number = 10;
    currentPageNumber: number = 1;
    pageToDisplay: number = 3;
    pages : number[] = [];
    atFirstPage: boolean = true;
    atLastPage: boolean = false;
 

    constructor(public productsRepo: ProductRepository){

    }

    ngOnInit(){
        this.createPages(this.pageToDisplay);
    }


    get products(): Product[]{
        let skippedItems = (this.currentPageNumber -1 ) * this.itemsPerPage;
        return this.productsRepo.getProducts().slice(skippedItems, this.itemsPerPage +skippedItems);
    }

    getMaxPageIndex(): number{
        console.log(this.productsRepo.getProducts().length);
        return Math.ceil(this.productsRepo.getProducts().length/this.itemsPerPage);
    }

    update(product: Product){
        this.showEditor = true;
        this.showEditorEvent.emit({showEditor:this.showEditor, mode: "edit", product: product});
    }

    delete(id?: number){
        if(id!=null){
            this.productsRepo.deleteProduct(id);
            this.dismissModalName = 'modal';
        }
    }

    addNew(){
        this.showEditor = true;
        this.showEditorEvent.emit({showEditor:this.showEditor, mode: "create", product: new Product()});
    }

    /**pagination implementation:
     * - update # of items/page when Items/Page change, reset page number to 1
     * -when Page change: update # of items based on skipped items, check for the last and first page
    **/
   
    changePageSize(newSize: number){
        this.itemsPerPage =Number(newSize);
        this.changePage(1);
    }

    changePage(pageNumber: number){
        this.currentPageNumber = pageNumber;
        this.checkForFirstLast();
    }

    createPages(numberOfPages: number): number[]{
        for(let i= 1; i<=numberOfPages; i++){
            this.pages.push(i);
        }
        return this.pages;
    }

    goPrev(){
        this.currentPageNumber = this.currentPageNumber -1;
        this.changePage(this.currentPageNumber);
    }

    goNext(){
        this.currentPageNumber = this.currentPageNumber +1;
        this.changePage(this.currentPageNumber);
    }

    checkForFirstLast(){
        
        this.atLastPage = this.currentPageNumber == this.getMaxPageIndex();
        this.atFirstPage = this.currentPageNumber == 1;
        
    }
}