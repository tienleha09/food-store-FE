import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SearchComponent } from "./components/search/search.component";


@NgModule({
    declarations:[SearchComponent],
    imports:[CommonModule, FormsModule],
    exports:[SearchComponent]
})
export class SharedModule{

}