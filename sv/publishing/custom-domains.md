# Anpassade Domäner (Pro-funktion)

Anpassade domäner tillåter Pro-prenumeranter att använda sin egen märkeswebbadress istället för standard `yoursajt.kliv.site`-subdomänen. Denna professionella touch hjälper till att etablera din varumärkesidentitet och skapar en mer minnesvärd upplevelse för dina besökare.

## Krav

För att ansluta en anpassad domän behöver du en aktiv Pro-prenumeration, ägande av en domän från vilken registrar som helst och tillgång till att modifiera din domäns DNS-inställningar. Domänen kan köpas från vilken leverantör som helst—det finns inga begränsningar för vilken registrar du använder.

## Installationsprocess

Domänanslutningsprocessen är enkel och guidad. Först, köp din önskade domän från vilken leverantör som helst som GoDaddy, Namecheap, Cloudflare eller andra. När du äger domänen, navigera till dina projektinställningar i Kliv och leta efter den anpassade domänsektionen.

Klivs domänguide leder dig genom varje steg av anslutningsprocessen. Du kommer att ange ditt domännamn och systemet kommer att ge specifika DNS-konfigurationsinstruktioner skräddarsydda för din domän och valda inställning. Efter att ha uppdaterat dina DNS-inställningar enligt instruktionerna kommer Kliv automatiskt att verifiera anslutningen och tillhandahålla ett SSL-certifikat för säker HTTPS-åtkomst.

Hela processen slutförs vanligtvis inom minuter när DNS-ändringar propagerar, även om initial DNS-propagering kan ta upp till 24 timmar beroende på din leverantör.

## DNS-konfiguration

Grundkravet för att ansluta din domän är att lägga till en CNAME-post som pekar din domän till Klivs hostinginfrastruktur. Du behöver skapa en CNAME-post med värdet `sites.kliv.dev`. För rotdomäner (som `yourdomain.com`) använd `@` som postnamn. För subdomäner (som `www.yourdomain.com`) använd subdomänprefixet som postnamn.

Denna CNAME-post berättar för internet att när någon besöker din domän bör de dirigeras till Klivs servrar där din webbplats är värd. Inställningen är densamma oavsett vilken domänleverantör du använder, även om gränssnittet för att lägga till DNS-poster varierar mellan leverantörer.

## Stödda Leverantörer

Även om vilken domänleverantör som helst fungerar med Kliv tillhandahåller vi specialiserade installationsinstruktioner för populära registrars för att göra processen enklare. Dessa inkluderar steg-för-steg-guider med skärmbilder för GoDaddy, Namecheap, Cloudflare, Google Domains och flera andra. Om din leverantör inte är specifikt listad, oroa dig inte—de generiska CNAME-installationsinstruktionerna fungerar universellt.

De specialiserade guiderna hjälper dig att navigera varje leverantörs unika DNS-hanteringsgränssnitt, vilket säkerställer att du lägger till rätt posttyp på rätt plats utan förvirring.

## SSL-certifikat

Kliv hanterar automatiskt SSL-certifikatgenerering och hantering för din anpassade domän. När din domän verifieras som korrekt pekande till våra servrar begär vi omedelbart och installerar ett certifikat från Let's Encrypt, vilket säkerställer att din sajt är tillgänglig över säker HTTPS inom minuter.

Den automatiska certifikathanteringen inkluderar förnyelse före utgång, så du behöver aldrig oroa dig för certifikatunderhåll. Detta hands-off-approach fungerar för den stora majoriteten användare och ger företagsklass säkerhet utan komplexitet.

För avancerade användare med specifika säkerhetskrav stöder Kliv också manuell certifikatuppladdning. Detta alternativ kräver att du skaffar och hanterar certifikatförnyelser själv, så det rekommenderas endast när du har särskilda compliance- eller säkerhetsbehov som kräver anpassade certifikat.

## Domänverifiering och Aktivering

Efter att du uppdaterat dina DNS-inställningar övervakar Kliv kontinuerligt din domän för att upptäcka när ändringarna har propagerat. Vårt system kontrollerar var få minuter tills det bekräftar att din domän pekar korrekt till våra servrar. När den verifieras tillhandahåller vi automatiskt ditt SSL-certifikat och aktiverar din anpassade domän.

Din ursprungliga `yoursajt.kliv.site`-URL förblir funktionell och omdirigerar automatiskt besökare till din anpassade domän, vilket säkerställer att inga länkar bryts under övergången. Denna sömlösa överlämning betyder att du kan dela din anpassade domän omedelbart utan att oroa dig för tillgänglighet.

## Vanliga Problem

DNS-propagering är den vanligaste källan till förseningar när anpassade domäner ansluts. Ändringar av DNS-poster kan ta allt från några minuter till 24 timmar att propagera globalt, beroende på din DNS-leverantör och internetleverantörer världen över. Om din domän inte fungerar omedelbart är detta vanligtvis varför.

För att felsöka, verifiera först att du har lagt till CNAME-posten korrekt med värdet `sites.kliv.dev`. Dubbelkolla posttypen (CNAME, inte A-post) och säkerställ att det inte finns några skrivfel i målvärdet. Att rensa din webbläsarcache eller prova en annan webbläsare kan hjälpa om du ser föråldrade resultat.

Om ditt SSL-certifikat visar som väntande utöver 10-15 minuter, säkerställ att din domän pekar korrekt först, eftersom certifikat endast kan utfärdas efter framgångsrik domänverifiering. De flesta certifikatproblem löser sig automatiskt när DNS-propagering slutförs.

---

**Behöver hjälp?** [Kontakta support →](/sv/help/getting-help)