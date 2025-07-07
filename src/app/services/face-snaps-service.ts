import {Injectable} from "@angular/core";
import {FaceSnapData} from '../../Models/FaceSnapData';

@Injectable({providedIn: 'root'})
export class FaceSnapService {
  private faceSnaps: FaceSnapData[] = [
    new FaceSnapData(
      'Petit chat',
      0,
      new Date(),
      'Un chaton tout mignon',
      'https://cdn.pixabay.com/photo/2025/02/20/07/51/ai-generated-9419220_640.png',
    ),
    new FaceSnapData(
      'Canari',
      0,
      new Date(),
      'Petit canard cherche à manger.',
      'https://cdn.pixabay.com/photo/2025/06/15/04/46/duckling-9660597_640.jpg').withLocation('Au bord de l\'eau...')
  ];

  getFaceSnaps(): FaceSnapData[] {
    return this.faceSnaps;
  }
}
