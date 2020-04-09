export class Marcador {

  public lat: number; 
  public lng: number;
  public titulo = "No title";
  public desc = "No description";

  constructor(lat: number,  lng: number) {
    this.lat = lat;
    this.lng = lng;  
  }

}