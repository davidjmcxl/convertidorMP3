import { YoutubeService } from './services/youtube.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public info:any[]=[]
  termino:string='';
  constructor(private youtubeService:YoutubeService){}
  title = 'appMusic';

  public date:Date= new Date;
  year!:number;



  ngOnInit(): void {
    this.year =this.date.getFullYear();

  }
  buscar(){
    this.youtubeService.getVideos(this.termino).subscribe((videos:any)=>{

      this.info=videos.items;
      console.log(this.info);
    })

  }
  download(id:string){

    this.youtubeService.downloadMp3(id).subscribe((res:any)=>{
      window.location.href=res.link;
      console.log(res);
    })

  }
}
