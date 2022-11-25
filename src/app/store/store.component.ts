import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: 'app-store',
    templateUrl: 'store.component.html',
    
})
export class StoreComponent{
    searchKey : string = '';
    filteredProducts: Product[] = [];
    filteredCategories: string[] = [];
      
    constructor(private productRepo: ProductRepository, private cart: Cart ){}
    
    get products(): Product[]{
         return this.productRepo.getProducts();       
    }

    get categories(): string[]{
        return (this.searchKey == '') ? this.productRepo.getCategories() : this.filteredCategories;        
    }


    getProducts(category: string): Product[]{
        if(this.searchKey != '' && this.filteredProducts.length >0){
            return this.filteredProducts.filter(p => p.category == category);
        }
        return this.productRepo.getProducts(category) ;
    }

    doFilter(key: string){
        
        this.filteredProducts = [];
        this.filteredCategories = [];
        this.searchKey = key;
        this.products.forEach(p =>{
            if(p.name?.toLowerCase().includes(this.searchKey.toLowerCase()) ||
             p.category?.toLowerCase().includes(this.searchKey.toLowerCase()) || 
             p.description?.toLowerCase().includes(this.searchKey.toLowerCase())){
                this.filteredProducts.push(p);
            }
        })
        this.filteredCategories = this.filteredProducts.map(p =>p.category ?? "None")
                                                        .filter((c,index,array) =>(array.indexOf(c) == index))
                                                        .sort();
    }

    addToCart(product: Product){        
        this.cart.addLine(product);
    }
}