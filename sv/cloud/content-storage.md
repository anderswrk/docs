# Fillagring och Innehållshantering

Din applikation har ett dedikerat innehållsfilsystem för att lagra användaruppladdade filer som bilder, dokument, PDF-filer och videor. Detta är separat från din applikationskod och är designat för dynamiskt innehåll som användare skapar eller laddar upp när de använder din app.

## Vad Innehållsfilsystemet Möjliggör

Innehållsfilsystemet ger kraftfulla filhanteringsfunktioner för din applikation:

- **Lagra användaravatarer, profilbilder och bildgallerier**
- **Ta emot dokumentuppladdningar** som CV:n, kontrakt eller PDF-filer
- **Bygg fildelningsfunktioner** mellan användare i din app
- **Skapa bildtunga applikationer** med automatisk optimering
- **Låt användare ladda ner filer** de har laddat upp eller som tillhör dem
- **Bygg administrativa verktyg** där du hanterar filer på användarnas vägnar

## Hur Det Fungerar

När du beskriver en funktion som behöver fillagring till AI:n, hanterar den automatiskt hela implementeringen:

**Konfigurerar uppladdningsgränssnittet** — Skapar formulär eller dra-och-släpp-zoner där användare kan välja filer från sin enhet

**Konfigurerar åtkomstkontroll** — Bestämmer vem som kan visa, ladda upp eller ta bort filer baserat på vad du bygger

**Implementerar bildoptimering** — Ändrar automatiskt storlek på och serverar bilder effektivt så att din app laddar snabbt

**Skapar lagringsstrukturen** — Organiserar filer i logiska mappar som `/content/uploads/` eller `/content/avatars/`

**Hanterar backend** — Hanterar den faktiska fillagringen, hämtningen och leveransen utan att du behöver tänka på det

Filer lagras på sökvägar som `/content/uploads/photo.jpg` och kan refereras direkt i din app. Systemet spårar vem som laddade upp varje fil, när den skapades och tillämpar dina åtkomstregler.

## Åtkomstkontroll för Filer

Precis som databastabeller och edge-funktioner har filer säkerhetspolicyer som styr vem som kan komma åt dem. **Filer är privata som standard** — ingen kan komma åt dem förrän du konfigurerar behörigheter. AI:n ställer in dessa baserat på vad du bygger:

### Publika Filer

Vem som helst kan se dem, även utan att logga in. Inloggade användare kan ladda upp, och endast personen som laddade upp en fil kan ta bort den. Perfekt för fotogallerier, publik bilddelning eller användargenererade innehållssajter.

### Privata Filer

Endast användaren som laddade upp en fil kan se eller ta bort den. Används för känsliga dokument, privata foton, medicinska journaler eller allt som användare inte vill att andra ska se.

### Organisationsdelade Filer

Användare från samma organisation kan se filer som laddats upp av vem som helst i deras organisation. Individer kan endast ta bort filer de har laddat upp. Utmärkt för teamdokumentdelning, företagsresurser eller kollaborativa arbetsytor.

### Endast Ägaråtkomst

Endast du (appskaparen) kan komma åt dessa filer, inte dina slutanvändare. Användbart för att lagra systemfiler, mallar eller administrativa resurser som driver din app men inte ska vara användarriktade.

### Avancerad Åtkomstkontroll

AI:n kan skapa sofistikerade åtkomstregler baserade på filmetadata. Till exempel:

- Publicerade artiklar är publika, men utkast är endast synliga för författaren
- Filer taggade med en avdelning är endast synliga för användare i den avdelningen
- Premium-innehåll kräver en prenumerationsflagga på användarens konto
- Delade filer är synliga för medarbetare listade i filens metadata

## Bildoptimering

Bilder som laddas upp till innehållsfilsystemet optimeras automatiskt för snabb laddning. När du visar en bild kan du begära en specifik bredd och systemet hanterar resten:

```html
<!-- Miniatyrbild (200px bred) -->
<img src="/content/gallery/photo.jpg?w=200" />

<!-- Standardvisning (800px bred) -->
<img src="/content/gallery/photo.jpg?w=800" />

<!-- Hjältebild (1920px bred) -->
<img src="/content/gallery/photo.jpg?w=1920" />

<!-- Original, fullstor bild -->
<img src="/content/gallery/photo.jpg" />
```

### Hur Optimering Fungerar

**Progressiv laddning** — Första gången någon begär en optimerad storlek serverar systemet den närmaste tillgängliga versionen och genererar exakt storlek i bakgrunden. Varje begäran efter det får den perfekt storleksanpassade, optimerade bilden. Originalfilen bevaras alltid.

**Modern formatlevererering** — Systemet serverar automatiskt moderna bildformat (AVIF eller WebP) till webbläsare som stödjer dem, med automatisk återgång till JPEG eller PNG för äldre webbläsare. Detta sker transparent — du anger bara bredden, och användarna får den snabbast laddande versionen som deras webbläsare kan hantera.

**Prestandaoptimering** — Använd mindre bredder för att förbättra prestandan. En 200px miniatyrbild laddar mycket snabbare än den ursprungliga 4000px bilden och använder mindre bandbredd. Välj bredden som matchar hur du visar bilden.

## Använda Filer i Din Applikation

AI:n integrerar innehållsfilsystemet i din React-applikation automatiskt. När du ber om funktioner som involverar filer skapar den UI-komponenter, kopplar upp uppladdnings-/nedladdningslogiken och hanterar fel.

### Vanliga Mönster som AI:n Implementerar

**Avatar-uppladdning** — Ett profilbilduppladdningsgränssnitt som validerar bildtyper, visar uppladdningsframsteg, förhandsgranskar bilden och sparar sökvägen till användarens profil.

**Dokumentgalleri** — En filbläddrare som listar uppladdade dokument, visar miniatyrbilder för bilder, tillhandahåller nedladdningslänkar och tillåter filtrering eller sökning.

**Dra-och-släpp-uppladdning** — En intuitiv uppladdningszon där användare kan dra filer från sitt skrivbord, se uppladdningsframsteg, avbryta pågående uppladdningar och få felmeddelanden för ogiltiga filer.

**Filväljare** — En modal eller sidopanel som visar filer användaren tidigare har laddat upp, låter dem välja en för återanvändning och visar miniatyrbilder och filnamn.

## Edge-funktionsintegration

Edge-funktioner (din serversideskod) kan komma åt innehållsfilsystemet för att bearbeta filer, generera filer programmatiskt eller implementera anpassad filhanteringslogik.

### Vad Edge-funktioner Kan Göra med Filer

- Generera PDF-rapporter och spara dem för användare att ladda ner
- Bearbeta uppladdade bilder (applicera vattenstämplar, skapa miniatyrbilder, extrahera metadata)
- Skanna uppladdade dokument för känsliga data innan de accepteras
- Implementera anpassad backup- eller arkiveringslogik
- Analysera filinnehåll och extrahera strukturerad data
- Utlösa arbetsflöden när specifika filer laddas upp

::: warning Viktig Säkerhetsnotering
Edge-funktioner kringgår normal åtkomstkontroll. När din funktion kommer åt filer är den inte begränsad av "publika" eller "ägar"-regler som gäller för användare. Detta innebär att du måste implementera dina egna auktoriseringskontroller i funktionskoden för att säkerställa att användare endast kan komma åt filer de borde se.

Till exempel, om en användare anropar din funktion och begär en fil, måste du verifiera att de äger den filen eller har tillstånd att komma åt den innan du returnerar innehållet. AI:n hanterar detta när den bygger dina funktioner, men det är viktigt att förstå att funktionskod körs med förhöjda privilegier.
:::

## Lagringsorganisation

AI:n organiserar filer i logiska mappar baserat på vad du bygger. Du behöver inte skapa mappstrukturer manuellt — beskriv bara vad du behöver, så ställer AI:n in lämpliga sökvägar.

### Vanliga Organisationsmönster

- `/content/uploads/` — Allmänna användaruppladdningar
- `/content/avatars/` — Användarprofilbilder
- `/content/documents/` — PDF-filer och dokument
- `/content/gallery/` — Fotogalleribilder
- `/content/private/` — Privata användarfiler
- `/content/public/` — Publikt tillgängliga filer
- `/content/temp/` — Temporära filer som kan tas bort

AI:n kan skapa nästlade mappar som `/content/uploads/2024/` eller `/content/users/[username]/` när det är lämpligt för ditt användningsfall. Filer spåras efter sin fullständiga sökväg, så att flytta eller byta namn på filer uppdaterar alla referenser automatiskt.

## Övervakning och Felsökning

Alla filoperationer loggas — uppladdningar, nedladdningar, åtkomstnekanden och fel. Du kan visa dessa loggar i administratörsgränssnittet för att förstå hur din fillagring används:

- Se vilka filer som laddas upp mest frekvent
- Identifiera misslyckade uppladdningar och vad som gick fel
- Spåra nedladdningsmönster och populära filer
- Övervaka lagringsanvändning och tillväxt över tid
- Felsök åtkomstkontrollproblem när användare inte kan komma åt filer de förväntar sig att se

Systemet spårar också lagringsmått — totalt antal lagrade filer, total storlek, tillväxthastighet och största filer. Detta hjälper dig att förstå din apps lagringsavtryck och planera för skalning.

## Begränsningar och Restriktioner

Som standard kan enskilda filer vara upp till **500MB**. Detta är konfigurerbart — AI:n kan justera gränsen baserat på vad du bygger. För de flesta applikationer (bilduppladdningar, dokumentdelning, PDF-filer) är standardgränsen mer än tillräcklig.

Filer lagras redundant för tillförlitlighet. Om du tar bort en fil tas den bort permanent från systemet — det finns ingen papperskorg eller återvinningsfack, så borttagning är omedelbar och slutgiltig.

## Arbeta med AI:n

När du beskriver funktioner som behöver fillagring, var specifik om:

- **Vem som kan komma åt filerna** — Publika, privata, organisationsdelade eller anpassade regler
- **Vilka typer av filer** — Endast bilder, PDF-filer, vilken filtyp som helst, storleksbegränsningar
- **Hur filer organiseras** — Mappar, namnkonventioner, om användare kan skapa undermappar
- **Vad som händer efter uppladdning** — Visa i ett galleri, bifoga till en post, bearbeta med en funktion

AI:n använder denna information för att konfigurera lagringen korrekt, ställa in åtkomstpolicyer och skapa ett gränssnitt som matchar dina behov.

---

**Relaterad Dokumentation:**
- [Databas →](/sv/cloud/database)
- [Edge-funktioner →](/sv/cloud/functions)
- [Administrationsgränssnitt →](/sv/cloud/admin)
