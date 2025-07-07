import {Component, OnInit} from '@angular/core';
import {FaceSnapData} from '../../Models/FaceSnapData';
import {FaceSnap} from '../face-snap/face-snap';
import {FaceSnapService} from '../services/face-snaps-service';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnap
  ],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss'
})
export class FaceSnapList implements OnInit {
  faceSnaps!: FaceSnapData[];
  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.getFaceSnaps();
  }
}
