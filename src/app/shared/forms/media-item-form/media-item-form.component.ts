import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {

  constructor() {
  }

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.pattern('[\\w\\-\\s\\/]+'),
        Validators.required
      ])),
      category: new FormControl('', Validators.required),
      year: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.max(new Date().getFullYear())
      ]))
    });
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
