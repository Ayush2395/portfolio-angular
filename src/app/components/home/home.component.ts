import { Component, OnInit, inject } from '@angular/core';
import { fadeInAnimation } from '../../core/common/animation/fadeIn';
import { DatabaseService } from '../../core/services/database.service';
import { ISkills } from '../../core/common/models/props';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeInAnimation]
})
export class HomeComponent implements OnInit {
  private database = inject(DatabaseService);
  public router = inject(ActivatedRoute);
  public tabValue: string = '';

  public skills: ISkills | null = null;

  public tableHead: Record<string, string> = {
    cloud: "Cloud",
    devOps: "DevOps Tools",
    frameworks: "Frameworks",
    markupLanguage: "Markup Languages",
    programmingLanguage: "Programming Language",
    styleSheets: " Style Sheets Language"
  };

  public columns: string[] = [];

  ngOnInit(): void {
    this.getSkillsData();
    this.router.queryParams.subscribe(query => {
      const { tab } = query;
      this.tabValue = tab;
    });
  }

  public getSkillsData = async () => {
    (await this.database.getSkills()).subscribe(response => {
      response.docs.forEach(doc => {
        if (doc.exists()) {
          console.log(doc.data());
          this.skills = doc.data() as ISkills;
          this.columns = Object.keys(this.tableHead) as (keyof ISkills)[];
        }
      });
    });
  };
}
