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
  private url: string = 'https://api.thesneakerdatabase.com/v1/sneakers';


  public async getSneakersList() {
    const res = await fetch(`${ this.url }?limit=50&releaseYear=2020`, {
      method: 'GET'
    });
    return res.json();
  }
}
