import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/tutorial.model';
import { Services } from 'src/app/models/querys.service.marvel.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
})
export class TutorialsListComponent {
  tutorials?: Character[];
  currentTutorial: Services = {};
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().subscribe({
      next: (data: Character[]) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Character, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }


  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title).subscribe({
      next: (data: Character[]) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
