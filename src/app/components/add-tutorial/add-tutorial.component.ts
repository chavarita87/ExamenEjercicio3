import { Component } from '@angular/core';
import { Character } from 'src/app/models/tutorial.model';
import { Services } from 'src/app/models/querys.service.marvel.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
    selector: 'app-add-tutorial',
    templateUrl: './add-tutorial.component.html',
    styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent {
    tutorial: Character = {
        id: '',
        name: '',
        description: ''
    };
    servicesMarvel?: Services[];
    submitted = false;

    constructor(private tutorialService: TutorialService) { }
    
     ngOnInit(): void {
    this.getAllRows();
  }

    saveTutorial(): void {
        const data = {
            title: this.tutorial.name,
            description: this.tutorial.description
        };

    }

    getAllRows(): void {
        this.tutorialService.findAllServices().subscribe({
            next: (data: Services[]) => {
                this.servicesMarvel = data;
                console.log(data);
            },
            error: (e) => console.error(e)
        });
    }

    newTutorial(): void {
        this.submitted = false;
        this.tutorial = {
            id: '',
            name: '',
            description: ''
        };
    }
}
