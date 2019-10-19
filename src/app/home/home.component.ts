import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  translated_data: Word[] = data;
  selected_word: Word;
  current_time: number;
  filtered_data: Word[];
  search_text: string;
  constructor() { }

  ngOnInit() {
    this.generateGradient();
    this.current_time = Date.now();
    this.selected_word = data[Math.floor(Math.random() * data.length)];
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
    this.filtered_data = this.translated_data.filter(
      datum => (datum.english.indexOf(filter_text) > -1 || datum.tamil.indexOf(filter_text) > -1 || datum.french.indexOf(filter_text) > -1));

  }
}
