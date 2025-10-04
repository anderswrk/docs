# E-postleverans

## Skicka E-post från Din Applikation

Din applikation kan skicka e-post för användarregistrering, lösenordsåterställningar, notifieringar, kvitton eller andra meddelandebehov. Kliv inkluderar ett komplett e-postsystem med hastighetsbegränsning, mallhantering och stöd för anpassade SMTP-servrar.

**Direkt ur lådan** kan du skicka e-post omedelbart med standardplattformservrar. Men som andra plattformar (som Supabase) har dessa standardinställningar strikta hastighetsbegränsningar — bara 2 e-postmeddelanden per dag och 2 per timme — för att förhindra missbruk. För produktionsapplikationer vill du konfigurera din egen e-posttjänst.

## Anpassad SMTP-konfiguration

När du ställer in din egen SMTP-server ökar dina hastighetsbegränsningar dramatiskt till 500 e-postmeddelanden per dag och 50 per timme som standard, med möjligheten att konfigurera ännu högre gränser (upp till 10 000 per dag) när dina behov växer.

**Vad du får med anpassad SMTP**:
- **Dramatiskt högre gränser** - 500/dag och 50/timme istället för 2/dag och 2/timme
- **Din egen avsändaradress** - E-post kommer från din domän istället för generiska adresser
- **Leveransspårning** - Bättre synlighet av e-postleverans och studsar
- **Krypterade autentiseringsuppgifter** - Ditt SMTP-lösenord är krypterat och visas aldrig i sin helhet
- **Anslutningstestning** - Verifiera att dina SMTP-inställningar fungerar innan du sparar dem
- **Automatisk hantering** - AI kan konfigurera SMTP-inställningar när du tillhandahåller autentiseringsuppgifter

## Ställa In E-postleverans

När du berättar för AI att du vill skicka e-post kommer den att guida dig genom installationsprocessen. Du behöver autentiseringsuppgifter från en e-posttjänstleverantör — företag som specialiserar sig på pålitlig e-postleverans. AI kan konfigurera anslutningen automatiskt när du tillhandahåller nödvändig information.

**Vanliga e-posttjänstleverantörer**:

### Gmail / Google Workspace
Bra för små projekt och team som redan använder Google-tjänster. Gratis nivå tillgänglig, men med dagliga sändningsgränser. Kräver appspecifikt lösenord för säkerhet.

### SendGrid
Populärt val för transaktionsmail (kvitton, notifieringar, lösenordsåterställningar). Gratis nivå inkluderar 100 e-postmeddelanden per dag. Skalar bra för växande applikationer. Erbjuder detaljerad leveransanalys.

### Mailgun
Utvecklarvänlig tjänst med utmärkt leveransförmåga. Gratis nivå ger 5 000 e-postmeddelanden per månad. Starkt API- och webhook-stöd för spårning av leveransstatus.

### Amazon SES (Simple Email Service)
Extremt kostnadseffektivt för högvolymssändning (så lågt som 0,10 USD per tusen e-postmeddelanden). Kräver AWS-konto. Bäst för applikationer som redan använder Amazon-infrastruktur.

### Postmark
Fokuserar specifikt på transaktionsmail med utmärkta leveransfrekvenser. Betoning på hastighet och tillförlitlighet. Detaljerad analys och studshantering.

### Mailchimp Transactional (tidigare Mandrill)
Bra alternativ om du redan använder Mailchimp för marknadsföringsmail. Pålitlig leverans med integration i Mailchimps större e-postplattform.

### Loopia Email
Svensk e-posttjänst med lokalt stöd och bra integration för svenska företag.

### Resend
Modernt e-post-API designat specifikt för utvecklare. Rent gränssnitt, utmärkt dokumentation, generös gratis nivå.

## Hur SMTP-konfiguration Fungerar

När du väljer en e-posttjänstleverantör och skapar ett konto hos dem får du anslutningsdetaljer: en serveradress, portnummer, användarnamn och lösenord. När du berättar för AI att du vill ställa in e-postleverans och tillhandahåller dessa detaljer:

1. **Lagrar autentiseringsuppgifter säkert** - Ditt lösenord krypteras i databasen
2. **Konfigurerar anslutningsinställningar** - Serveradress, port, krypteringstyp (TLS/SSL)
3. **Testar anslutningen** - Verifierar att inställningarna fungerar innan de sparas
4. **Ställer in hastighetsbegränsningar** - Konfigurerar lämpliga dagliga och timvisa gränser
5. **Uppdaterar avsändarinformation** - Ställer in din "från"-adress och visningsnamn

Från den punkten framåt, när din applikation skickar e-post, går de genom din konfigurerade tjänst snarare än standardplattformservrarna.

## Hantera E-postinställningar

Genom administratörsgränssnittet kan du:
- Visa aktuell SMTP-konfiguration med maskerade autentiseringsuppgifter
- Se e-postanvändning (hur många som skickats denna timme och idag)
- Uppdatera avsändarinformation (från-adress, visningsnamn, svara-till-adress)
- Testa din anslutning för att verifiera inställningar
- Justera hastighetsbegränsningar baserat på dina behov
- Återställ till standardplattformservrar om det behövs

AI kan också uppdatera dessa inställningar för dig om du vill byta leverantör eller ändra gränser.

## Säkerhet och Integritet

**Krypterad lagring**: Ditt SMTP-lösenord krypteras i databasen och visas aldrig i sin helhet efter att du sparat det. Du kommer att se en maskerad version som `****xyz789` för att verifiera vilket lösenord som lagras utan att exponera hela värdet.

**Anslutningssäkerhet**: Systemet stöder modern TLS-kryptering för säker kommunikation med din e-postleverantör. Dina autentiseringsuppgifter överförs aldrig okrypterat.

**Hastighetsbegränsning**: Automatisk verkställighet förhindrar okontrollerad e-postsändning, skyddar både ditt rykte hos e-postleverantören och förhindrar oväntade kostnader.

## Bästa Praxis

✅ **Konfigurera anpassad SMTP tidigt** - Förlita dig inte på standardhastighetsbegränsningar (2/dag) för produktionsapplikationer. Ställ in din egen e-posttjänst.

✅ **Välj rätt leverantör** - Överväg dina volymsbehov, budget och om du behöver avancerade funktioner som detaljerad analys.

✅ **Övervaka användning** - Kontrollera e-postanvändningsstatistik i administratörsgränssnittet för att säkerställa att du håller dig inom dina hastighetsbegränsningar.

✅ **Testa innan publicering** - Använd SMTP-testanslutningsfunktionen för att verifiera att inställningarna fungerar korrekt.

❌ **Hoppa inte över testning** - Använd SMTP-testanslutningsfunktionen för att verifiera inställningar innan publicering.

❌ **Ignorera inte leveransförmåga** - Välj välrenommerade e-posttjänstleverantörer för att säkerställa att dina e-postmeddelanden faktiskt når mottagarna.

---

**Relaterad Dokumentation:**
- [E-postmallar →](/sv/cloud/email-templates)
- [Hemlighetshantering →](/sv/cloud/secrets)
- [Administratörsgränssnitt →](/sv/cloud/admin)
