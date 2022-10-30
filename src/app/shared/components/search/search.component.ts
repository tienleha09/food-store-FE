import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-search",
    templateUrl: "search.component.html"
})
export class SearchComponent{
    searchText: string = '';

    @Output()
    searchTextChangeEvent: EventEmitter<string> = new EventEmitter<string>();
    
    onSearchTextChanged(){
        this.searchTextChangeEvent.emit(this.searchText);
    }
}