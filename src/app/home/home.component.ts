import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  translated_data = data;
  selected_word: any;
  current_time: number;
  filtered_data: any[];
  search_text: string;
  keys_list: any[];
  constructor() { }

  ngOnInit() {
    this.generateGradient();
    setInterval(() => {
      this.current_time = Date.now();
    }, 1000);
    this.getNewWord();
  }

  generateGradient() {

    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

    function populate(a) {
      for (var i = 0; i < 6; i++) {
        var x = Math.round(Math.random() * 14);
        var y = hexValues[x];
        a += y;
      }
      return a;
    }
    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var angle = Math.round(Math.random() * 360);
    var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
    document.getElementById("container").style.background = gradient;
  }
  onSearchChange(filter_text) {
    this.search_text = filter_text;
    let filteredList = [];
    if (this.translated_data.length > 0) {
      filter_text = filter_text.toLowerCase();
      this.translated_data.forEach(item => {
        let propValueList = Object.values(item);
        for (let i = 0; i < propValueList.length; i++) {
          if (propValueList[i]) {
            if (propValueList[i].toString().toLowerCase().indexOf(filter_text) > -1) {
              filteredList.push(item);
              break;
            }
          }
        }
      });
    }
    this.filtered_data = filteredList;
  }

  getNewWord() {
    this.selected_word = data[Math.floor(Math.random() * data.length)];
    this.keys_list = Object.keys(this.selected_word);
  }
}
