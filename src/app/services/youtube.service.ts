import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient) {

  }

  getVideos(query:string){
    const base_urlY=environment.baseUrlYoutube;
    const keyYoutube=environment.keyYoutube;
    return this.http.get(base_urlY,{
      params:{
        part:'snippet',
        maxResults:'12',
        key:`${keyYoutube}`,
        q:query,
        type:'video'
      }
    })
  }
  downloadMp3(id:string){
    const base_urlYMp3=environment.baseUrlYoutubeMp3;
    const key_mp3=environment.xrapidapikey;
    return this.http.get(`${base_urlYMp3}?id=${id}`,
    {
      headers:{
          'x-rapidapi-key': key_mp3,
          'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com'
      }
     } )

  }
}
