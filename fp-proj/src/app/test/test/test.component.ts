import { Component, OnInit, Inject } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { testToken, loggers } from 'src/app/tokens';
import { Logger } from 'src/app/models/logger.interface';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    httpClient: HttpClient,
    @Inject(testToken) private testService: TestService,
    @Inject(loggers) loggersServices: Logger[]) {
    loggersServices.forEach(s => s.log('test'));
    httpClient.get('http://localhost:3000/posts').subscribe();
  }

  ngOnInit() {
  }

}
