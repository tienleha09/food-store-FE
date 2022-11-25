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
    constructor(public productsRepo: ProductRepository){  
         
        
    }

    get products(){
        return this.productsRepo.getProducts();
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
   
}