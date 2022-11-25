import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "src/app/model/product.model";
import { ProductRepository } from "src/app/model/product.repository";

@Component({
    selector:"app-product-editor-admin",
    templateUrl: "productEditor.component.html"
})
export class ProductEditorComponent{
    @Input() product: Product = new Product();
    @Input() mode: string = 'create';
    @Output() closeEditorEvent = new EventEmitter();
    constructor(private productRepo: ProductRepository){}

    saveProduct(){
        this.productRepo.saveProduct(this.product);
        this.clearForm();
        this.closeEditorEvent.emit(false);
    }

    clearForm(){
        this.product = new Product();
    }

    cancel(){
        this.closeEditorEvent.emit(false);
    }

}