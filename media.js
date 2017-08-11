var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Genre;
(function (Genre) {
    Genre[Genre["SF"] = 0] = "SF";
    Genre[Genre["Crimi"] = 1] = "Crimi";
    Genre[Genre["Horror"] = 2] = "Horror";
    Genre[Genre["Comedy"] = 3] = "Comedy";
    Genre[Genre["Drama"] = 4] = "Drama";
    Genre[Genre["Documentary"] = 5] = "Documentary";
    Genre[Genre["Children"] = 6] = "Children";
})(Genre || (Genre = {}));
var Media = (function () {
    function Media(title, author, genre, publisher, image, rating) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.publisher = publisher;
        this.image = image;
        this.rating = rating;
    }
    Media.prototype.getTitle = function () {
        return this.title;
    };
    Media.prototype.getAuthor = function () {
        return this.author;
    };
    Media.prototype.getGenre = function () {
        return this.genre;
    };
    Media.prototype.getPublisher = function () {
        return this.publisher;
    };
    Media.prototype.getImage = function () {
        return this.image;
    };
    Media.prototype.getRating = function () {
        return this.rating;
    };
    Media.prototype.render = function () {
    };
    return Media;
}());
var Cd = (function (_super) {
    __extends(Cd, _super);
    function Cd(title, author, genre, publisher, image, rating, durationOfMinutes) {
        var _this = _super.call(this, title, author, genre, publisher, image, rating) || this;
        _this.durationOfMinutes = durationOfMinutes;
        return _this;
    }
    Cd.prototype.render = function () {
        var bootstrapTag = '<div class=\"row cdStyle\">';
        bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<img class=\"img-responsive\" src=\"' + _super.prototype.getImage.call(this) + '\"' + '>';
        bootstrapTag += '</div>';
        bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<h1>' + _super.prototype.getTitle.call(this) + '</h1>';
        bootstrapTag += '<ul>';
        bootstrapTag += '<li>' + 'Autor: ' + _super.prototype.getAuthor.call(this) + '</li>';
        bootstrapTag += '<li>' + 'Genre: ' + _super.prototype.getGenre.call(this) + '</li>';
        bootstrapTag += '<li>' + 'Publisher: ' + _super.prototype.getPublisher.call(this) + '</li>';
        bootstrapTag += '<li>' + 'Duration: ' + this.durationOfMinutes + '</li>';
        bootstrapTag += '<li>' + 'Rating: ' + _super.prototype.getRating.call(this) + '</li>';
        bootstrapTag += '</ul>';
        bootstrapTag += '</div>';
        bootstrapTag += '</div>';
        return bootstrapTag;
    };
    return Cd;
}(Media));
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(title, author, genre, publisher, image, rating, weight) {
        var _this = _super.call(this, title, author, genre, publisher, image, rating) || this;
        _this.weight = weight;
        return _this;
    }
    Book.prototype.render = function () {
        var bootstrapTag = '<div class=\"row bookStyle\">';
        bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<img class=\"img-responsive\" src=\"' + _super.prototype.getImage.call(this) + '\"' + '>';
        bootstrapTag += '</div>';
        bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<h1>' + _super.prototype.getTitle.call(this) + '</h1>';
        bootstrapTag += '<ul>';
        bootstrapTag += '<li>' + 'Autor: ' + _super.prototype.getAuthor.call(this) + '</li>';
        bootstrapTag += '<li>' + 'Genre: ' + _super.prototype.getGenre.call(this) + '</li>';
        bootstrapTag += '<li>' + 'Publisher: ' + _super.prototype.getPublisher.call(this) + '</li>';
        bootstrapTag += '<li>' + 'Weight: ' + this.weight + '</li>';
        bootstrapTag += '<li>' + 'Rating: ' + _super.prototype.getRating.call(this) + '</li>';
        bootstrapTag += '</ul>';
        bootstrapTag += '</div>';
        bootstrapTag += '</div>';
        return bootstrapTag;
    };
    return Book;
}(Media));
var Dvd = (function (_super) {
    __extends(Dvd, _super);
    function Dvd(title, author, genre, publisher, image, rating, durationOfMinutes) {
        var _this = _super.call(this, title, author, genre, publisher, image, rating) || this;
        _this.durationOfMinutes = durationOfMinutes;
        return _this;
    }
    Dvd.prototype.render = function () {
        var bootstrapTag = '<div class=\"row dvdStyle\">';
        bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<img class=\"img-responsive\" src=\"' + _super.prototype.getImage.call(this) + '\"' + '>';
        bootstrapTag += '</div>';
        bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<h1>' + _super.prototype.getTitle.call(this) + '</h1>';
        bootstrapTag += '<ul>';
        bootstrapTag += '<li>' + 'Autor:' + _super.prototype.getAuthor.call(this) + '</li>';
        bootstrapTag += '<li>' + 'Genre: ' + _super.prototype.getGenre.call(this) + '</li>';
        bootstrapTag += '<li>' + 'Publisher: ' + _super.prototype.getPublisher.call(this) + '</li>';
        bootstrapTag += '<li>' + 'Duration: ' + this.durationOfMinutes + '</li>';
        bootstrapTag += '<li>' + 'Rating: ' + _super.prototype.getRating.call(this) + '</li>';
        bootstrapTag += '</ul>';
        bootstrapTag += '</div>';
        bootstrapTag += '</div>';
        return bootstrapTag;
    };
    return Dvd;
}(Media));
var Comic = (function (_super) {
    __extends(Comic, _super);
    function Comic(title, author, genre, publisher, image, rating) {
        return _super.call(this, title, author, genre, publisher, image, rating) || this;
    }
    Comic.prototype.render = function () {
        var bootstrapTag = '<div class=\"row comicStyle\">';
        bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<img class=\"img-responsive\" src=\"' + _super.prototype.getImage.call(this) + '\"' + '>';
        bootstrapTag += '</div>';
        bootstrapTag += '<div class=\" col-lg-6 \">';
        bootstrapTag += '<h1>' + _super.prototype.getTitle.call(this) + '</h1>';
        bootstrapTag += '<ul>';
        bootstrapTag += '<li>' + 'Autor:' + _super.prototype.getAuthor.call(this) + '</li>';
        bootstrapTag += '<li>' + 'Genre: ' + _super.prototype.getGenre.call(this) + '</li>';
        bootstrapTag += '<li>' + 'Publisher: ' + +_super.prototype.getPublisher.call(this) + '</li>';
        bootstrapTag += '<li>' + 'Rating: ' + _super.prototype.getRating.call(this) + '</li>';
        bootstrapTag += '</ul>';
        bootstrapTag += '</div>';
        bootstrapTag += '</div>';
        return bootstrapTag;
    };
    return Comic;
}(Media));
var Mediathek = (function () {
    function Mediathek() {
        this.mediaList = new Array();
    }
    Mediathek.prototype.addComic = function (title, author, genre, publisher, image, rating) {
        var comicMedia = new Comic(title, author, genre, publisher, image, rating);
        this.mediaList.push(comicMedia);
    };
    Mediathek.prototype.addCd = function (title, author, genre, publisher, image, rating, durationOfMinutes) {
        var cdMedia = new Cd(title, author, genre, publisher, image, rating, durationOfMinutes);
        this.mediaList.push(cdMedia);
    };
    Mediathek.prototype.addBook = function (title, author, genre, publisher, image, rating, weight) {
        var bookMedia = new Book(title, author, genre, publisher, image, rating, weight);
        this.mediaList.push(bookMedia);
    };
    Mediathek.prototype.addDvd = function (title, author, genre, publisher, image, rating, durationOfMinutes) {
        var dvdMedia = new Dvd(title, author, genre, publisher, image, rating, durationOfMinutes);
        this.mediaList.push(dvdMedia);
    };
    Mediathek.prototype.showMediaList = function () {
        console.log(this.mediaList);
    };
    Mediathek.prototype.renderMediathek = function () {
        var bootstrapStr = '';
        for (var i = 0; i < this.mediaList.length; i++) {
            if (i % 2 != 0) {
                console.log('i', i);
                bootstrapStr += "<div class=\"row is-flex\">";
            }
            bootstrapStr += "<div class=\"col-lg-5 col-lg-offset-1\">";
            bootstrapStr += this.mediaList[i].render();
            bootstrapStr += "</div>";
            if (i % 2 != 0) {
                bootstrapStr += '</div>';
            }
        }
        return bootstrapStr;
    };
    return Mediathek;
}());
