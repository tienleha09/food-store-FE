import { Component, Input } from "@angular/core";

@Component({
    selector: "app-pagination",
    templateUrl: "pagination.component.html"
})
export class PaginationComponent{
    @Input() numberOfPages:number =3;
    itemsPerPage: number = 6;
    @Input() totalItems: number = 20;
    @Input() dataSource: object[] = [];
    public pages: number[] = [];
    public selectedPage: number = 1;
    constructor(){}

    ngOnInit(){//called after the input properties have been set
        for(let i =1; i<= this.numberOfPages;i++ ){
            this.pages.push(i);
        }
    }
    ngOnChange(){
        console.log(`${this.itemsPerPage} per page`);
    }

    next(){
        this.selectedPage ++;

    }
    prev(){}

    changePage(pageNumber: number){}
}