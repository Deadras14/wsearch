import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  @Input() pages: Array<{ title: string, wordcount: string, snippet: string, pageid: string }> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
