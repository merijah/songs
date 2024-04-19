export class EndPoints{
    static baseUrl = "http://localhost:4000/api/v1";

    static getArtistsUrl = `${EndPoints.baseUrl}/artists`;
    static deleteArtistUrl= `${EndPoints.baseUrl}/artists`;
    static getArtistByIdUrl = `${EndPoints.baseUrl}/artists`;
    static createArtist = `${EndPoints.baseUrl}/artists`;
    static updateArtist = `${EndPoints.baseUrl}/artists`;
    static removeAlbumUrl =  `${EndPoints.baseUrl}/artists`;


    static getAlbumsUrl = `${EndPoints.baseUrl}/albums`;
    static deleteAlbumUrl = `${EndPoints.baseUrl}/albums`;
    static getAlbumByIdUrl = `${EndPoints.baseUrl}/albums`;
    static createAlbum = `${EndPoints.baseUrl}/albums`;
    static updateAlbum = `${EndPoints.baseUrl}/albums`;
    static removeSongUrl = `${EndPoints.baseUrl}/albums`;



    static getSongsUrl = `${EndPoints.baseUrl}/songs`;
    static deleteSongUrl= `${EndPoints.baseUrl}/songs`;
    static getSongsByIdUrl = `${EndPoints.baseUrl}/songs`;
    static createSong = `${EndPoints.baseUrl}/songs`;
    static updateSong = `${EndPoints.baseUrl}/songs`;
  
   
}