export interface ISneakers {
  id: string;
  brand: string;
  title: string;
  releaseDate: string;
  retailPrice: number;
  media: {
    imageUrl: string | null;
  };
}

interface ISneakersApi {
  getSneakersList(): Promise<ISneakers[]>
}

export class SneakersApi implements ISneakersApi {
  private url: string = 'https://v1-sneakers.p.rapidapi.com/v1/sneakers';


  public async getSneakersList() {
    const res = await fetch(`${ this.url }?limit=50&releaseYear=2020`, {
      method: 'GET',
      headers: {
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
        "x-rapidapi-key": "6c279c5179msh94ddba7e0900e55p1bf51djsndcc26a43f993"
      }
    });
    return res.json();
  }
}
