export class FaceSnapData {

  location?: string;

  constructor(public title: string,
              public likes: number,
              public created_at: Date,
              public description: string,
              public imgUrl: string) {
  }

  addLike(increment: number): void{
    this.likes+=increment;
  }

  setLocation(location: string): void{
    this.location=location;
  }
}
