export default class BookApi {
  constructor() {
    this.appID = 'DZhozfmIef5jvfNuBg7r';
    this.baseURI = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${this.appID}/books`;
  }

    static getBooks = async () => fetch(this.baseURI)
      .then((res) => res.json())
      .catch((err) => err)
}
