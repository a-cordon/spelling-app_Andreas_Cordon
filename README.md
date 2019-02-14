Spelling App
============
This App is a spelling App for children.
It is developed in the progress of the 
course "Software Engineering" of the Media 
Technologies studies on the DIT (Deggendorf 
Institute of Technology).

Maintainer Info
---------------
##### Implementing new Spellwords
To implement a new Spellword follow these steps:
1.  Add a new picture (Format: *.png) to the
    **spellword-images** folder inside the 
    **assets** folder
2.  Add the link to the image and the english word 
    for it the to *spellword.json* file inside the 
    **spellword-images** folder
3.  Add the translations to all the *\*.json* files 
    inside the **i18n** folder under *Spellwords*

#####Implementing new languages
To implement a new language follow these steps:
1.  
   - Create a new *\*.json* file inside the
      **i18n** folder and name it the short code of 
      your new language
   - You also may copy an existing file
      and rename it to your new language (this
      gives you the advantage, that all needed 
      fields already exist and you only have to 
      translate them)
2.  Add the short code of the newly created 
    language to the *settings.ts* file
3.  If you want to change the default language, 
    do so inside the *settings.ts* file inside the
    **providers** folder and also in the
    *app.component.ts* file
