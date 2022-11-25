import { Component, Input } from "@angular/core";
import { Product } from "src/app/model/product.model";

@Component({
    templateUrl: 'productDisplay.component.html'
})
export class ProductDisplayComponent{
    @Input()editingData: any;
    showEditor: boolean = false;
    mode: string = '';
    product: Product = new Product();

    getEditorData(event: any){
        this.showEditor = event.showEditor;
        this.mode = event.mode;
        Object.assign(this.product, event.product);
    }
}