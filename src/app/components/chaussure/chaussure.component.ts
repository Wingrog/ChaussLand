import { Component, OnInit } from '@angular/core';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Chaussure } from 'src/app/models/chaussure';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chaussure',
  templateUrl: './chaussure.component.html',
  styleUrls: ['./chaussure.component.css']
})
export class ChaussureComponent implements OnInit {

  chaussures: Chaussure[];
  isLoading: boolean;


  constructor(private chaussureService: ChaussureService, private toastr: ToastrService) { }

  ngOnInit(): void {

    //Methode GET Back End pour récupérer toutes les chaussures

    this.isLoading = true;
    this.chaussureService.getChaussures().subscribe((data: Chaussure[]) => {
      this.chaussures = data;
      this.isLoading = false;
    });

    console.log("Ici je demande mes données");
    this.chaussureService.getChaussures().subscribe(data => {
      this.chaussures = data;
      console.log("C'est ok, je récupère les données !");
    })
  }


  deleteChaussure(id: number): void {
    this.isLoading = true;
    this.chaussureService.deleteChaussure(id).subscribe(then => {
      this.chaussureService.getChaussures().subscribe((data: Chaussure[]) => {
        this.chaussures = data;
        this.isLoading = false;
        this.toastr.error("La chaussure à été supprimée !"); //on affiche la notification
      });
    })
  }





}
