import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FaceSnap} from './face-snap/face-snap';
import {FaceSnapData} from '../Models/FaceSnapData';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnap
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  faceSnaps!: FaceSnapData[];

  ngOnInit(): void {
    this.faceSnaps =[
      new FaceSnapData(
      'Petit chat',
      0,
      new Date(),
      'Un chaton tout mignon',
      'https://cdn.pixabay.com/photo/2025/02/20/07/51/ai-generated-9419220_640.png'
    ),
    new FaceSnapData(
      'Canari',
      0,
      new Date(),
      'Petit canard cherche à manger.',
      'https://cdn.pixabay.com/photo/2025/06/15/04/46/duckling-9660597_640.jpg')
    ]
    this.faceSnaps[1].setLocation("Au bord de l'eau...")
  }
}
