# Vanliga Frågor

Hitta svar på de vanligaste frågorna om Kliv.

## Kom Igång

### Vad är Kliv?
Kliv är en AI-driven webbutvecklingsplattform som låter dig bygga React-applikationer genom naturlig konversation. Istället för att skriva kod beskriver du vad du vill bygga, och Kliv genererar koden åt dig.

### Behöver jag kunna koda?
Nej! Kliv är designat för alla, oavsett kodningsupplevelse. Du kan bygga professionella applikationer genom att bara beskriva vad du vill ha på vanlig svenska.

### Vilka teknologier använder Kliv?
Kliv bygger applikationer med moderna webbteknologier:
- React 18 med TypeScript
- Tailwind CSS för styling
- Vite för snabba builds
- Shadcn/ui komponentbibliotek
- Olika andra moderna bibliotek efter behov

### Är Kliv gratis att använda?
Ja! Kliv erbjuder en gratisplan med 5 krediter per dag (upp till 30 per månad) som inkluderar full webbplatshosting på kliv.site-domäner. Gratis sajter visar en liten "Made with Kliv"-märkning och stöder upp till 10 teammedlemmar. Professionella planer tillhandahåller månatliga kreditbidrag, anpassat domänstöd, tar bort attributionsmärkningen och inkluderar obegränsat antal teammedlemmar.

## Bygga Applikationer

### Ska jag börja med en mall eller från grunden?
**Använd en mall om:** Du hittar en som är 70%+ lik dina behov, vill lansera snabbt eller bygger en vanlig typ av sajt. Mallar kommer fullt utbyggda med flera sidor och funktioner.

**Börja från grunden om:** Ditt koncept är unikt, du har specifika krav eller vill ha fullständig kreativ kontroll. Du behöver ge detaljerade initiala prompter, men du får ett helt anpassat resultat.

### Vilka typer av applikationer kan jag bygga?
Du kan bygga praktiskt taget vilken typ av webbapplikation som helst:
- **Snabba prototyper** och MVP:er för startups
- **Personliga webbplatser**, portföljer och bloggar
- **Medlemssajter** med användarautentisering
- **E-handelsbutiker** med produktkataloger
- **Affärsapplikationer** och dashboards
- **SaaS-applikationer** med användarhantering
- **Kreativa projekt** och interaktiva verktyg

### Hur fungerar krediter?
**Full kredit (1 kredit):** Används när AI:n vidtar åtgärder på ditt projekt - redigerar filer, gör ändringar, lägger till funktioner eller någon modifiering.

**Halv kredit (0,5 krediter):** Används för konversationssvar utan åtgärder - svarar på frågor, ger vägledning eller förklaringar.

**Gratis plan:** 5 krediter dagligen, 30 månadsmax, uppdateras automatiskt varje dag.
**Pro-planer:** Månatliga bidrag som kan användas när som helst, återställs varje faktureringscykel.

### Hur kommunicerar jag med Kliv effektivt?
**För from-scratch builds:** Ge detaljerade initiala prompter inklusive företagsnamn, adress, tjänster som erbjuds, prissättning, kontaktdetaljer, målgrupp och designpreferenser. Ju mer specifik du är, desto bättre resultat får du.

**För modifieringar:** Referera till specifika sektioner ("I hero-sektionen..."), var specifik om färger och positionering, och be att få se mobilversioner när det behövs.

### Kan jag modifiera den genererade koden?
Ja! Du kan visa all genererad kod och till och med exportera den för att arbeta på lokalt. Kliv stöder också import av befintliga React-projekt.

### Hur lägger jag till backend-funktionalitet som användarkonton?
För alla backend-funktioner (användarautentisering, databaser, server-side bearbetning) behöver du ansluta Supabase-integration. Klicka på Supabase-knappen i ditt projekt för att sätta upp ett konto och länka det. När det är anslutet kan AI:n implementera:
- Användarregistrerings- och inloggningssystem
- Databaslagring och hantering
- Realtidsfunktioner och prenumerationer
- Server-side funktioner och bearbetning
- Fillagring och hantering

### Hur fungerar GitHub-integration?
När du ansluter GitHub genererar varje AI-ändring automatiskt en commit och pushar till ditt repository. Detta ger:
- Komplett källkodsbackup under din kontroll
- Fullständig versionshistorik för ditt projekt
- Förmåga att arbeta lokalt eller samarbeta med utvecklare
- Dubbelriktad synk mellan Kliv och GitHub

Vi rekommenderar att göra ändringar primärt i Kliv för att dra full nytta av AI-assistans.

## Tekniska Frågor

### Kan jag använda mina egna komponenter?
Ja, du kan be Kliv att skapa anpassade komponenter eller modifiera befintliga. Du kan också importera komponenter från externa bibliotek.

### Hur hanterar Kliv responsiv design?
Alla applikationer byggda med Kliv är responsiva som standard och tillgängliga för användare med funktionsnedsättningar. Kliv använder React, TypeScript, Tailwind CSS och Vite med automatisk mobiloptimering, semantisk HTML-struktur och tillgänglighetskompatibilitet inbyggt.

### Vad är skillnaden mellan mallar och from-scratch builds?
**Mallar:** Få fullt funktionella sajter med flera sidor och funktioner redan byggda. Perfekt för snabba lanseringar när du hittar något 70%+ likt dina behov. Du är något begränsad av mallstrukturen men får ett försprång.

**Från grunden:** Kräver detaljerade initiala prompter men ger fullständig kreativ kontroll. Du får ett skelett från början och behöver bygga ut varje sektion genom konversation, men resultatet är helt anpassat.

### Kan jag integrera med externa API:er?
Absolut! Kliv kan hjälpa dig att integrera med vilket REST API, GraphQL endpoint eller tredjepartstjänst som helst. Beskriv bara vad du vill ansluta till.

### Vad gäller SEO och prestanda?
Kliv följer moderna webbutvecklingsbästa praxis:
- Semantisk HTML-struktur
- Optimerade bilder och tillgångar
- Snabba laddningstider
- SEO-vänlig markup
- Tillgänglighetskompatibilitet

## Distribution och Hosting

### Hur distribuerar jag min applikation?
Klicka på "Publicera"-knappen i Kliv så distribueras din applikation omedelbart. Du får en live-URL som du kan dela direkt.

### Hur fungerar publicering?
Sajter publiceras automatiskt med unika URL:er som `yoursajt.kliv.site`. URL:en genereras baserat på ditt mallnamn eller AI-analys av din from-scratch prompt. Du kan redigera subdomännamnet när som helst (måste vara unikt över alla Kliv-sajter).

**Auto-publicering** är aktiverat som standard - ändringar går live omedelbart. Du kan inaktivera detta för att manuellt kontrollera när ändringar publiceras.

### Kan jag använda min egen domän?
Ja! Pro-prenumeranter kan ansluta anpassade domäner genom att lägga till en CNAME-post som pekar till `sites.kliv.dev`. Kliv hanterar automatiskt SSL-certifikat och tillhandahåller en installationsguide med leverantörsspecifika instruktioner. Anpassade domäner tar bort "Made with Kliv"-märkningen helt.

### Var är applikationerna värd?
Kliv-applikationer är värd på ett globalt CDN för snabba laddningstider världen över. All hosting inkluderar SSL-certifikat och automatisk skalning.

### Kan jag exportera min kod?
Ja, du kan exportera hela ditt projekt som en standard React-applikation som du kan köra lokalt eller distribuera var som helst.

## Teamsamarbete

### Kan jag arbeta med teammedlemmar?
Ja! Varje Kliv-konto stöder flera användare som delar samma projekt och kreditpool. Gratis konton stöder upp till 10 användare, Pro-konton har obegränsat antal teammedlemmar utan extra kostnad.

### Hur fungerar användarroller?
**Vanliga användare** kan redigera projekt och använda AI-assistenten. **Admin-användare** kan också hantera teamet, skicka inbjudningar och komma åt kontoinställningar. Enterprise-konton stöder anpassade roller med granulära behörigheter.

### Hur bjuder jag in teammedlemmar?
Gå till användarhantering, ange deras e-postadress och skicka en inbjudan. De får ett e-postmeddelande för att gå med i ditt konto och komma åt delade projekt.

## Konto och Fakturering

### Vilka är de olika prenumerationsplanerna?
**Gratis:** 5 krediter dagligen (30/månad), kliv.site hosting, "Made with Kliv"-märkning, upp till 10 användare
**Professionell:** Månatliga kreditbidrag, anpassade domäner, ingen attributionsmärkning, obegränsat antal användare, prioriterad support
**Enterprise:** SAML/SSO, anpassade roller, dedikerade instanser, avancerade funktioner

### Hur uppgraderar jag min plan?
Besök prenumerationshanteringssidan i kontoinställningar. Du kan uppgradera, nedgradera eller avbryta när som helst genom det säkra Stripe-gränssnittet.

### Hur hanteras betalning?
Alla betalningar bearbetas säkert genom Stripe. Kliv ser aldrig din betalningsinformation, vilket säkerställer företagsklass säkerhet för alla transaktioner.

## Felsökning

### Min applikation fungerar inte som förväntat
Prova dessa steg:
1. Kontrollera konsolen för felmeddelanden
2. Beskriv problemet för Kliv för automatisk felsökning
3. Granska senaste ändringar i chatthistoriken
4. Använd versionshistoriken för att återställa om nödvändigt

### Förhandsgranskningen uppdateras inte
- Uppdatera förhandsgranskningspanelen
- Kontrollera din internetanslutning
- Rensa din webbläsarcache
- Kontakta support om problemet kvarstår

### Jag kan inte komma åt mitt projekt
- Verifiera att du är inloggad på rätt konto
- Kontrollera om projektet av misstag raderades
- Kontakta support för kontoåterställningshjälp

### Hur rapporterar jag buggar?
Använd feedbackknappen i gränssnittet eller kontakta support direkt. Inkludera:
- Beskrivning av problemet
- Steg för att återskapa
- Webbläsar- och enhetsinformation
- Skärmbilder om det hjälper

## Bästa Praxis

### Hur kan jag få bättre resultat från Kliv?
- Var specifik och detaljerad i dina förfrågningar
- Ge exempel eller referenser när möjligt
- Testa ofta i förhandsgranskningen
- Dela upp komplexa funktioner i mindre delar
- Be om förklaringar för att förstå koden

### Vad bör jag undvika?
- Vaga eller tvetydiga förfrågningar
- Att be om för många ändringar på en gång
- Ignorera responsiva designöverväganden
- Glömma att testa på olika skärmstorlekar

### Hur lär jag mig mer om webbutveckling?
Även om Kliv hanterar kodningen kan förståelse för webbutvecklingskoncept hjälpa:
- Lär dig grundläggande HTML-, CSS- och JavaScript-koncept
- Förstå responsiva designprinciper
- Bekanta dig med React-koncept
- Studera bra UI/UX-designpraxis

## Få Hjälp

### Hur kontaktar jag support?
- Använd hjälpknappen i Kliv-gränssnittet
- E-posta support@kliv.dev
- Kontrollera dokumentationen för svar
- Gå med i vår community Discord-server

### Vilken information bör jag inkludera i supportförfrågningar?
- Din kontoets e-postadress
- Projektnamn eller URL
- Detaljerad beskrivning av problemet
- Steg för att återskapa problemet
- Skärmbilder eller skärminspelningar om det hjälper

### Hur snabbt får jag svar?
- Gratis plan: 48-72 timmar
- Betalda planer: 24 timmar eller mindre
- Kritiska problem: Svar samma dag
- Akutsupport tillgänglig för enterprise-kunder

Har du fortfarande frågor? [Kontakta vårt supportteam](mailto:support@kliv.dev).