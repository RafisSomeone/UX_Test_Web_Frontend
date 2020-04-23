import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-create-tests',
  templateUrl: './create-tests.component.html',
  styleUrls: ['./create-tests.component.css']
})
export class CreateTestsComponent implements OnInit {

  urlToEmbed: string;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Create tests');
  }

  ngOnInit(): void {
  }


  embedWebsite() {

    if (this.urlToEmbed.includes('.axshare.com')) {

      // hack job, for now

      const newIframe = document.createElement('iframe');
      newIframe.id = 'websiteIframe';
      newIframe.src = this.urlToEmbed;
      newIframe.style.cssText = '  border: none;\n' +
        '  padding: 0;\n' +
        '  -webkit-transform:scale(0.9);\n' +
        '  -webkit-transform-origin: top left;\n' +
        '  margin: 0 0 0 -4.5%;\n' +
        '  background-color: #EEEEEE;\n' +
        '  width: 116.1%;\n' +
        '  height: 111.2%;';

      document.getElementById('websiteIframe').replaceWith(newIframe);

    } else {

      alert('You can only import mockups from Axshare.');

    }

    this.urlToEmbed = '';

  }

}
