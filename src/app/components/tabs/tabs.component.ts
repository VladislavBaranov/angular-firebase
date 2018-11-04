import { Component, OnInit } from '@angular/core';

import { ContentService } from 'src/app/services/content.service';
import { TabLabelService } from 'src/app/services/tab-label.service';
import { TabStateService } from 'src/app/services/tab-state.service';
import { Label } from 'src/app/models/label';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  labels: Label[];
  state: number;
  content: Content;

  constructor(
    private contentService: ContentService,
    private tabStateService: TabStateService,
    private tabLabelService: TabLabelService) { }

  ngOnInit() {
    this.getState();
  }

  getLables() {
    this.tabLabelService.load().subscribe(
      labels => {
        this.labels = labels;
        let label = labels[this.state];
        this.getContent(label.contentId);
        this.saveState(this.state);
      }
    )
  }

  getState() {
    this.tabStateService.load().subscribe(
      state => {
        this.state = state;
        this.getLables();
      }
    )
  }

  labelChange(tabIndex: number) {
    let label = this.labels[tabIndex];
    this.saveState(tabIndex);
    this.getContent(label.contentId);
  }

  saveState(state: number) {
    this.tabStateService.save(state);
  }

  getContent(contentId: number) {
    this.contentService.load(contentId).subscribe(
      content => {
        this.content = content;
      }
    )
  }
}
