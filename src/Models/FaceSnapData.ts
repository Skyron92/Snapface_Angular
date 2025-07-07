export class FaceSnapData {

  location?: string;
  id:string;

  constructor(public title: string,
              public likes: number,
              public created_at: Date,
              public description: string,
              public imgUrl: string,) {
    this.id=crypto.randomUUID().substring(0,8);
  }

  addLike(increment: number): void{
    this.likes+=increment;
  }

  withLocation(location: string): FaceSnapData{
    this.location=location;
    return this;
  }
}
