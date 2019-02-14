import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { SpellWord } from "../../interfaces/SpellWord.interface";

@Injectable()
export class SpellwordProvider {

  public spellwords: SpellWord[] = [];

  constructor(private http: HttpClient,
              private translateService: TranslateService) {
  }

  public async loadSpellwords(): Promise<SpellWord[]> {
    const labels = await this.translateService.get('Spellwords').toPromise();

    this.http.get('assets/spellword-images/spellwords.json').toPromise().then((spellwords: SpellWord[]) => {
      this.spellwords = spellwords.map((el: SpellWord) => {
        return {
          image: el.image,
          spellword: labels[el.spellword.toUpperCase()]
        }
      });
    });

    return this.spellwords;
  }
}
