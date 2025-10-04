# Databas

## Hur Din Databas Fungerar

När du ber AI att bygga din applikation skapar den en dedikerad databas för att lagra dina data — vare sig det är blogginlägg, användarprofiler, produktkataloger eller annan information din app behöver. Denna databas är helt isolerad från andra projekt och automatiskt konfigurerad med säkerhets- och spårningsfunktioner.

Din databas replikeras globalt, vilket ger snabb, pålitlig datalagring med automatiska säkerhetskopior. AI hanterar alla tekniska detaljer: skapa tabeller, sätta upp relationer mellan data, konfigurera säkerhetsregler och säkerställa att allt fungerar sömlöst tillsammans.

**Vad du får automatiskt**:
- **Komplett isolering** - Din data är separerad från alla andra projekt
- **Automatiska säkerhetskopior** - Data säkerhetskopieras och skyddas kontinuerligt
- **Säkerhetsverkställighet** - Åtkomstkontroll tillämpas automatiskt på varje förfrågan
- **Granskningsspår** - Alla ändringar spåras med tidsstämplar och användarinformation
- **Snabb prestanda** - Databasen distribuerar din data globalt för låg latens
- **Visuella administrationsverktyg** - Bläddra, sök, redigera och exportera din data genom gränssnittet

## Automatisk Dataspårning

Varje tabell som AI skapar inkluderar automatiskt fem speciella kolumner som ger säkerhet, granskningsspår och dataintegritet utan att du behöver tänka på dem:

### `_row_id` - Unik Identifierare

Varje post får ett unikt ID som aldrig ändras. AI använder detta för att länka relaterad data tillsammans (som att koppla blogginlägg till deras författare) och för att uppdatera specifika poster. Du behöver inte skapa egna ID-kolumner — systemet hanterar detta automatiskt.

### `_created_by` - Användarspårning

Varje gång en användare skapar en post stämplar systemet automatiskt den med användarens ID. Detta möjliggör funktioner som "visa bara mina inlägg" eller "bara författaren kan redigera detta." AI använder detta för säkerhetsregler för att säkerställa att användare endast kan komma åt eller ändra sin egen data när det är lämpligt.

### `_created_at` - Skapelsedatum

Registrerar när data skapades, lagrat som en tidsstämpel. Detta låter dig sortera efter nyaste först, visa etiketter som "postat för 2 dagar sedan" eller filtrera till senaste aktivitet. Tidsstämpeln ställs in automatiskt och ändras aldrig.

### `_updated_at` - Senast Ändrad

Uppdateras automatiskt varje gång en post ändras. Detta är användbart för att visa information om "senast redigerad", implementera cachingstrategier eller spåra senaste aktivitet. Systemet hanterar detta helt automatiskt — du behöver aldrig uppdatera det manuellt.

### `_deleted` - Mjuk Radering

När användare raderar data tas poster faktiskt inte bort från databasen — de markeras bara som raderade. Detta betyder att du kan återställa av misstag raderad data, upprätthålla granskningsspår och aldrig förlora historisk information. Raderade poster döljs automatiskt från alla förfrågningar men förblir tillgängliga om det behövs för återställning eller efterlevnad.

## Hur AI Skapar och Uppdaterar Din Databas

När du berättar för AI vilken typ av data din app behöver skapar den lämpliga databastabeller bakom kulisserna. Denna process använder ett migreringssystem som spårar varje ändring av din databasstruktur, vilket gör det möjligt att uppdatera, rulla tillbaka eller förstå vad som ändrades över tid.

**Vad som händer automatiskt**:

När du ber om något som "skapa en blogg där användare kan skriva inlägg" gör AI:

1. **Designar tabellstrukturen** - Bestämmer vilka fält som behövs (titel, innehåll, publiceringsdatum, etc.)
2. **Lägger till spårningskolumner** - Inkluderar `_row_id`, `_created_by`, `_created_at`, `_updated_at` och `_deleted`
3. **Skapar prestandaindex** - Lägger till databasindex så förfrågningar körs snabbt
4. **Sätter upp relationer** - Länkar tabeller tillsammans (som att koppla inlägg till författare)
5. **Tillämpar ändringarna** - Skapar tabellen i din databas
6. **Konfigurerar säkerhet** - Sätter upp åtkomstkontrollregler (behandlas nedan)
7. **Registrerar ändringen** - Sparar en post av vad som skapades för gransknings- och återställningsändamål

**Datarelationer**:

AI hanterar automatiskt relationer mellan din data. Till exempel:
- **En-till-många**: Varje användare kan ha många blogginlägg
- **Många-till-många**: Varje inlägg kan ha många taggar, och varje tagg kan gälla många inlägg
- **Obligatoriska fält**: E-postadresser som måste finnas
- **Unika värden**: Användarnamn som inte kan dupliceras
- **Valideringsregler**: Priser som inte kan vara negativa

Allt detta ställs in automatiskt när du beskriver vad din applikation behöver göra.

## Automatisk Säkerhet och Åtkomstkontroll

Din data skyddas automatiskt av säkerhet på radnivå (RLS) — ett system som kontrollerar exakt vem som kan se och ändra varje datadel. När du beskriver din applikation för AI sätter den upp lämpliga säkerhetsregler baserat på vad du bygger.

Till exempel, om du säger "användare bör bara se sina egna anteckningar" konfigurerar AI regler som säkerställer att varje användare endast kan komma åt poster de skapade. Om du säger "gör blogginlägg publika men bara redigerbara av författaren" sätter den upp det automatiskt. Säkerheten verkställs på databasnivå, vilket betyder att det inte finns något sätt att kringgå det — även om någon försökte komma åt API:et direkt.

### Säkerhetsregeltyper

AI kan konfigurera nio olika typer av säkerhetsregler, som kan kombineras för att skapa sofistikerad åtkomstkontroll:

**1. Publik Åtkomst**

Vem som helst kan visa denna data, även utan att logga in. Perfekt för marknadsföringsinnehåll, produktkataloger, publika blogginlägg eller FAQ-sektioner.

**2. Autentiserade Användare**

Endast inloggade användare kan komma åt data. Idealt för användargenererat innehåll, communityfunktioner, interna instrumentpaneler eller allt innehåll avsett endast för medlemmar.

**3. Endast Ägare**

Endast personen som skapade en post kan se eller ändra den. Perfekt för personliga anteckningar, privata dokument, användarpreferenser, kundvagnar eller all data som ska vara helt privat för varje användare.

**4. Samma Organisation**

Användare kan komma åt data från sin egen organisation men inte andra organisationer. Bra för teamdokument, företagsövergripande meddelanden, delad projektdata eller avdelningsresurser. Varje organisation ser endast sin egen data.

**5. Primär Organisation**

Åtkomst begränsad till användare från ditt interna team (den primära organisationen), inte din apps kunder. Detta är användbart för systemkonfiguration, admininstrumentpaneler, faktureringshantering, funktionsflaggor, intern analys eller granskningsloggar som bara du ska se.

**Plattformskontext**: När kunder registrerar sig för din app får de sina egna organisationer. Denna regel säkerställer att de inte kan komma åt din interna administrativa data.

**6. Användare Har Attribut**

Åtkomst baserad på specifika användarattribut, som att vara i gruppen "admin". Används för administratörsbegränsade tabeller, rollbaserat innehåll, funktionsflaggor eller betaåtkomst.

**7. Post Har Värde**

Åtkomst baserad på ett specifikt fältvärde i själva posten. Till exempel, visa bara poster där `status = "published"`. Bra för publicerat vs. utkastinnehåll, aktiv vs. arkiverad data eller godkännandearbetsflöden.

**8. Fältmatchning**

Matcha användarattribut till postfält. Till exempel kan användare bara se poster där postens `department` matchar deras `department`. Perfekt för avdelningsbaserad åtkomst, platsbaserad filtrering, territoriumhantering eller anpassad segmentering.

**9. Blockera All Åtkomst**

Förhindrar en operation helt. Användbart för att förhindra raderingar på granskn ingstabeller, skapa skrivskyddad referensdata, implementera enbart-tillägg-loggar eller säkerställa att vissa poster aldrig kan ändras.

### Hur Regler Tillämpas

Säkerhetsregler kan ställas in separat för varje typ av databasoperation:

- **Läsa data (SELECT)** - Vem kan visa poster
- **Skapa data (INSERT)** - Vem kan lägga till nya poster
- **Uppdatera data (UPDATE)** - Vem kan ändra befintliga poster
- **Radera data (DELETE)** - Vem kan ta bort poster

AI kan kombinera flera regler med ELLER-logik. Till exempel ger "poster kan visas av ägaren ELLER vem som helst i samma organisation" flexibel åtkomst samtidigt som säkerheten upprätthålls.

### Verkliga Exempel

**Personlig Att-göra-app**:
AI sätter upp "Endast Ägare"-regler så varje användare bara ser sina egna uppgifter. När du skapar en uppgift kan bara du se, redigera eller radera den.

**Företagsblogg**:
Publicerade inlägg är "Publika" för läsning, men bara "Autentiserade" användare (ditt team) kan skapa nya inlägg, och bara "Ägaren" (inläggsförfattaren) kan redigera eller radera dem.

**Multi-tenant SaaS**:
AI använder "Samma Organisation"-regler så Företag A:s användare inte kan se Företag B:s data. Ditt interna team använder "Primär Organisation"-regler för att komma åt administrativa funktioner som kunder inte ska se.

**Avdelningsresurser**:
"Fältmatchning"-regler säkerställer att säljare bara ser säljmaterial, ingenjörer ser ingenjörsdokument, etc., baserat på avdelningsattribut automatiskt.

## Åtkomst Till Din Data

Du kan arbeta med din databas på tre sätt:

### 1. Administrationsgränssnitt

Det visuella administrationsgränssnittet låter dig bläddra, söka, redigera och exportera din data genom ett kalkylbladsliknande gränssnitt. Du kan filtrera data, sortera kolumner, redigera poster inline och exportera till CSV eller JSON. Gränssnittet genererar automatiskt formulär baserat på din tabellstruktur, validerar data enligt dina regler och hanterar relationer mellan tabeller.

### 2. Från Din Applikation

Din frontend-applikation kan fråga databasen direkt genom ett REST API som AI automatiskt konfigurerar. API:et använder PostgREST-kompatibel syntax, som är en allmänt accepterad standard för databas-API:er. Alla säkerhetsregler du ställt in verkställs automatiskt — användare kan endast komma åt data de ska se.

### 3. Genom Edge Functions

Edge functions (serverkod) kan komma åt din databas med full kraft samtidigt som de respekterar säkerhetsregler. AI skapar dessa funktioner när du behöver implementera komplex affärslogik, integrera med externa tjänster eller utföra operationer som inte ska köras i webbläsaren.

## Bästa Praxis

✅ **Låt AI hantera struktur** - Beskriv vad du behöver och låt AI skapa tabellerna. Oroa dig inte för tekniska databasdetaljer.

✅ **Använd beskrivande namn** - När du pratar med AI, använd tydliga namn för din data (som "blogginlägg" snarare än "objekt" eller "sak").

✅ **Utnyttja automatiska funktioner** - AI sätter upp relationer, validering och säkerhet automatiskt. Lita på dessa system istället för att försöka bygga egna.

❌ **Åsidosätt inte standardinställningar** - De automatiska ID-kolumnerna, tidsstämplarna och mjuka raderingarna finns där av goda skäl. Låt dem fungera.

❌ **Hoppa inte över säkerhet** - Beskriv alltid vem som ska kunna se och ändra din data när du skapar nya funktioner.

---

**Relaterad Dokumentation:**
- [Hemlighetshantering →](/sv/cloud/secrets)
- [Edge Functions →](/sv/cloud/functions)
- [Administrationsgränssnitt →](/sv/cloud/admin)
