# Hemlighetshantering

## Säker Autentiseringsuppgiftslagring

När din applikation behöver ansluta till externa tjänster — som att skicka e-post genom SendGrid, bearbeta betalningar med Stripe eller använda OpenAI för AI-funktioner — behöver du lagra API-nycklar och autentiseringsuppgifter säkert. Klivs hemlighetshanteringssystem hanterar detta automatiskt.

**Vad som gör hemligheter säkra**:
- **Krypterad lagring** i databasen
- **Visas aldrig** i sin helhet efter att du sparat dem
- **Injiceras automatiskt** i edge functions när det behövs
- **Kontoövergripande** så du bara lagrar varje nyckel en gång
- **Granskningsspår** som spårar när hemligheter skapades eller uppdaterades

## Hur Hemligheter Fungerar

När du berättar för AI att du vill integrera med en extern tjänst kommer den att fråga efter nödvändiga autentiseringsuppgifter. När du tillhandahåller en API-nyckel lagrar AI den säkert med ett beskrivande namn (som `OPENAI_API_KEY` eller `STRIPE_SECRET_KEY`). Från och med då kan vilken edge function som helst som behöver den autentiseringsuppgiften komma åt den automatiskt.

**Maskerad visning**: Efter att ha sparat en hemlighet ser du bara en delvis maskerad version i administrationsgränssnittet. Till exempel visas `sk-proj-abc123xyz789` som `sk-p****9789`. Detta låter dig verifiera vilken nyckel som är vilken utan att exponera hela värdet.

**Automatisk injektion**: När en edge function körs är alla dina hemligheter automatiskt tillgängliga som miljövariabler. AI inkluderar rätt hemlighet i funktionskoden, och plattformen injicerar det faktiska värdet vid körning.

## Hantera Hemligheter

Genom administrationsgränssnittet kan du:
- Visa alla dina hemligheter (med maskerade värden)
- Lägga till nya hemligheter eller uppdatera befintliga
- Radera hemligheter du inte längre behöver
- Se när varje hemlighet skapades eller senast uppdaterades

AI kan också skapa och uppdatera hemligheter åt dig när du beskriver integrationer du vill bygga.

## Vanliga Användningar för Hemligheter

- **E-posttjänster**: SendGrid, Mailgun eller SMTP-autentiseringsuppgifter
- **Betalningsbearbetning**: Stripe, PayPal eller andra betalnings-API-nycklar
- **AI-tjänster**: OpenAI, Anthropic eller Google API-nycklar
- **SMS/samtal**: Twilio-autentiseringstokens
- **Externa API:er**: Alla tredjepartstjänster din app integrerar med
- **Webhooks**: Signeringshemligheter för att verifiera inkommande webhooks
- **Databasanslutningar**: Anslutningssträngar för externa databaser

## Bästa Praxis

✅ **Använd beskrivande namn** - Namnge hemligheter tydligt som `SENDGRID_API_KEY` snarare än `key1` eller `secret`.

✅ **Rotera regelbundet** - Uppdatera hemligheter periodiskt, särskilt för kritiska tjänster.

✅ **Radera när du är klar** - Ta bort hemligheter för tjänster du inte längre använder.

❌ **Dela inte hemligheter** - Varje miljö (test, produktion) bör använda olika API-nycklar.

❌ **Commit inte till kod** - Hemligheter lagras separat från din kod av en anledning. Lägg aldrig API-nycklar direkt i dina källfiler.

---

**Relaterad Dokumentation:**
- [Databas →](/sv/cloud/database)
- [Edge Functions →](/sv/cloud/functions)
- [Administrationsgränssnitt →](/sv/cloud/admin)
