enum Genre {
    SF,
    Crimi,
    Horror,
    Comedy,
    Drama,
    Documentary,
    Children
}
abstract class Media{
  title:string;
  author: string;
  genre: Genre;
  publisher: string;
  image: String;
  rating: number;
  constructor(title:string,author:string,genre:Genre,publisher:string,image:string,rating:number){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.publisher = publisher;
    this.image = image;
    this.rating = rating;
  }
  getTitle(){
    return this.title;
  }
  getAuthor(){
    return this.author;
  }
  getGenre(){
    return this.genre;
  }
  getPublisher(){
    return this.publisher;
  }
  getImage(){
    return this.image;
  }
  getRating(){
    return this.rating;
  }
  render(){

  }
}

class Cd extends Media{
  durationOfMinutes:number;
  constructor(title:string,author:string,genre:Genre,publisher:string,image:string,rating:number,durationOfMinutes:number){
    super(title,author,genre,publisher,image,rating);
    this.durationOfMinutes = durationOfMinutes;
  }
  render():string{
    let bootstrapTag:string = '<div class=\"row cdStyle\">';
      bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<img class=\"img-responsive\" src=\"'+ super.getImage()+ '\"'+ '>';
      bootstrapTag += '</div>';
      bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<h1>' + super.getTitle() + '</h1>';
        bootstrapTag += '<ul>';
        bootstrapTag += '<li>' + 'Autor: ' + super.getAuthor() + '</li>';
        bootstrapTag += '<li>' + 'Genre: ' + super.getGenre() + '</li>';
        bootstrapTag += '<li>' + 'Publisher: '+ super.getPublisher() + '</li>';
        bootstrapTag += '<li>' + 'Duration: ' + this.durationOfMinutes + '</li>';
        bootstrapTag += '<li>' + 'Rating: ' + super.getRating() + '</li>';
        bootstrapTag += '</ul>';
      bootstrapTag += '</div>';
    bootstrapTag += '</div>';
    return bootstrapTag;
  }
}
class Book extends Media{
  weight:number;
  constructor(title:string,author:string,genre:Genre,publisher:string,image:string,rating:number,weight:number){
    super(title,author,genre,publisher,image,rating);
    this.weight = weight;
  }
  render():string{
  let bootstrapTag:string = '<div class=\"row bookStyle\">';
      bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<img class=\"img-responsive\" src=\"'+ super.getImage() + '\"'+ '>';
      bootstrapTag += '</div>';
      bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<h1>' + super.getTitle() + '</h1>';
        bootstrapTag += '<ul>';
        bootstrapTag += '<li>' + 'Autor: ' + super.getAuthor() + '</li>';
        bootstrapTag += '<li>' + 'Genre: ' + super.getGenre() + '</li>';
        bootstrapTag += '<li>' + 'Publisher: '+ super.getPublisher() + '</li>';
        bootstrapTag += '<li>' + 'Weight: ' +this.weight + '</li>';
        bootstrapTag += '<li>' + 'Rating: ' + super.getRating() + '</li>';
        bootstrapTag += '</ul>';
      bootstrapTag += '</div>';
    bootstrapTag +='</div>';
    return bootstrapTag;
  }
}

class Dvd extends Media{
  durationOfMinutes:number;
  constructor(title:string,author:string,genre:Genre,publisher:string,image:string,rating:number,durationOfMinutes:number){
    super(title,author,genre,publisher,image,rating);
    this.durationOfMinutes = durationOfMinutes;
  }
  render():string{
  let bootstrapTag:string = '<div class=\"row dvdStyle\">';
      bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<img class=\"img-responsive\" src=\"'+ super.getImage() +'\"'+ '>';
      bootstrapTag += '</div>';
      bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<h1>' + super.getTitle() + '</h1>';
        bootstrapTag += '<ul>';
        bootstrapTag += '<li>' + 'Autor:'+ super.getAuthor() + '</li>';
        bootstrapTag += '<li>' + 'Genre: ' +super.getGenre() + '</li>';
        bootstrapTag += '<li>' + 'Publisher: '+ super.getPublisher() + '</li>';
        bootstrapTag += '<li>' + 'Duration: ' + this.durationOfMinutes + '</li>';
        bootstrapTag += '<li>' + 'Rating: '+ super.getRating() + '</li>';
        bootstrapTag += '</ul>';
      bootstrapTag += '</div>';
    bootstrapTag +='</div>';
    return bootstrapTag;
  }
}

class Comic extends Media{
  constructor(title:string,author:string,genre:Genre,publisher:string,image:string,rating:number){
    super(title,author,genre,publisher,image,rating);
  }
  render():string{
    let bootstrapTag:string = '<div class=\"row comicStyle\">';
      bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<img class=\"img-responsive\" src=\"'+ super.getImage() +'\"'+ '>';
      bootstrapTag += '</div>';
      bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<h1>' + super.getTitle() + '</h1>';
        bootstrapTag += '<ul>';
        bootstrapTag += '<li>' + 'Autor:'+ super.getAuthor() + '</li>';
        bootstrapTag += '<li>' + 'Genre: '+ super.getGenre() + '</li>';
        bootstrapTag += '<li>' + 'Publisher: '+ + super.getPublisher() + '</li>';
        bootstrapTag += '<li>' +  'Rating: '+super.getRating() + '</li>';
        bootstrapTag += '</ul>';
      bootstrapTag += '</div>';
    bootstrapTag +='</div>';
    return bootstrapTag;
  }
}
class Mediathek{
  mediaList:Array<Media>;
  constructor(){
    this.mediaList = new Array<Media>();
  }
  addComic(title:string,author:string,genre:Genre,publisher:string,image:string,rating:number){
    let comicMedia:Media = new Comic(title,author,genre,publisher,image,rating);
    this.mediaList.push(comicMedia);
  }
  addCd(title:string,author:string,genre:Genre,publisher:string,image:string,rating:number,durationOfMinutes:number){
    let cdMedia:Media = new Cd(title,author,genre,publisher,image,rating,durationOfMinutes);
    this.mediaList.push(cdMedia);
  }
  addBook(title:string,author:string,genre:Genre,publisher:string,image:string,rating:number,weight:number){
    let bookMedia:Media = new Book(title,author,genre,publisher,image,rating,weight);
    this.mediaList.push(bookMedia);
  }
  addDvd(title:string,author:string,genre:Genre,publisher:string,image:string,rating:number,durationOfMinutes:number){
    let dvdMedia:Media = new Dvd(title,author,genre,publisher,image,rating,durationOfMinutes);
    this.mediaList.push(dvdMedia);
  }
  showMediaList(){
    console.log(this.mediaList);
  }
  renderMediathek(){
    let bootstrapStr:string = '';
    for(let i= 0;i<this.mediaList.length;i++){
      if(i%2!=0){
        console.log('i',i);
        bootstrapStr +="<div class=\"row is-flex\">";
      }
      bootstrapStr +="<div class=\"col-lg-5 col-lg-offset-1\">";
      bootstrapStr+=this.mediaList[i].render();
      bootstrapStr +="</div>";
      if(i%2!=0){
        bootstrapStr += '</div>';
      }
    }
    return bootstrapStr;
  }
}
