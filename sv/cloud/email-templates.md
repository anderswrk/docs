# E-postmallar

## Hantera E-postinnehåll

E-postmallar låter dig skapa konsekventa, professionellt utseende e-postmeddelanden med dynamiskt innehåll. Istället för att skriva e-post-HTML och text varje gång du vill skicka ett meddelande skapar du återanvändbara mallar som AI kan använda för att skicka e-post för din räkning.

Mallar är skrivna i Markdown — samma enkla formatersspråk som används för bloggposter och dokumentation — och konverteras automatiskt till ren HTML när de skickas. Detta betyder att dina e-postmeddelanden ser professionella ut utan att kräva att du skriver komplex HTML-kod.

## Hur Mallar Fungerar

När du berättar för AI att du vill skicka vissa typer av e-post (som välkomstmeddelanden, lösenordsåterställningar eller orderbekräftelser) skapar den lämpliga e-postmallar automatiskt. Varje mall inkluderar:

**Ämnesrad**: Vad som visas i e-postämnet, som kan inkludera dynamisk information som användarens namn

**Kroppsinnehåll**: E-postmeddelandet, formaterat i Markdown för rubriker, fet text, länkar och annan formatering

**Variabler**: Platshållare som ersätts med faktisk information när e-posten skickas, som `$firstName`, `$lastName`, `$email` eller `$timestamp`

**Malltyp**: Om det är ett systeme-post (lösenordsåterställning), transaktionsmail (kvitto) eller marknadsföringsmail (nyhetsbrev)

## Variabler och Personalisering

Mallar använder enkla variabler som automatiskt ersätts med verklig information när e-post skickas. Till exempel:

En mall kan säga: "Hej $firstName, välkommen till vår tjänst! Din kontoe-post är $email."

När den skickas till en användare vid namn Anna Andersson med e-post anna@example.com blir det: "Hej Anna, välkommen till vår tjänst! Din kontoe-post är anna@example.com."

**Tillgängliga standardvariabler**:
- `$firstName` - Mottagarens förnamn
- `$lastName` - Mottagarens efternamn
- `$email` - Mottagarens e-postadress
- `$timestamp` - När e-posten skickades

AI kan också lägga till anpassade variabler specifika för din applikation, som ordernummer, bekräftelsekoder eller annan information som ska visas i e-postmeddelanden.

## Malltyper

### Systemmallar
Kritiska e-postmeddelanden för din applikations drift: lösenordsåterställningar, e-postverifiering, kontoaktivering, säkerhetsvarningar. Dessa skapas och hanteras av AI för att säkerställa att de följer bästa praxis och bibehåller konsekvens.

### Transaktionsmallar
E-post som utlöses av användaråtgärder: orderbekräftelser, leveransnotifieringar, kvitton, lösenordsändringsbekräftelser. Dessa ger användare viktig information om deras interaktioner med din applikation.

### Marknadsföringsmallar
Nyhetsbrev, meddelanden, kampanje-post, produktuppdateringar. Dessa är för att kommunicera med dina användare om nya funktioner, erbjudanden eller innehåll.

## Skapa och Hantera Mallar

### Genom AI
När du beskriver e-postbehov skapar AI lämpliga mallar. Till exempel uppmanar "Skicka användare ett välkomstmail när de registrerar sig" AI att skapa en välkomstmall med lämpligt innehåll och variabler.

### Genom Administratörsgränssnittet
Du kan visa alla mallar, se deras innehåll, redigera ämnesrader och brödtext och aktivera eller inaktivera mallar. Gränssnittet tillhandahåller en Markdown-redigerare med förhandsgranskningsfunktionalitet.

### Automatiska Funktioner
- **Markdown-rendering** - Din Markdown konverteras automatiskt till ren, responsiv HTML
- **Säkerhetsskydd** - Variabler undviks automatiskt för att förhindra säkerhetsproblem
- **Mallvalidering** - Systemet verifierar mallar innan de sparas
- **Versionsspårning** - Ändringar i mallar spåras med tidsstämplar och användarinformation

## Verkliga Exempel

### Användarregistrering
När någon registrerar sig använder AI en välkomstmall för att skicka ett varumärkesmässigt e-postmeddelande med deras namn, kontodetaljer och nästa steg. E-posten ser professionell ut och överensstämmer med ditt varumärke.

### Lösenordsåterställning
När användare glömmer lösenord skickar en systemmall dem en säker återställningslänk. Mallen inkluderar deras namn, förklarar vad som hände och ger tydliga instruktioner.

### Orderbekräftelse
Efter ett köp e-postar en transaktionsmall ett kvitto med orderdetaljer, artikellista, totalt belopp och leveransinformation — allt automatiskt befolkat från din databas.

### Veckovis Nyhetsbrev
En marknadsföringsmall skickar uppdateringar om nya funktioner eller innehåll, personaliserat med varje mottagares namn och preferenser.

## Säkerhet och Trygghet

**XSS-skydd**: Alla variabler undviks automatiskt när e-post skickas, vilket förhindrar injektionsattacker. Du behöver inte oroa dig för skadligt innehåll i användarinlämnade data — systemet hanterar sanering automatiskt.

**Förhandsgranska innan sändning**: Administratörsgränssnittet låter dig förhandsgranska hur mallar kommer att se ut med exempeldata innan du använder dem i din applikation.

**Validering**: Systemet kontrollerar att alla variabler i mallar är giltiga och att Markdown-syntaxen är korrekt innan mallar kan sparas.

## Bästa Praxis

✅ **Använd mallar** - Låt AI skapa e-postmallar istället för att hårdkoda e-postinnehåll i din applikation.

✅ **Personalisera med variabler** - Använd `$firstName` och andra variabler för att göra e-postmeddelanden personliga och relevanta.

✅ **Förhandsgranska innan sändning** - Förhandsgranska alltid mallar med exempeldata för att säkerställa att de ser korrekta ut.

✅ **Håll det enkelt** - Använd Markdown-formatering för tydlighet. Undvik alltför komplexa layouter.

❌ **Hårdkoda inte e-postinnehåll** - Mallar låter dig uppdatera e-postinnehåll utan kodändringar och bibehålla konsekvens.

❌ **Lägg inte känslig data i mallar** - Använd variabler för dynamiskt innehåll snarare än att bädda in specifik användardata.

---

**Relaterad Dokumentation:**
- [E-postleverans →](/sv/cloud/email-delivery)
- [Databas →](/sv/cloud/database)
- [Administratörsgränssnitt →](/sv/cloud/admin)
