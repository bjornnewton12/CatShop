# Cat Shop

## Projektbeskrivning
Cat Shop är en kattbutik i React som hämtar och presenterar data från "The Cat API" (https://api.thecatapi.com/v1/breeds?limit=30). Applikationen är byggd med React-komponenter. Cat Shop är responsiv, och anpassar sig efter skärmstorlek med react-bootstrap. React, react-router-dom och react-bootstrap används.
All kod är skriven i ReactJS och JSX. Applikationen är uppbyggd med react-komponenter.

## Teknik
- React med JSX
- React Router DOM för sidnavigering
- React Bootstrap för responsiv layout
- Context API för kundvagnshantering
- Vite som byggverktyg

## Hur man startar projektet
1. npm install
2. npm run dev
3. Öppnas på http://localhost:5173.

## Sidor i projektet
1. Home
    - Startsida med presentation
2. AboutUs
    - Sida med information om ägare med kontaktinformation. 
3. Cats
    - Kattsida som listar katter hämtade från WebAPI:et med React-komponenter. Listan är indelad i listsidor (pagination) där varje listsida visar 10 katter. Varje rad i listan visar kattens namn, ursprungsland och bild. 
    - Pagination
    - Sökfält 
4. CatDetails
    - Detaljsida som innehåller en knapp för att lägga till katten i en kundvagn.
5. ShoppingCart
    - Kundvagnen hanteras med Context API så att antalet visas i menyn och uppdateras direkt i hela applikationen.
    - Innehåller en knapp som öppnar upp en modal där ett formulär dyker upp för användaren så att de kan fylla i namn, e-postadress och leveransadress. Det finns en knapp för att skicka ordern som stänger modalen och skapar en alert som orderbekräftelse.
