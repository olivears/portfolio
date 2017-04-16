import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {

  private projects: Array<any> = [];
  private project: any;


  constructor() {
  }

  ngOnInit() {
    this.initProjects();
  }

  initProjects() {
    this.projects.push(
      {
        id: 1,
        title: 'We Are Sports',
        description: 'Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons.',
        demo: 'http://www.wearesports.com.br',
        pictures: [
          'https://s3-sa-east-1.amazonaws.com/99freelas/portfolios/imagens/original/296607/67e96176-20b1-11e7-a074-0238d6115b3e/screenshot-from-2016-04-27-23-18-02.png?id=298161&token=67e96176-20b1-11e7-a074-0238d6115b3e&nome=screenshot-from-2016-04-27-23-18-02&type=.png',
          'https://s3-sa-east-1.amazonaws.com/99freelas/portfolios/imagens/original/296607/65d030b0-20b1-11e7-a074-0238d6115b3e/screenshot-from-2016-04-27-23-18-09.png?id=298160&token=65d030b0-20b1-11e7-a074-0238d6115b3e&nome=screenshot-from-2016-04-27-23-18-09&type=.png',
          'https://s3-sa-east-1.amazonaws.com/99freelas/portfolios/imagens/original/296607/681e329d-20b1-11e7-a074-0238d6115b3e/screenshot-from-2016-04-27-23-18-17.png?id=298162&token=681e329d-20b1-11e7-a074-0238d6115b3e&nome=screenshot-from-2016-04-27-23-18-17&type=.png',
          'https://s3-sa-east-1.amazonaws.com/99freelas/portfolios/imagens/original/296607/60c27547-20b1-11e7-a074-0238d6115b3e/screenshot-from-2016-04-27-23-18-38.png?id=298158&token=60c27547-20b1-11e7-a074-0238d6115b3e&nome=screenshot-from-2016-04-27-23-18-38&type=.png',
          'https://s3-sa-east-1.amazonaws.com/99freelas/portfolios/imagens/original/296607/62327641-20b1-11e7-a074-0238d6115b3e/screenshot-from-2016-04-27-23-32-33.png?id=298159&token=62327641-20b1-11e7-a074-0238d6115b3e&nome=screenshot-from-2016-04-27-23-32-33&type=.png'],
        technologies: []
      },
      {
        id: 2,
        title: 'Weather App',
        description: 'Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons.',
        demo: 'https://franclisjunior.github.io/weather-app/',
        pictures: [
          'https://s3-sa-east-1.amazonaws.com/99freelas/portfolios/imagens/original/296607/f98d06af-20b5-11e7-a074-0238d6115b3e/screenshot-from-2017-04-13-22-57-06.png?id=298169&token=f98d06af-20b5-11e7-a074-0238d6115b3e&nome=screenshot-from-2017-04-13-22-57-06&type=.png',
          'https://s3-sa-east-1.amazonaws.com/99freelas/portfolios/imagens/original/296607/fcbaa349-20b5-11e7-a074-0238d6115b3e/screenshot-from-2017-04-13-22-57-16.png?id=298170&token=fcbaa349-20b5-11e7-a074-0238d6115b3e&nome=screenshot-from-2017-04-13-22-57-16&type=.png',
          'https://s3-sa-east-1.amazonaws.com/99freelas/portfolios/imagens/original/296607/ffa8aefe-20b5-11e7-a074-0238d6115b3e/screenshot-from-2017-04-13-22-57-24.png?id=298171&token=ffa8aefe-20b5-11e7-a074-0238d6115b3e&nome=screenshot-from-2017-04-13-22-57-24&type=.png'],
        technologies: []
      },
      {
        id: 3,
        title: 'Agenda Universitaria',
        description: 'Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons.',
        demo: '',
        pictures: [
          'https://s3-sa-east-1.amazonaws.com/99freelas/portfolios/imagens/original/296607/f66d2495-20b1-11e7-a074-0238d6115b3e/c1dfb7.jpg?id=298163&token=f66d2495-20b1-11e7-a074-0238d6115b3e&nome=c1dfb7&type=.jpg',
          'https://s3-sa-east-1.amazonaws.com/99freelas/portfolios/imagens/original/296607/fbe1ba73-20b1-11e7-a074-0238d6115b3e/ef11aa.jpg?id=298164&token=fbe1ba73-20b1-11e7-a074-0238d6115b3e&nome=ef11aa&type=.jpg',
          'https://s3-sa-east-1.amazonaws.com/99freelas/portfolios/imagens/original/296607/04db47bf-20b2-11e7-a074-0238d6115b3e/32355f.jpg?id=298166&token=04db47bf-20b2-11e7-a074-0238d6115b3e&nome=32355f&type=.jpg',
          'https://s3-sa-east-1.amazonaws.com/99freelas/portfolios/imagens/original/296607/07bade66-20b2-11e7-a074-0238d6115b3e/4ab14f.jpg?id=298167&token=07bade66-20b2-11e7-a074-0238d6115b3e&nome=4ab14f&type=.jpg',
          'https://s3-sa-east-1.amazonaws.com/99freelas/portfolios/imagens/original/296607/0a19c7fa-20b2-11e7-a074-0238d6115b3e/00748f.jpg?id=298168&token=0a19c7fa-20b2-11e7-a074-0238d6115b3e&nome=00748f&type=.jpg',
          ],
        technologies: []
      }
    );
  }

  selectProject(project) {
    this.project = project;
  }

}
