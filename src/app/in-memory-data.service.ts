import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  del(id: any): any {
    throw new Error("Method not implemented.");
  }
  

  constructor(public http:Http) { }
 /* getdata(){
    return this.http.get('http://localhost:18080/Entreprisessi-web/restful/Entreprise/getall');

  }*/

  getEntrepriseList(){
    return this.http.get("http://localhost:18080/Entreprisessi-web/restful/Entreprise/getall");
    
  }
  addEntrepriseList(sot){
    return this.http.post('http://localhost:18080/Entreprisessi-web/restful/Entreprise/ajoutentreprise',sot);
    
  }

  deleteEntreprise(id){
    return this.http.delete(`http://localhost:18080/Entreprisessi-web/restful/Entreprise/delentreprise/${id}`);
  }

updateEntreprise(id, obj){
  
  return this.http.put(`http://localhost:18080/Entreprisessi-web/restful/Entreprise/updateentreprise/${id}`,obj );

}


}