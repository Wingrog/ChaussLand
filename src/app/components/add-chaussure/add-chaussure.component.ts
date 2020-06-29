import { Component, OnInit } from '@angular/core';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chaussure } from 'src/app/models/chaussure';

@Component({
  selector: 'app-add-chaussure',
  templateUrl: './add-chaussure.component.html',
  styleUrls: ['./add-chaussure.component.css']
})
export class AddChaussureComponent implements OnInit {

  constructor(private chaussureService: ChaussureService, private router: Router, private toastr: ToastrService) { }


  chaussure = new Chaussure();

  // LE SELECT POUR LE FORMULAIRE
  typeChaussure = ['Sport', 'Ville', 'Football'];
  marques = ['Addidas', 'Nike', 'Puma'];

  isLoading: boolean;

  ngOnInit(): void {
  }


  // ENVOI DES DONNEES SUR SERVEUR BACK END
  submitChaussure(): void {
    this.isLoading = true;
    this.chaussureService.addChaussure(this.chaussure).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/chaussure']); // Redirection de l'utilisateur
      this.toastr.success("La chaussure a bien été ajoutée !"); // On affiche une notification
    });
  }
}
