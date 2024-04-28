# Moment 3 i kursen DT208G, Programmering i TypeScript
**Namn:** Emma Larsson\
**Student-ID:** emla2309

## Beskrivning av webbplats
Detta är en webbplats där man kan omvandla temperatur, från Celsius till Farenheit och från Farenheit till Celsius. Det går även att omvandla längd, från fot till meter och från meter till fot.

Projektet skapades med hjälp av Angular CLI (https://github.com/angular/angular-cli) version 17.3.5.

## Beskrivning av lösning
### Skapa komponenter
Ett flertal komponenter skapas. Detta gjordes med kommandot "ng generate component NamnPåKomponent". De komponenter som skapas är tre undersidor, en navigationsmeny, en footer samt två olika komponenter för de omvandlare som finns på sidan. komponenterna med omvandlarna placerades på undersidan "Omvandlare." För att göra det möjligt att navigera mellan de olika komponenterna så används routing. Detta görs genom att använda RouterModule och Routes i app.routes.ts.

### Skapa formulär
För att göra mina omvandlare så skapas två olika formulär. Dessa formulär är av typen "template-driven forms".

### Templates och databinding
**ngModel**\
Two-way binding(ngModel) används för att binda värdet på det användaren skriver in i input-fälten till variablerna temperature och length som finns i TypeScript-klasserna TemperatureComponent och LengthComponent. Detta innebär att ändringar i inputfältet uppdaterar värdet på variabeln.

**click**\
Eventbinding används för att binda klickhändelserna på knapparna till funktionerna fToC/cToF och mToF/fToM som finns i TypeScript-klasserna TemperatureComponent och LengthComponent.

**result**\
Variabeln "result" lagrar resultatet av temperaturomvandlingen och längdomvandlingen. Interpolation används för att binda datan från komponenten till HTML-koden. Detta görs med hjälp av dubbla måsvingar.

## Installera projekt

För att installera och börja använda projektet, följ nedanstående steg:
* Klona projektet från Github. För att göra detta, nagivera till den mapp där du vill spara projektet, skriv in "git clone" följt av Github-repots URL.
* Installera beroenden. För att göra detta använd kommandot "npm install".
* Kör projektet. För att göra detta använd kommandot "ng serve".
* Kommandot för att bygga projektet är "ng build".
