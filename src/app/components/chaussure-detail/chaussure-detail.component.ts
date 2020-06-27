import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Chaussure } from 'src/app/models/chaussure';

@Component({
  selector: 'app-chaussure-detail',
  templateUrl: './chaussure-detail.component.html',
  styleUrls: ['./chaussure-detail.component.css']
})
export class ChaussureDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ChaussureService: ChaussureService) { }

  chaussure: Chaussure;
  isloading: boolean;

  ngOnInit(): void {

    // METHODE SERVEUR BACK END POUR AFFICHER LA CHAUSSURE SELON SON ID
    this.isloading = true;
    this.ChaussureService.getOneChaussure(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe((data: Chaussure) => {
      this.chaussure = data;
      this.isloading = false;
    });
  }

}
