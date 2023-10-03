export class EndPoints{
    static baseUrl = "http://localhost:3001";

    static getArtistsUrl = `${EndPoints.baseUrl}/artists`;
    static getArtistByIdUrl = `${EndPoints.baseUrl}/artists`;

    static getAlbumsUrl = `${EndPoints.baseUrl}/albums`;
    static getAlbumByIdUrl = `${EndPoints.baseUrl}/albums`;

    static getSongsUrl = `${EndPoints.baseUrl}/songs`;
    static getSongsByIdUrl = `${EndPoints.baseUrl}/songs`;
}