# DEL B: INLÄMNINGSUPPGIFT — KATTBUTIK

## Bakgrundsbeskrivning
Cat Shop är en kattbutik i ReactJS som asynkront 
hämtar och presenterar data från WebApi. Applikationen är byggd med React-komponenter. Applikationen ska ha ett modernt användargränssnitt som dynamiskt anpassar hur en sida renderas beroende på skärmstorlek, en responsiv applikation. React, react-router-dom och react-bootstrapa används.
All kod är skriven i ReactJS och JSX. Applikationen är uppbyggd med react-komponenter.

## Hur man startar projektet
För att starta applikationen skriver man npm install följt av npm run dev i terminalen.

## I projektet finns
* Navbar.jsx
** Meny för att navigera mellan sidorna
* Home.jsx
** Startsida med presentation
* AboutUs.jsx
** Sida med information om ägare med kontaktinformation. 
* Cats.jsx
** Kattsida som listar katter hämtade från WebAPI:et med React-komponenter. Listan är indelad i listsidor (pagination) där varje listsida visar 10 katter. Varje rad i listan visar kattens namn, ursprungsland och bild. 
** Pagination
** Sökfält 
* CatDetails.jsx
** Detaljsida som innehåller en knapp för att lägga till katten i en kundvagn.
* ShoppingCart.jsx
** Kundvagnen  hanteras med Context API så att antalet visas i menyn och uppdateras direkt i hela applikationen.
** innehåller en knapp som öppnar upp en modal där ett formulär dyker upp för användaren så att de kan fylla i namn, e-postadress och leveransadress. Det finns en knapp för att skicka ordern som stänger modalen och skapar en alert som orderbekräftelse. 
* Applikationen är responsiv, och anpassar sig efter  skrämstorlek med react-bootstrap.
