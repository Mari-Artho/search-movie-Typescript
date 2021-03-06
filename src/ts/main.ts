import { iService, Service } from "./models/iService";

// create new service instance to be used here by main.ts
let service: iService = new Service;

function logData(movieInfo: { Title: string; Director: string; Year: string; Poster:string; }): void{
  console.log(`Title: ${movieInfo.Title}, director: ${movieInfo.Director}, year: ${movieInfo.Year}, poster: ${movieInfo.Poster}`);
}

function useData(movieInfo: { Title: string; Director: string; Year: string;Poster:string }): void{
  //show title
  document.getElementById("title").innerText = movieInfo.Title;
  //show director's name
  document.getElementById("director").innerText = "Director is " +  movieInfo.Director;
  //show movie's year
  document.getElementById("year").innerText = movieInfo.Year;
  // //show poster image
  let showImg =  movieInfo.Poster;
  let imgPoster = document.getElementById("imgPoster");
  imgPoster.setAttribute("src", showImg);
}



function search (): void{
  let title = (<HTMLInputElement>document.getElementById("inputTitle")).value;
  service.getMovieData(title, useData);
}

let clickBtn =  document.getElementById("searchBtn").addEventListener("click", search);