import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  jobs: Array<any> = [];
  academicEducation: Array<any> = [];

  constructor() {
  }

  ngOnInit() {
    this.jobs.push(
      {
        id: 1,
        title: 'Full Stack Developer',
        company: 'Virtus',
        desc: 'VIRTUS_EXP_DESC',
        site: 'http://virtus.ufcg.edu.br',
        begin: '2016-04-01T23:20:46+00:00',
        end: ''
      },
      {
        id: 2,
        title: 'Software Developer',
        company: 'Embedded System Lab - UFCG',
        desc: 'EMBEDDED_EXP_DESC',
        site: 'http://www.embeddedlab.org',
        begin: '2015-04-01T23:20:46+00:00',
        end: '2016-03-31T23:20:46+00:00'
      },
      {
        id: 3,
        title: 'Software Developer and Researcher',
        company: 'Lavid',
        desc: 'LAVID_EXP_DESC',
        site: 'http://lavid.ufpb.br',
        begin: '2014-10-01T23:20:46+00:00',
        end: '2015-03-31T23:20:46+00:00'
      },
      {
        id: 4,
        title: 'Tutor',
        company: 'UFPB Virtual',
        desc: 'UFPB_VIRTUAL_EXP_DESC',
        site: 'http://www.ufpb.br',
        begin: '2014-04-01T23:20:46+00:00',
        end: '2015-09-31T23:20:46+00:00'
      }
    );


    this.academicEducation.push(
      {
        id: 1,
        title: 'Bachelor in Information Systems',
        institution: 'UFPB - Federal University of Paraiba',
        begin: '2011-08-11T23:20:46+00:00',
        end: '2015-09-01T23:20:46+00:00'
      }
    );
  }

}
