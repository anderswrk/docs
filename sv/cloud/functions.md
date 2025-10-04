# Edge Functions

## Serverbaserad Kodexekvering

Edge functions är JavaScript-funktioner som körs på servern, vilket gör det möjligt att implementera logik som inte bör eller kan köras i webbläsaren. AI skapar dessa funktioner när du beskriver funktioner som behöver serverbaserad bearbetning, extern API-integration eller förbättrad säkerhet.

**Vad edge functions möjliggör**:
- **Bearbeta formulär** med validering och externa API-anrop
- **Integrera tjänster** som att skicka e-post, bearbeta betalningar eller anropa AI-API:er
- **Skydda känslig logik** som inte ska vara synlig i webbläsarkod
- **Komma åt hemligheter** säkert utan att exponera dem för användare
- **Utföra komplexa operationer** som är för långsamma eller resurskrävande för webbläsaren

## Hur Funktioner Fungerar

När AI skapar en edge function åt dig:

1. **Skriver JavaScript-koden** för att utföra uppgiften du beskrev
2. **Sätter upp åtkomstkontroll** för att bestämma vem som kan anropa funktionen
3. **Konfigurerar hemlighetsåtkomst** om funktionen behöver externa API-autentiseringsuppgifter
4. **Testar funktionen** för att säkerställa att den fungerar korrekt
5. **Tillhandahåller en URL** som din applikation kan anropa för att köra funktionen

Funktioner körs i isolerade, säkra miljöer. Varje körning loggas med tidsinformation, eventuella fel och vilken användare som utlöste det. Du kan visa dessa loggar i administrationsgränssnittet för att övervaka hur dina funktioner presterar och felsöka eventuella problem.

## Åtkomstkontroll för Funktioner

Precis som databastabeller har edge functions säkerhetspolicyer som kontrollerar vem som kan köra dem. AI sätter upp dessa baserat på vad du bygger:

### Publika Funktioner

Vem som helst kan anropa dem, även utan att logga in. Används för webhook-hanterare (som Stripe-betalningsnotifieringar), publika API:er eller hälsokontrollsändpunkter.

### Autentiserade Funktioner

Endast inloggade användare kan anropa dem. De flesta funktioner använder denna policy — den är lämplig för användarinriktade funktioner, formulärinlämningar eller datahämtning för din applikation.

### Gruppbaserad Åtkomst

Endast användare i specifika grupper (som "admin") kan anropa funktionen. Perfekt för administrativa operationer, modereringsverktyg eller teamspecifika funktioner.

### Metadatabaserad Åtkomst

Åtkomst baserad på anpassade användarattribut. Till exempel kan bara användare med `department = "engineering"` anropa vissa funktioner. Detta möjliggör flexibla, anpassade behörighetsscheman.

## Vad Funktioner Kan Göra

### Databasåtkomst

Funktioner kan fråga och ändra din databas, med alla samma säkerhetsregler tillämpade. De kan skapa, läsa, uppdatera eller radera poster samtidigt som de respekterar säkerhet på radnivå.

### Externa API-anrop

Funktioner kan kommunicera med externa tjänster med hjälp av dina lagrade hemligheter. AI inkluderar nödvändig autentisering och begäranformatering.

### Komplex Logik

Funktioner kan utföra beräkningar, datatransformationer, valideringar eller flerstegsarbetsflöden som är för komplexa för webbläsaren.

### E-post och Notifieringar

Skicka transaktionsmail, SMS-meddelanden eller push-notifieringar som svar på användaråtgärder.

### Betalningsbearbetning

Hantera betalningsflöden, webhook-bearbetning eller prenumerationshantering med tjänster som Stripe.

### AI-integration

Anropa AI-API:er som OpenAI eller Anthropic för att generera innehåll, analysera data eller tillhandahålla intelligenta funktioner.

## Exempelscenarier

### Kontaktformulärbearbetning

När en användare skickar in ett kontaktformulär validerar en edge function inmatningen, lagrar den i databasen och skickar en e-postnotifiering till ditt team — allt utlöst av ett enda funktionsanrop.

### AI-innehållsgenerering

När användare begär AI-genererat innehåll anropar en funktion OpenAI- eller Anthropic-API:et med hjälp av dina lagrade autentiseringsuppgifter, genererar innehållet, lagrar det i databasen och returnerar det till användaren.

### Betalningsbearbetning

Funktioner hanterar hela betalningsflödet: skapa betalningsintentioner med Stripe, bearbeta webhooks när betalningar slutförs, uppdatera orderstatus i databasen och skicka bekräftelsemail.

### Dataexport

En autentiserad funktion frågar databasen, formaterar data som CSV eller Excel och returnerar det för nedladdning — allt medan användarbehörigheter och säkerhetsregler respekteras.

## Övervakning och Loggar

Varje funktionskörning loggas automatiskt med:
- När den anropades och av vem
- Hur lång tid det tog att köra
- Om den lyckades eller stötte på fel
- Eventuell konsolutmatning eller felmeddelanden
- Svaret den returnerade

Dessa loggar är tillgängliga i administrationsgränssnittet, vilket gör det enkelt att övervaka funktionsprestanda, felsöka problem eller förstå hur din applikation används.

## Bästa Praxis

✅ **Beskriv tydligt** - När du ber AI att skapa en funktion, var specifik om vad den ska göra och vem som ska kunna anropa den.

✅ **Övervaka loggar** - Kontrollera funktionskörningsloggar för att förstå prestanda och fånga fel tidigt.

✅ **Behåll hemligheter i hemlighetshanteraren** - AI kommer att använda lagrade hemligheter snarare än att hårdkoda dem i funktioner.

❌ **Exponera inte känsliga operationer** - Låt AI konfigurera lämpliga åtkomstkontroller. Administrativa funktioner ska aldrig vara publika.

---

**Relaterad Dokumentation:**
- [Databas →](/sv/cloud/database)
- [Hemlighetshantering →](/sv/cloud/secrets)
- [Administrationsgränssnitt →](/sv/cloud/admin)
