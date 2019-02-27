import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Question } from './classes';
import { QUESTIONS } from './content/mock-questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(): Observable<Question[]> {
  	return of(QUESTIONS);
  }
}
