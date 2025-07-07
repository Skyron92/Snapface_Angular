import {Component, Input, OnInit} from '@angular/core';
import {FaceSnapData} from '../../Models/FaceSnapData';
import {DatePipe, NgClass, NgOptimizedImage, NgStyle} from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, DatePipe, NgOptimizedImage],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})
export class FaceSnap {
  @Input() faceSnapData!: FaceSnapData;

  isLikedByUser!: boolean;

  onLike(): void{
    this.faceSnapData.addLike(this.isLikedByUser?-1:1);
    this.isLikedByUser = !this.isLikedByUser;
  }
}
