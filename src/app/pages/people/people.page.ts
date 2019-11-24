import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  pessoas: Observable<any>;

  constructor(private navController: NavController,
      private router: Router,
      private api: ApiService,
      ) { }

  ngOnInit() {
    this.pessoas = this.api.getPeoples();
    this.pessoas.subscribe(data => {
      console.log('my data: ', data);
    });
  }

  openDetails(pessoa) {
    // Both of these would work!
    // But the standard Router is recommended.
    // this.navController.navigateForward(`/tabs/films/42`);
    // this.router.navigateByUrl(`/tabs/films/42`);
    let split = pessoa.url.split('/');
    let pessoaId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/people/${pessoaId}`);
  }

  goToPeoples() {
    this.navController.navigateRoot(`/tabs/people`)
  }

}
