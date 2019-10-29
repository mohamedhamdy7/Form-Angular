import { Component} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  data = [];
  item = {
    id: '',
    name: '',
    address: ''
  };
  save() {
    console.log(this.item);
    if (this.item.id) {
      //update the current row
      this.data = this.data.map((it) => {
        if (it.id === this.item.id) {
          it = this.item;
        }
        return it ;
      });
    }
    else {
      //save new row
      this.data = [
          ...this.data,
        {
          id: this.data.length + 1,
          name: this.item.name,
          address: this.item.address
        }
      ];
    }
    console.log(this.data);
    //clear from item
    this.item = {
      id: '',
      name: '',
      address: ''
  };
  }
  OnDelete(d) {
    debugger;
    this.data = this.data.filter(obj => obj.id !== d.id);
  }

  showForEdit(item) {
    this.item = item;
  }

}
