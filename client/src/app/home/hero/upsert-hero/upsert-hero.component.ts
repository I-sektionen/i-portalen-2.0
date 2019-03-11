import { Component, Input, OnChanges } from '@angular/core';
import { HeroService } from '../shared/hero.service';
import { DynamicFormField } from '../../../dynamic-forms/shared/dynamic-form.model';
import { HeroDynamicFormService } from '../shared/hero-dynamic-form.service';
import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-upsert-hero',
  templateUrl: './upsert-hero.component.html',
  styleUrls: ['./upsert-hero.component.scss']
})
export class UpsertHeroComponent implements OnChanges {

  @Input() hero: Hero;

  heroFormFields: DynamicFormField[];

  constructor(
    private heroDynamicFormService: HeroDynamicFormService,
    private heroService: HeroService
  ) { }

  ngOnChanges() {
    this.heroDynamicFormService.getDynamicFormFields(this.hero).then(formFields => {
      this.heroFormFields = formFields;
    });
  }

  submit(hero) {
    if (this.hero) {
      this.heroService.updateHero(this.hero.id, hero);
    } else {
      this.heroService.insertHero(hero);
    }
  }
}
