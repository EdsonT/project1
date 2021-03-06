import { Component, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector:'app-recipe-list',
    templateUrl:'./recipeList.component.html',
    styleUrls:['./recipeList.component.css']
})
export class RecipeListComponent{
 recipes: Recipe[]=[
    new Recipe('A test Recipe','This is simply a test','https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F06%2Fmain%2Frigatoni-kale-pesto-1708p12.jpg%3Fitok%3DZRmUV5oK&w=1000&q=85'),
    new Recipe('Another Recipe','This is another test','https://www.ndtv.com/cooks/images/Vegetarian%20Khow%20Suey.jpg?downsize=650:400&output-quality=70&output-format=webp')
];
    @Output() recipeListEvent = new EventEmitter<Recipe>();
    
    onItemClick(itemClicked:Recipe){
    this.recipeListEvent.emit(itemClicked);
    console.log(this.recipeListEvent);
    }

}