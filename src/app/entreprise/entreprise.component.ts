import { Component, OnInit, ViewChild } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { updateBinding } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})


export class EntrepriseComponent implements OnInit {
  datas: any;
  public id: any ;
  public name: string;
  public raisonSocial: string;
  nameupdate: string;
  raisonSocialupdate: string;
  idupdate;
  mesg = "";
  @ViewChild('f') form: { reset: () => void; }
 
 
  
  
  constructor(public service: InMemoryDataService, private modalService: NgbModal) { }
 
  
  ngOnInit() {
    this.service.getEntrepriseList().subscribe(res => {
      this.datas = res.json();
      console.log(this.datas)
    });

  }
  add() {
    if (!this.raisonSocial || !this.name) {
      console.log("err");
      this.mesg = "vide";
      return false;
      
    }
    const sot = {
      name: this.name,
      raisonSocial: this.raisonSocial
    }
    this.service.addEntrepriseList(sot).subscribe(res => {
      alert("Entreprise ajouter avec succees");
     
      this.service.getEntrepriseList().subscribe(res => {
        this.datas = res.json();
        this.form.reset();
    
      });

     

    });

  

  }


            deleteEntreprise(id) {
              this.service.deleteEntreprise(id).subscribe(res => {
                alert("ok");
                this.service.getEntrepriseList().subscribe(res => {
                  this.datas = res.json();
                });
              });
  }
  
  open(content) {
    this.modalService.open(content);
  }
 
  update(){
    console.log(this.nameupdate);
    console.log(this.raisonSocialupdate);

   var obj = {
    name : this.nameupdate,
    raisonSocial: this.raisonSocialupdate
    }

    this.service.updateEntreprise(this.idupdate,obj).subscribe( res => {
      this.service.getEntrepriseList().subscribe(res => {
        this.datas = res.json();
      });
    });
 
   }
   getid(id){
     this.idupdate=id;
   }
}

