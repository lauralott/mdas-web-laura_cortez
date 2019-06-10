import { Component } from '@angular/core';
import { PokefavAdderService } from '../services/pokefav-adder.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private favAdder:PokefavAdderService){}

  favorite(form){
    this.favAdder.add(form.value.pokename, form.value.userId)
    .subscribe(result => alert(result),
      err => alert(err));
  }


}
