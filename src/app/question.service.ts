import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Question } from './question';
import { QUESTIONS } from './mock-questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(): Observable<Question[]> {
  	return of(QUESTIONS);
  }
}
