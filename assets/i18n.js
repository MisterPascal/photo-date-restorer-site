/* Photo Date Restorer – lightweight i18n.
   No cookies, no trackers, no network. The chosen language is stored only in
   localStorage (functional preference). German is the default. */
(function () {
  "use strict";

  // Native language names shown in the switcher.
  var LANGS = [
    ["de", "Deutsch"],
    ["en", "English"],
    ["es", "Español"],
    ["fr", "Français"],
    ["it", "Italiano"],
    ["pt", "Português"],
    ["pl", "Polski"],
    ["nl", "Nederlands"],
    ["tr", "Türkçe"]
  ];

  var T = {
    de: {
      "meta.title": "Photo Date Restorer – Fotodaten aus Dateinamen wiederherstellen",
      "meta.desc": "Stelle Fotodaten aus unterstützten Chat-Dateinamen wieder her und behebe Sortierprobleme in der Galerie – lokal auf deinem Android-Gerät.",
      "nav.how": "So funktioniert's", "nav.pricing": "Preise", "nav.faq": "FAQ",
      "nav.privacy": "Datenschutz", "nav.support": "Support",
      "cta.play": "Bei Google Play laden",
      "hero.eyebrow": "Lokal • Kein Konto • Kostenlos starten",
      "hero.h1": "Korrigiere das Datum deiner Chat-Fotos aus dem Dateinamen.",
      "hero.lead": "Wenn Fotos kopiert, exportiert oder wiederhergestellt werden, sortiert deine Galerie sie manchmal nach dem falschen Datum. Photo Date Restorer liest das Datum aus Dateinamen wie <code>IMG-20240510-WA0001.jpg</code> und hilft, die richtige Reihenfolge wiederherzustellen – lokal auf deinem Gerät.",
      "problem.h2": "Warum deine Fotos in der falschen Reihenfolge erscheinen",
      "problem.sub": "Ein häufiger Nebeneffekt beim Wechsel zwischen Handys, Apps und Backups.",
      "problem.c1.t": "Metadaten gehen beim Kopieren verloren",
      "problem.c1.b": "Beim Kopieren, Exportieren oder Wiederherstellen fehlt das ursprüngliche Aufnahmedatum in der Datei oft oder wird ersetzt.",
      "problem.c2.t": "Die Galerie nutzt das falsche Datum",
      "problem.c2.b": "Ohne Aufnahmedatum greift die Galerie auf das Kopier- oder Änderungsdatum zurück – alte Fotos springen nach oben.",
      "problem.c3.t": "Das Datum steckt noch im Dateinamen",
      "problem.c3.b": "Viele Chat-Fotos behalten das ursprüngliche Datum im Dateinamen, auch wenn die internen Metadaten fehlen.",
      "problem.c4.t": "Genau das nutzt die App",
      "problem.c4.b": "Photo Date Restorer liest das Datum aus unterstützten Dateinamen-Mustern und hilft, die korrekte Sortierung wiederherzustellen.",
      "how.h2": "So funktioniert's",
      "how.s1.t": "Fotoordner auswählen", "how.s1.b": "Wähle den Ordner mit deinen Chat-Fotos oder exportierten Bildern.",
      "how.s2.t": "Erkannte Daten ansehen", "how.s2.b": "Sieh dir an, bei welchen Dateien ein Datum aus dem Dateinamen erkannt wurde – bevor etwas geändert wird.",
      "how.s3.t": "Daten im Stapel wiederherstellen", "how.s3.b": "Wende die korrigierten Daten in einem Durchgang auf deine ausgewählten Fotos an.",
      "how.note": "Funktioniert mit unterstützten Dateinamen-Mustern, bei denen ein gültiges Datum erkannt werden kann.",
      "benefits.h2": "Das bekommst du",
      "benefits.b1.t": "Lokale Verarbeitung", "benefits.b1.b": "Die App ist darauf ausgelegt, Dateinamen und Metadaten direkt auf deinem Gerät zu verarbeiten.",
      "benefits.b2.t": "Stapel-Verarbeitung", "benefits.b2.b": "Bearbeite viele Fotos auf einmal, statt jede Datei einzeln zu ändern.",
      "benefits.b3.t": "Vorschau vor Änderungen", "benefits.b3.b": "Prüfe die erkannten Daten, bevor etwas geschrieben wird.",
      "benefits.b4.t": "Kein Konto nötig", "benefits.b4.b": "Keine Registrierung, kein Login. Einfach App öffnen und loslegen.",
      "benefits.b5.t": "Kostenlos mit 100 Fotos starten", "benefits.b5.b": "Stelle bis zu 100 Fotos kostenlos wieder her und teste, ob es für dich funktioniert.",
      "benefits.b6.t": "Für Sortierprobleme gemacht", "benefits.b6.b": "Speziell für Galerie-Sortierprobleme nach Migrationen und Exporten entwickelt.",
      "files.h2": "Unterstützte Dateinamen",
      "files.sub": "Beispiele für Dateinamen-Muster, bei denen ein Datum meist erkannt werden kann:",
      "files.note": "Unterstützte Muster können je nach App-Version variieren. Die App zeigt vor Änderungen eine Vorschau.",
      "shots.h2": "Ein Blick in die App",
      "shots.sub": "Screenshots folgen in Kürze. Die Platzhalter unten zeigen, wo sie erscheinen.",
      "shots.p1": "Screenshot 1<br>Ordner auswählen", "shots.p2": "Screenshot 2<br>Erkannte Daten ansehen", "shots.p3": "Screenshot 3<br>Im Stapel wiederherstellen",
      "price.h2": "Einfache, transparente Preise",
      "price.sub": "Kostenlos starten. Den vollen Stapel nur freischalten, wenn du ihn brauchst.",
      "price.free.t": "Kostenlos", "price.free.price": "Kostenlos", "price.free.desc": "Bis zu 100 Fotos wiederherstellen",
      "price.free.l1": "Bis zu 100 Fotos wiederherstellen", "price.free.l2": "Erkannte Daten als Vorschau", "price.free.l3": "Kein Konto nötig",
      "price.full.badge": "Ideal für große Exporte", "price.full.t": "Voller Stapel freischalten", "price.full.price": "7,99 €", "price.full.desc": "Einmalkauf",
      "price.full.l1": "Alle unterstützten Fotos wiederherstellen", "price.full.l2": "Einmalkauf, kein Abo", "price.full.l3": "Ideal für große Exporte und Handywechsel",
      "price.note": "Optional können später belohnte Werbeanzeigen (Rewarded Ads) hinzugefügt werden, um eine kleine Anzahl zusätzlicher Fotos freizuschalten.",
      "privacy.teaser.h2": "Deine Fotos bleiben auf deinem Gerät",
      "privacy.teaser.p": "Die App ist darauf ausgelegt, Dateinamen und Metadaten lokal zu verarbeiten. Es ist kein Konto erforderlich, und deine Fotos werden nicht auf unsere Server hochgeladen.",
      "privacy.teaser.btn": "Vollständige Datenschutzerklärung lesen",
      "faq.h2": "Häufige Fragen",
      "faq.q1": "Stellt das gelöschte Fotos wieder her?",
      "faq.a1": "Nein. Die App stellt keine gelöschten Dateien wieder her. Sie hilft nur, Datumsangaben für Dateien wiederherzustellen, die bereits auf deinem Gerät vorhanden sind.",
      "faq.q2": "Funktioniert es ohne Internet?",
      "faq.a2": "Die Kernfunktion – Daten aus Dateinamen lesen und wiederherstellen – ist für die lokale Verarbeitung auf deinem Gerät ausgelegt. Eine Internetverbindung kann für Käufe oder, falls später hinzugefügt, für optionale Werbung genutzt werden.",
      "faq.q3": "Verändert es meine Originaldateien?",
      "faq.a3": "Die App sollte vor Änderungen eine Vorschau anbieten. Je nach gewähltem Modus erstellt sie korrigierte Kopien oder aktualisiert die Metadaten direkt. Bewahre wichtige Fotos immer als Backup auf.",
      "faq.q4": "Welche Dateinamen werden unterstützt?",
      "faq.a4": "Dateinamen, die ein erkennbares Datum enthalten, z. B. <code>IMG-20240510-WA0001.jpg</code> oder <code>IMG_20240510_143012.jpg</code>. Unterstützte Muster können je nach App-Version variieren, und die App zeigt vor Änderungen eine Vorschau.",
      "faq.q5": "Ist das eine offizielle WhatsApp- oder Meta-App?",
      "faq.a5": "Nein. Diese App ist ein unabhängiges Hilfsprogramm und steht in keiner Verbindung zu WhatsApp LLC, Meta Platforms, Inc. oder deren verbundenen Unternehmen und wird von diesen weder unterstützt noch gesponsert. „WhatsApp“ wird nur erwähnt, um die Art der Dateinamen zu beschreiben, mit denen die App arbeiten kann.",
      "faq.q6": "Warum sind nur 100 Fotos kostenlos?",
      "faq.a6": "Mit der kostenlosen Stufe kannst du bis zu 100 Fotos wiederherstellen, um zu prüfen, ob die App für deine Dateien funktioniert, bevor du kaufst. Ein einmaliger Kauf („Voller Stapel“) hebt das Limit für größere Sammlungen auf.",
      "disclaimer": "Diese App ist ein unabhängiges Hilfsprogramm und steht in keiner Verbindung zu WhatsApp LLC, Meta Platforms, Inc. oder deren verbundenen Unternehmen und wird von diesen weder unterstützt noch gesponsert.",
      "copyright": "© 2026 Photo Date Restorer. Alle Rechte vorbehalten.",
      "nf.p": "Die gesuchte Seite existiert nicht oder wurde verschoben.",
      "pp.title": "Datenschutzerklärung – Photo Date Restorer",
      "pp.h1": "Datenschutzerklärung",
      "pp.updated": "Zuletzt aktualisiert: [DATUM EINFÜGEN]",
      "pp.intro": "Photo Date Restorer („die App“) ist darauf ausgelegt, Fotos lokal auf deinem Gerät zu verarbeiten. Diese Erklärung beschreibt, welche Daten die App verarbeitet und warum.",
      "pp.dataproc.h": "Verarbeitete Daten",
      "pp.dataproc.l1": "Dateinamen", "pp.dataproc.l2": "Datei-Metadaten", "pp.dataproc.l3": "Ausgewählte Bild- und Videodateien",
      "pp.purpose.h": "Zweck",
      "pp.purpose.l1": "Daten aus unterstützten Dateinamen-Mustern erkennen", "pp.purpose.l2": "Korrigierte Metadaten wiederherstellen oder exportieren",
      "pp.transfer.h": "Datenübertragung",
      "pp.transfer.l1": "Die App lädt deine Fotos nicht auf unsere Server hoch.", "pp.transfer.l2": "Es ist kein Konto erforderlich.",
      "pp.iap.h": "In-App-Käufe",
      "pp.iap.l1": "Die App kann Google Play Billing für die Abwicklung von Käufen verwenden.", "pp.iap.l2": "Die Zahlungsabwicklung erfolgt über Google Play. Wir erhalten oder speichern deine Zahlungsdaten nicht.",
      "pp.ads.h": "Werbung",
      "pp.ads.l1": "Die App enthält derzeit keine Werbung.", "pp.ads.l2": "Falls belohnte Werbeanzeigen hinzugefügt werden, kann die App einen Drittanbieter für Werbung verwenden. Diese Datenschutzerklärung muss aktualisiert werden, bevor Werbung aktiviert wird.",
      "pp.todo": "TODO vor Release / bei SDK-Änderungen: Prüfe, ob die App Analyse-Tools, Absturzberichte (z. B. Crashlytics) oder ein Werbe-SDK (z. B. AdMob) nutzt. Falls ja, nenne hier den Anbieter, die erhobenen Daten und einen Link zu dessen Datenschutzerklärung. Behaupte nicht „keine Datenerhebung“, wenn ein Drittanbieter-SDK aktiv ist.",
      "pp.rights.h": "Deine Rechte",
      "pp.rights.p": "Je nach Region (z. B. nach der EU-DSGVO) hast du möglicherweise das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen sowie deren Berichtigung oder Löschung zu fordern. Da die App auf lokale Verarbeitung ausgelegt ist und kein Konto erfordert, speichern wir in der Regel keine personenbezogenen Daten auf unseren Servern. Sollte sich dies ändern, wird diese Erklärung aktualisiert und ein Kontakt für Datenanfragen ergänzt.",
      "pp.children.h": "Kinder",
      "pp.children.p": "Die App ist ein universelles Hilfsprogramm und richtet sich nicht an Kinder.",
      "pp.changes.h": "Änderungen dieser Erklärung",
      "pp.changes.p": "Wir können diese Erklärung im Zuge der Weiterentwicklung der App aktualisieren. Das Datum „Zuletzt aktualisiert“ oben gibt die neueste Version an.",
      "pp.contact.h": "Kontakt",
      "pp.contact.p": "Bei Fragen zum Datenschutz kontaktiere uns unter:",
      "pp.back": "← Zurück zur Startseite",
      "sp.title": "Support – Photo Date Restorer",
      "sp.h1": "Support",
      "sp.intro": "Photo Date Restorer hilft, Fotodaten aus unterstützten Dateinamen-Mustern wiederherzustellen, damit deine Galerie sie korrekt sortieren kann. Wenn etwas nicht wie erwartet funktioniert, helfen wir gern.",
      "sp.contact.h": "Kontakt",
      "sp.contact.p": "Wenn du Hilfe brauchst, kontaktiere uns bitte unter:",
      "sp.include.h": "Was du angeben solltest",
      "sp.include.p": "Damit wir dein Anliegen schnell lösen können, gib bitte an:",
      "sp.include.l1": "Deine Android-Version", "sp.include.l2": "App-Version", "sp.include.l3": "Eine kurze Beschreibung des Problems", "sp.include.l4": "Einen Beispiel-Dateinamen, falls das Problem mit der Datumserkennung zusammenhängt",
      "sp.note": "Sende keine privaten Fotos, sofern nicht ausdrücklich darum gebeten wird.",
      "sp.back": "← Zurück zur Startseite"
    },

    en: {
      "meta.title": "Photo Date Restorer – Restore photo dates from filenames",
      "meta.desc": "Restore photo dates from supported chat-style filenames and fix gallery sorting problems locally on your Android device.",
      "nav.how": "How it works", "nav.pricing": "Pricing", "nav.faq": "FAQ",
      "nav.privacy": "Privacy", "nav.support": "Support",
      "cta.play": "Get it on Google Play",
      "hero.eyebrow": "Local • No account • Free start",
      "hero.h1": "Fix the date of your chat photos from their filenames.",
      "hero.lead": "When photos are copied, exported or restored, your gallery may sort them by the wrong date. Photo Date Restorer reads dates from filenames like <code>IMG-20240510-WA0001.jpg</code> and helps restore the correct order — locally on your device.",
      "problem.h2": "Why your photos appear in the wrong order",
      "problem.sub": "A common side effect of moving photos between phones, apps and backups.",
      "problem.c1.t": "Metadata gets lost on copy",
      "problem.c1.b": "When images are copied, exported or restored, the original capture date stored inside the file is often missing or replaced.",
      "problem.c2.t": "The gallery uses the wrong date",
      "problem.c2.b": "Without a capture date, your gallery may fall back to the file's copy or modification date — so old photos jump to the top.",
      "problem.c3.t": "The date is still in the filename",
      "problem.c3.b": "Many chat photos keep the original date inside the filename, even when the internal metadata is gone.",
      "problem.c4.t": "The app uses exactly that",
      "problem.c4.b": "Photo Date Restorer reads the date from supported filename patterns and helps restore correct sorting.",
      "how.h2": "How it works",
      "how.s1.t": "Select your photo folder", "how.s1.b": "Choose the folder that contains your chat photos or exported images.",
      "how.s2.t": "Preview detected dates", "how.s2.b": "See which files have a date detected from their filename before anything changes.",
      "how.s3.t": "Restore dates in batch", "how.s3.b": "Apply the corrected dates to your selected photos in one batch.",
      "how.note": "Works with supported filename patterns where a valid date can be detected.",
      "benefits.h2": "What you get",
      "benefits.b1.t": "Local processing", "benefits.b1.b": "The app is designed to process filenames and metadata directly on your device.",
      "benefits.b2.t": "Batch workflow", "benefits.b2.b": "Handle many photos at once instead of editing each file by hand.",
      "benefits.b3.t": "Preview before changes", "benefits.b3.b": "Review the detected dates before anything is written.",
      "benefits.b4.t": "No account required", "benefits.b4.b": "No sign-up, no login. Just open the app and start.",
      "benefits.b5.t": "Free start with 100 photos", "benefits.b5.b": "Restore up to 100 photos for free to see if it works for you.",
      "benefits.b6.t": "Built for sorting problems", "benefits.b6.b": "Designed specifically for gallery sorting issues after migrations and exports.",
      "files.h2": "Supported filenames",
      "files.sub": "Examples of filename patterns where a date can usually be detected:",
      "files.note": "Supported patterns may vary by app version. The app shows a preview before making changes.",
      "shots.h2": "A look at the app",
      "shots.sub": "Screenshots coming soon. Placeholders below show where they will go.",
      "shots.p1": "Screenshot 1<br>Select folder", "shots.p2": "Screenshot 2<br>Preview detected dates", "shots.p3": "Screenshot 3<br>Restore in batch",
      "price.h2": "Simple, transparent pricing",
      "price.sub": "Start for free. Unlock the full batch only if you need it.",
      "price.free.t": "Free", "price.free.price": "Free", "price.free.desc": "Restore up to 100 photos",
      "price.free.l1": "Restore up to 100 photos", "price.free.l2": "Preview detected dates", "price.free.l3": "No account required",
      "price.full.badge": "Best for large exports", "price.full.t": "Full Batch Unlock", "price.full.price": "€7.99", "price.full.desc": "One-time purchase",
      "price.full.l1": "Restore all supported photos", "price.full.l2": "One-time purchase, no subscription", "price.full.l3": "Best for large exports and phone migrations",
      "price.note": "Optional rewarded ads may be added later to unlock a small number of additional photos.",
      "privacy.teaser.h2": "Your photos stay on your device",
      "privacy.teaser.p": "The app is designed to process filenames and metadata locally. No account is required, and your photos are not uploaded to our servers.",
      "privacy.teaser.btn": "Read the full Privacy Policy",
      "faq.h2": "Frequently asked questions",
      "faq.q1": "Does this recover deleted photos?",
      "faq.a1": "No. The app does not recover deleted files. It only helps restore date information for files that already exist on your device.",
      "faq.q2": "Does it work without internet?",
      "faq.a2": "The core feature — reading dates from filenames and restoring them — is designed to work locally on your device. An internet connection may be used for purchases or, if added later, for optional ads.",
      "faq.q3": "Does it modify my original files?",
      "faq.a3": "The app should offer a preview before changes. Depending on the selected mode, it may create corrected copies or update metadata directly. Always keep a backup of important photos.",
      "faq.q4": "What filenames are supported?",
      "faq.a4": "Filenames that contain a recognizable date, such as <code>IMG-20240510-WA0001.jpg</code> or <code>IMG_20240510_143012.jpg</code>. Supported patterns may vary by app version, and the app shows a preview before making changes.",
      "faq.q5": "Is this an official WhatsApp or Meta app?",
      "faq.a5": "No. This app is an independent utility and is not affiliated with, endorsed by, sponsored by, or associated with WhatsApp LLC, Meta Platforms, Inc., or any of their affiliates. “WhatsApp” is mentioned only to describe the style of filenames the app can work with.",
      "faq.q6": "Why are only 100 photos free?",
      "faq.a6": "The free tier lets you restore up to 100 photos so you can confirm the app works for your files before deciding to buy. A one-time Full Batch Unlock removes the limit for larger collections.",
      "disclaimer": "This app is an independent utility and is not affiliated with, endorsed by, sponsored by, or associated with WhatsApp LLC, Meta Platforms, Inc., or any of their affiliates.",
      "copyright": "© 2026 Photo Date Restorer. All rights reserved.",
      "nf.p": "The page you're looking for doesn't exist or may have moved.",
      "pp.title": "Privacy Policy – Photo Date Restorer",
      "pp.h1": "Privacy Policy",
      "pp.updated": "Last updated: [INSERT DATE]",
      "pp.intro": "Photo Date Restorer (“the app”) is designed to process photos locally on your device. This policy explains what data the app processes and why.",
      "pp.dataproc.h": "Data processed",
      "pp.dataproc.l1": "File names", "pp.dataproc.l2": "File metadata", "pp.dataproc.l3": "Selected image and video files",
      "pp.purpose.h": "Purpose",
      "pp.purpose.l1": "Detect dates from supported filename patterns", "pp.purpose.l2": "Restore or export corrected metadata",
      "pp.transfer.h": "Data transfer",
      "pp.transfer.l1": "The app does not upload your photos to our servers.", "pp.transfer.l2": "No account is required.",
      "pp.iap.h": "In-app purchases",
      "pp.iap.l1": "The app may use Google Play Billing to process purchases.", "pp.iap.l2": "Payment processing is handled by Google Play. We do not receive or store your payment details.",
      "pp.ads.h": "Advertising",
      "pp.ads.l1": "The app does not currently include advertising.", "pp.ads.l2": "If rewarded ads are added, the app may use a third-party ad provider. This privacy policy must be updated before ads are enabled.",
      "pp.todo": "TODO before release / when SDKs change: Confirm whether the app uses analytics, crash reporting (e.g. Crashlytics), or an advertising SDK (e.g. AdMob). If any of these are added, list the provider, the data it collects, and a link to its privacy policy here. Do not claim “no data collection” if a third-party SDK is active.",
      "pp.rights.h": "Your rights",
      "pp.rights.p": "Depending on your region (for example under the EU GDPR), you may have the right to access, correct, or request deletion of personal data we process about you. Because the app is designed to process your files locally and does not require an account, we generally do not hold personal data on our servers. If that changes, this policy will be updated and a contact for data requests will be provided below.",
      "pp.children.h": "Children",
      "pp.children.p": "The app is a general-purpose utility and is not directed at children.",
      "pp.changes.h": "Changes to this policy",
      "pp.changes.p": "We may update this policy as the app evolves. The “Last updated” date above reflects the latest version.",
      "pp.contact.h": "Contact",
      "pp.contact.p": "For privacy questions, contact us at:",
      "pp.back": "← Back to home",
      "sp.title": "Support – Photo Date Restorer",
      "sp.h1": "Support",
      "sp.intro": "Photo Date Restorer helps restore photo dates from supported filename patterns so your gallery can sort them correctly. If something isn't working as expected, we're happy to help.",
      "sp.contact.h": "Contact",
      "sp.contact.p": "If you need help, please contact us at:",
      "sp.include.h": "What to include",
      "sp.include.p": "To help us resolve your issue quickly, please include:",
      "sp.include.l1": "Your Android version", "sp.include.l2": "App version", "sp.include.l3": "A short description of the issue", "sp.include.l4": "An example filename, if the problem is related to date detection",
      "sp.note": "Do not send private photos unless specifically requested.",
      "sp.back": "← Back to home"
    },

    es: {
      "meta.title": "Photo Date Restorer – Restaura las fechas de fotos desde los nombres de archivo",
      "meta.desc": "Restaura las fechas de las fotos a partir de nombres de archivo de chat compatibles y corrige los problemas de orden en la galería, de forma local en tu dispositivo Android.",
      "nav.how": "Cómo funciona", "nav.pricing": "Precios", "nav.faq": "Preguntas",
      "nav.privacy": "Privacidad", "nav.support": "Soporte",
      "cta.play": "Disponible en Google Play",
      "hero.eyebrow": "Local • Sin cuenta • Empieza gratis",
      "hero.h1": "Corrige la fecha de tus fotos de chat desde el nombre del archivo.",
      "hero.lead": "Cuando se copian, exportan o restauran fotos, tu galería puede ordenarlas por la fecha equivocada. Photo Date Restorer lee la fecha de nombres de archivo como <code>IMG-20240510-WA0001.jpg</code> y ayuda a restaurar el orden correcto, de forma local en tu dispositivo.",
      "problem.h2": "Por qué tus fotos aparecen en el orden equivocado",
      "problem.sub": "Un efecto secundario habitual al mover fotos entre teléfonos, apps y copias de seguridad.",
      "problem.c1.t": "Los metadatos se pierden al copiar",
      "problem.c1.b": "Al copiar, exportar o restaurar imágenes, la fecha de captura original guardada en el archivo suele faltar o ser reemplazada.",
      "problem.c2.t": "La galería usa la fecha equivocada",
      "problem.c2.b": "Sin fecha de captura, tu galería puede recurrir a la fecha de copia o modificación, por lo que las fotos antiguas saltan arriba.",
      "problem.c3.t": "La fecha sigue en el nombre del archivo",
      "problem.c3.b": "Muchas fotos de chat conservan la fecha original en el nombre del archivo, incluso cuando los metadatos internos ya no están.",
      "problem.c4.t": "La app usa exactamente eso",
      "problem.c4.b": "Photo Date Restorer lee la fecha de patrones de nombre compatibles y ayuda a restaurar el orden correcto.",
      "how.h2": "Cómo funciona",
      "how.s1.t": "Selecciona tu carpeta de fotos", "how.s1.b": "Elige la carpeta que contiene tus fotos de chat o imágenes exportadas.",
      "how.s2.t": "Previsualiza las fechas detectadas", "how.s2.b": "Comprueba en qué archivos se ha detectado una fecha a partir del nombre antes de cambiar nada.",
      "how.s3.t": "Restaura las fechas por lotes", "how.s3.b": "Aplica las fechas corregidas a las fotos seleccionadas en un solo lote.",
      "how.note": "Funciona con patrones de nombre compatibles en los que se puede detectar una fecha válida.",
      "benefits.h2": "Lo que obtienes",
      "benefits.b1.t": "Procesamiento local", "benefits.b1.b": "La app está diseñada para procesar nombres de archivo y metadatos directamente en tu dispositivo.",
      "benefits.b2.t": "Flujo por lotes", "benefits.b2.b": "Gestiona muchas fotos a la vez en lugar de editar cada archivo a mano.",
      "benefits.b3.t": "Vista previa antes de cambios", "benefits.b3.b": "Revisa las fechas detectadas antes de escribir nada.",
      "benefits.b4.t": "Sin cuenta", "benefits.b4.b": "Sin registro ni inicio de sesión. Solo abre la app y empieza.",
      "benefits.b5.t": "Empieza gratis con 100 fotos", "benefits.b5.b": "Restaura hasta 100 fotos gratis para ver si te funciona.",
      "benefits.b6.t": "Hecha para problemas de orden", "benefits.b6.b": "Diseñada específicamente para problemas de orden en la galería tras migraciones y exportaciones.",
      "files.h2": "Nombres de archivo compatibles",
      "files.sub": "Ejemplos de patrones de nombre en los que normalmente se puede detectar una fecha:",
      "files.note": "Los patrones compatibles pueden variar según la versión de la app. La app muestra una vista previa antes de hacer cambios.",
      "shots.h2": "Un vistazo a la app",
      "shots.sub": "Capturas de pantalla próximamente. Los marcadores de abajo muestran dónde irán.",
      "shots.p1": "Captura 1<br>Selecciona la carpeta", "shots.p2": "Captura 2<br>Previsualiza las fechas", "shots.p3": "Captura 3<br>Restaura por lotes",
      "price.h2": "Precios sencillos y transparentes",
      "price.sub": "Empieza gratis. Desbloquea el lote completo solo si lo necesitas.",
      "price.free.t": "Gratis", "price.free.price": "Gratis", "price.free.desc": "Restaura hasta 100 fotos",
      "price.free.l1": "Restaura hasta 100 fotos", "price.free.l2": "Vista previa de las fechas detectadas", "price.free.l3": "Sin cuenta",
      "price.full.badge": "Ideal para exportaciones grandes", "price.full.t": "Desbloqueo de lote completo", "price.full.price": "7,99 €", "price.full.desc": "Pago único",
      "price.full.l1": "Restaura todas las fotos compatibles", "price.full.l2": "Pago único, sin suscripción", "price.full.l3": "Ideal para exportaciones grandes y cambios de teléfono",
      "price.note": "Más adelante podrían añadirse anuncios recompensados opcionales para desbloquear un pequeño número de fotos adicionales.",
      "privacy.teaser.h2": "Tus fotos se quedan en tu dispositivo",
      "privacy.teaser.p": "La app está diseñada para procesar nombres de archivo y metadatos de forma local. No se requiere cuenta y tus fotos no se suben a nuestros servidores.",
      "privacy.teaser.btn": "Leer la Política de Privacidad completa",
      "faq.h2": "Preguntas frecuentes",
      "faq.q1": "¿Recupera fotos eliminadas?",
      "faq.a1": "No. La app no recupera archivos eliminados. Solo ayuda a restaurar la información de fecha de archivos que ya existen en tu dispositivo.",
      "faq.q2": "¿Funciona sin internet?",
      "faq.a2": "La función principal —leer fechas de los nombres de archivo y restaurarlas— está diseñada para funcionar localmente en tu dispositivo. Puede usarse una conexión a internet para las compras o, si se añaden más adelante, para anuncios opcionales.",
      "faq.q3": "¿Modifica mis archivos originales?",
      "faq.a3": "La app debería ofrecer una vista previa antes de los cambios. Según el modo elegido, puede crear copias corregidas o actualizar los metadatos directamente. Mantén siempre una copia de seguridad de las fotos importantes.",
      "faq.q4": "¿Qué nombres de archivo son compatibles?",
      "faq.a4": "Nombres de archivo que contienen una fecha reconocible, como <code>IMG-20240510-WA0001.jpg</code> o <code>IMG_20240510_143012.jpg</code>. Los patrones compatibles pueden variar según la versión de la app, y la app muestra una vista previa antes de hacer cambios.",
      "faq.q5": "¿Es una app oficial de WhatsApp o Meta?",
      "faq.a5": "No. Esta app es una utilidad independiente y no está afiliada, respaldada, patrocinada ni asociada con WhatsApp LLC, Meta Platforms, Inc. ni con ninguna de sus filiales. “WhatsApp” solo se menciona para describir el estilo de nombres de archivo con los que la app puede trabajar.",
      "faq.q6": "¿Por qué solo 100 fotos son gratis?",
      "faq.a6": "El nivel gratuito te permite restaurar hasta 100 fotos para que confirmes que la app funciona con tus archivos antes de comprar. Un Desbloqueo de lote completo de pago único elimina el límite para colecciones más grandes.",
      "disclaimer": "Esta app es una utilidad independiente y no está afiliada, respaldada, patrocinada ni asociada con WhatsApp LLC, Meta Platforms, Inc. ni con ninguna de sus filiales.",
      "copyright": "© 2026 Photo Date Restorer. Todos los derechos reservados.",
      "nf.p": "La página que buscas no existe o puede haberse movido.",
      "pp.title": "Política de Privacidad – Photo Date Restorer",
      "pp.h1": "Política de Privacidad",
      "pp.updated": "Última actualización: [INSERTAR FECHA]",
      "pp.intro": "Photo Date Restorer («la app») está diseñada para procesar fotos localmente en tu dispositivo. Esta política explica qué datos procesa la app y por qué.",
      "pp.dataproc.h": "Datos procesados",
      "pp.dataproc.l1": "Nombres de archivo", "pp.dataproc.l2": "Metadatos de archivo", "pp.dataproc.l3": "Archivos de imagen y vídeo seleccionados",
      "pp.purpose.h": "Finalidad",
      "pp.purpose.l1": "Detectar fechas a partir de patrones de nombre compatibles", "pp.purpose.l2": "Restaurar o exportar metadatos corregidos",
      "pp.transfer.h": "Transferencia de datos",
      "pp.transfer.l1": "La app no sube tus fotos a nuestros servidores.", "pp.transfer.l2": "No se requiere cuenta.",
      "pp.iap.h": "Compras dentro de la app",
      "pp.iap.l1": "La app puede usar Google Play Billing para procesar las compras.", "pp.iap.l2": "El procesamiento del pago lo gestiona Google Play. No recibimos ni almacenamos los datos de tu pago.",
      "pp.ads.h": "Publicidad",
      "pp.ads.l1": "La app no incluye publicidad actualmente.", "pp.ads.l2": "Si se añaden anuncios recompensados, la app podría usar un proveedor de anuncios externo. Esta política de privacidad debe actualizarse antes de activar los anuncios.",
      "pp.todo": "TODO antes del lanzamiento / al cambiar SDK: Confirma si la app usa analítica, informes de fallos (p. ej. Crashlytics) o un SDK de publicidad (p. ej. AdMob). Si se añade alguno, indica aquí el proveedor, los datos que recopila y un enlace a su política de privacidad. No afirmes «sin recopilación de datos» si hay un SDK de terceros activo.",
      "pp.rights.h": "Tus derechos",
      "pp.rights.p": "Según tu región (por ejemplo, bajo el RGPD de la UE), puedes tener derecho a acceder, corregir o solicitar la eliminación de los datos personales que tratamos sobre ti. Como la app está diseñada para procesar tus archivos localmente y no requiere cuenta, por lo general no conservamos datos personales en nuestros servidores. Si esto cambia, esta política se actualizará y se añadirá un contacto para solicitudes de datos.",
      "pp.children.h": "Menores",
      "pp.children.p": "La app es una utilidad de uso general y no está dirigida a menores.",
      "pp.changes.h": "Cambios en esta política",
      "pp.changes.p": "Podemos actualizar esta política a medida que la app evoluciona. La fecha de «Última actualización» de arriba refleja la versión más reciente.",
      "pp.contact.h": "Contacto",
      "pp.contact.p": "Para preguntas sobre privacidad, contáctanos en:",
      "pp.back": "← Volver al inicio",
      "sp.title": "Soporte – Photo Date Restorer",
      "sp.h1": "Soporte",
      "sp.intro": "Photo Date Restorer ayuda a restaurar las fechas de las fotos a partir de patrones de nombre compatibles para que tu galería pueda ordenarlas correctamente. Si algo no funciona como esperas, estaremos encantados de ayudarte.",
      "sp.contact.h": "Contacto",
      "sp.contact.p": "Si necesitas ayuda, contáctanos en:",
      "sp.include.h": "Qué incluir",
      "sp.include.p": "Para ayudarnos a resolver tu problema rápidamente, incluye:",
      "sp.include.l1": "Tu versión de Android", "sp.include.l2": "Versión de la app", "sp.include.l3": "Una breve descripción del problema", "sp.include.l4": "Un nombre de archivo de ejemplo, si el problema está relacionado con la detección de fechas",
      "sp.note": "No envíes fotos privadas a menos que se te solicite expresamente.",
      "sp.back": "← Volver al inicio"
    },

    fr: {
      "meta.title": "Photo Date Restorer – Restaurez les dates des photos depuis les noms de fichiers",
      "meta.desc": "Restaurez les dates de vos photos à partir de noms de fichiers de discussion pris en charge et corrigez les problèmes de tri de la galerie, en local sur votre appareil Android.",
      "nav.how": "Fonctionnement", "nav.pricing": "Tarifs", "nav.faq": "FAQ",
      "nav.privacy": "Confidentialité", "nav.support": "Assistance",
      "cta.play": "Disponible sur Google Play",
      "hero.eyebrow": "Local • Sans compte • Démarrage gratuit",
      "hero.h1": "Corrigez la date de vos photos de discussion à partir de leur nom de fichier.",
      "hero.lead": "Lorsque des photos sont copiées, exportées ou restaurées, votre galerie peut les trier par une date erronée. Photo Date Restorer lit la date dans des noms de fichiers comme <code>IMG-20240510-WA0001.jpg</code> et aide à rétablir le bon ordre, en local sur votre appareil.",
      "problem.h2": "Pourquoi vos photos apparaissent dans le mauvais ordre",
      "problem.sub": "Un effet secondaire fréquent lors du transfert de photos entre téléphones, applis et sauvegardes.",
      "problem.c1.t": "Les métadonnées se perdent à la copie",
      "problem.c1.b": "Lors de la copie, de l'export ou de la restauration d'images, la date de prise de vue d'origine enregistrée dans le fichier est souvent absente ou remplacée.",
      "problem.c2.t": "La galerie utilise la mauvaise date",
      "problem.c2.b": "Sans date de prise de vue, votre galerie peut se rabattre sur la date de copie ou de modification, et les anciennes photos remontent en haut.",
      "problem.c3.t": "La date est encore dans le nom du fichier",
      "problem.c3.b": "De nombreuses photos de discussion conservent la date d'origine dans leur nom de fichier, même lorsque les métadonnées internes ont disparu.",
      "problem.c4.t": "L'appli utilise précisément cela",
      "problem.c4.b": "Photo Date Restorer lit la date à partir de modèles de noms pris en charge et aide à rétablir le tri correct.",
      "how.h2": "Fonctionnement",
      "how.s1.t": "Sélectionnez votre dossier de photos", "how.s1.b": "Choisissez le dossier contenant vos photos de discussion ou vos images exportées.",
      "how.s2.t": "Prévisualisez les dates détectées", "how.s2.b": "Vérifiez pour quels fichiers une date a été détectée dans le nom avant tout changement.",
      "how.s3.t": "Restaurez les dates par lot", "how.s3.b": "Appliquez les dates corrigées à vos photos sélectionnées en un seul lot.",
      "how.note": "Fonctionne avec les modèles de noms pris en charge où une date valide peut être détectée.",
      "benefits.h2": "Ce que vous obtenez",
      "benefits.b1.t": "Traitement local", "benefits.b1.b": "L'appli est conçue pour traiter les noms de fichiers et les métadonnées directement sur votre appareil.",
      "benefits.b2.t": "Traitement par lot", "benefits.b2.b": "Gérez de nombreuses photos en une fois au lieu de modifier chaque fichier à la main.",
      "benefits.b3.t": "Aperçu avant modification", "benefits.b3.b": "Vérifiez les dates détectées avant que quoi que ce soit ne soit écrit.",
      "benefits.b4.t": "Aucun compte requis", "benefits.b4.b": "Pas d'inscription, pas de connexion. Ouvrez simplement l'appli et commencez.",
      "benefits.b5.t": "Démarrage gratuit avec 100 photos", "benefits.b5.b": "Restaurez jusqu'à 100 photos gratuitement pour voir si cela vous convient.",
      "benefits.b6.t": "Conçue pour les problèmes de tri", "benefits.b6.b": "Conçue spécialement pour les problèmes de tri de la galerie après migrations et exports.",
      "files.h2": "Noms de fichiers pris en charge",
      "files.sub": "Exemples de modèles de noms où une date peut généralement être détectée :",
      "files.note": "Les modèles pris en charge peuvent varier selon la version de l'appli. L'appli affiche un aperçu avant toute modification.",
      "shots.h2": "Un aperçu de l'appli",
      "shots.sub": "Captures d'écran bientôt disponibles. Les espaces réservés ci-dessous montrent où elles apparaîtront.",
      "shots.p1": "Capture 1<br>Sélectionner le dossier", "shots.p2": "Capture 2<br>Prévisualiser les dates", "shots.p3": "Capture 3<br>Restaurer par lot",
      "price.h2": "Des tarifs simples et transparents",
      "price.sub": "Commencez gratuitement. Débloquez le lot complet seulement si vous en avez besoin.",
      "price.free.t": "Gratuit", "price.free.price": "Gratuit", "price.free.desc": "Restaurez jusqu'à 100 photos",
      "price.free.l1": "Restaurez jusqu'à 100 photos", "price.free.l2": "Aperçu des dates détectées", "price.free.l3": "Aucun compte requis",
      "price.full.badge": "Idéal pour les grands exports", "price.full.t": "Déblocage du lot complet", "price.full.price": "7,99 €", "price.full.desc": "Achat unique",
      "price.full.l1": "Restaurez toutes les photos prises en charge", "price.full.l2": "Achat unique, sans abonnement", "price.full.l3": "Idéal pour les grands exports et les changements de téléphone",
      "price.note": "Des publicités récompensées facultatives pourront être ajoutées plus tard pour débloquer un petit nombre de photos supplémentaires.",
      "privacy.teaser.h2": "Vos photos restent sur votre appareil",
      "privacy.teaser.p": "L'appli est conçue pour traiter les noms de fichiers et les métadonnées en local. Aucun compte n'est requis et vos photos ne sont pas envoyées sur nos serveurs.",
      "privacy.teaser.btn": "Lire la politique de confidentialité complète",
      "faq.h2": "Questions fréquentes",
      "faq.q1": "Cela récupère-t-il les photos supprimées ?",
      "faq.a1": "Non. L'appli ne récupère pas les fichiers supprimés. Elle aide uniquement à restaurer les informations de date pour les fichiers déjà présents sur votre appareil.",
      "faq.q2": "Fonctionne-t-elle sans internet ?",
      "faq.a2": "La fonction principale — lire les dates dans les noms de fichiers et les restaurer — est conçue pour fonctionner en local sur votre appareil. Une connexion internet peut être utilisée pour les achats ou, si elles sont ajoutées plus tard, pour des publicités facultatives.",
      "faq.q3": "Modifie-t-elle mes fichiers originaux ?",
      "faq.a3": "L'appli devrait proposer un aperçu avant les modifications. Selon le mode choisi, elle peut créer des copies corrigées ou mettre à jour les métadonnées directement. Conservez toujours une sauvegarde de vos photos importantes.",
      "faq.q4": "Quels noms de fichiers sont pris en charge ?",
      "faq.a4": "Les noms de fichiers contenant une date reconnaissable, comme <code>IMG-20240510-WA0001.jpg</code> ou <code>IMG_20240510_143012.jpg</code>. Les modèles pris en charge peuvent varier selon la version de l'appli, et l'appli affiche un aperçu avant toute modification.",
      "faq.q5": "Est-ce une appli officielle WhatsApp ou Meta ?",
      "faq.a5": "Non. Cette appli est un utilitaire indépendant et n'est ni affiliée, ni approuvée, ni sponsorisée, ni associée à WhatsApp LLC, Meta Platforms, Inc. ou à l'une de leurs filiales. « WhatsApp » est mentionné uniquement pour décrire le style des noms de fichiers que l'appli peut traiter.",
      "faq.q6": "Pourquoi seulement 100 photos gratuites ?",
      "faq.a6": "L'offre gratuite vous permet de restaurer jusqu'à 100 photos afin de confirmer que l'appli fonctionne avec vos fichiers avant d'acheter. Un déblocage du lot complet en achat unique supprime la limite pour les collections plus grandes.",
      "disclaimer": "Cette appli est un utilitaire indépendant et n'est ni affiliée, ni approuvée, ni sponsorisée, ni associée à WhatsApp LLC, Meta Platforms, Inc. ou à l'une de leurs filiales.",
      "copyright": "© 2026 Photo Date Restorer. Tous droits réservés.",
      "nf.p": "La page que vous recherchez n'existe pas ou a peut-être été déplacée.",
      "pp.title": "Politique de confidentialité – Photo Date Restorer",
      "pp.h1": "Politique de confidentialité",
      "pp.updated": "Dernière mise à jour : [INSÉRER LA DATE]",
      "pp.intro": "Photo Date Restorer (« l'appli ») est conçue pour traiter les photos en local sur votre appareil. Cette politique explique quelles données l'appli traite et pourquoi.",
      "pp.dataproc.h": "Données traitées",
      "pp.dataproc.l1": "Noms de fichiers", "pp.dataproc.l2": "Métadonnées des fichiers", "pp.dataproc.l3": "Fichiers image et vidéo sélectionnés",
      "pp.purpose.h": "Finalité",
      "pp.purpose.l1": "Détecter les dates à partir de modèles de noms pris en charge", "pp.purpose.l2": "Restaurer ou exporter des métadonnées corrigées",
      "pp.transfer.h": "Transfert de données",
      "pp.transfer.l1": "L'appli n'envoie pas vos photos sur nos serveurs.", "pp.transfer.l2": "Aucun compte n'est requis.",
      "pp.iap.h": "Achats intégrés",
      "pp.iap.l1": "L'appli peut utiliser Google Play Billing pour traiter les achats.", "pp.iap.l2": "Le traitement du paiement est assuré par Google Play. Nous ne recevons ni ne stockons vos données de paiement.",
      "pp.ads.h": "Publicité",
      "pp.ads.l1": "L'appli ne contient actuellement aucune publicité.", "pp.ads.l2": "Si des publicités récompensées sont ajoutées, l'appli pourra utiliser un fournisseur publicitaire tiers. Cette politique de confidentialité devra être mise à jour avant l'activation des publicités.",
      "pp.todo": "TODO avant la publication / en cas de changement de SDK : Vérifiez si l'appli utilise des outils d'analyse, des rapports de plantage (p. ex. Crashlytics) ou un SDK publicitaire (p. ex. AdMob). Si l'un d'eux est ajouté, indiquez ici le fournisseur, les données collectées et un lien vers sa politique de confidentialité. N'affirmez pas « aucune collecte de données » si un SDK tiers est actif.",
      "pp.rights.h": "Vos droits",
      "pp.rights.p": "Selon votre région (par exemple dans le cadre du RGPD de l'UE), vous pouvez avoir le droit d'accéder aux données personnelles que nous traitons à votre sujet, de les rectifier ou d'en demander la suppression. Comme l'appli est conçue pour traiter vos fichiers en local et ne nécessite pas de compte, nous ne conservons généralement pas de données personnelles sur nos serveurs. Si cela change, cette politique sera mise à jour et un contact pour les demandes relatives aux données sera ajouté.",
      "pp.children.h": "Enfants",
      "pp.children.p": "L'appli est un utilitaire à usage général et ne s'adresse pas aux enfants.",
      "pp.changes.h": "Modifications de cette politique",
      "pp.changes.p": "Nous pouvons mettre à jour cette politique à mesure que l'appli évolue. La date de « Dernière mise à jour » ci-dessus indique la version la plus récente.",
      "pp.contact.h": "Contact",
      "pp.contact.p": "Pour toute question relative à la confidentialité, contactez-nous à :",
      "pp.back": "← Retour à l'accueil",
      "sp.title": "Assistance – Photo Date Restorer",
      "sp.h1": "Assistance",
      "sp.intro": "Photo Date Restorer aide à restaurer les dates des photos à partir de modèles de noms pris en charge afin que votre galerie puisse les trier correctement. Si quelque chose ne fonctionne pas comme prévu, nous sommes là pour vous aider.",
      "sp.contact.h": "Contact",
      "sp.contact.p": "Si vous avez besoin d'aide, contactez-nous à :",
      "sp.include.h": "Que faut-il indiquer",
      "sp.include.p": "Pour nous aider à résoudre rapidement votre problème, veuillez indiquer :",
      "sp.include.l1": "Votre version d'Android", "sp.include.l2": "Version de l'appli", "sp.include.l3": "Une brève description du problème", "sp.include.l4": "Un exemple de nom de fichier, si le problème concerne la détection de date",
      "sp.note": "N'envoyez pas de photos privées sauf demande expresse.",
      "sp.back": "← Retour à l'accueil"
    },

    it: {
      "meta.title": "Photo Date Restorer – Ripristina le date delle foto dai nomi dei file",
      "meta.desc": "Ripristina le date delle foto da nomi di file di chat supportati e correggi i problemi di ordinamento della galleria, in locale sul tuo dispositivo Android.",
      "nav.how": "Come funziona", "nav.pricing": "Prezzi", "nav.faq": "FAQ",
      "nav.privacy": "Privacy", "nav.support": "Assistenza",
      "cta.play": "Disponibile su Google Play",
      "hero.eyebrow": "Locale • Nessun account • Inizia gratis",
      "hero.h1": "Correggi la data delle tue foto di chat dal nome del file.",
      "hero.lead": "Quando le foto vengono copiate, esportate o ripristinate, la galleria potrebbe ordinarle in base alla data sbagliata. Photo Date Restorer legge la data da nomi di file come <code>IMG-20240510-WA0001.jpg</code> e aiuta a ripristinare l'ordine corretto, in locale sul tuo dispositivo.",
      "problem.h2": "Perché le tue foto appaiono nell'ordine sbagliato",
      "problem.sub": "Un effetto collaterale comune quando si spostano foto tra telefoni, app e backup.",
      "problem.c1.t": "I metadati si perdono durante la copia",
      "problem.c1.b": "Quando le immagini vengono copiate, esportate o ripristinate, la data di scatto originale salvata nel file spesso manca o viene sostituita.",
      "problem.c2.t": "La galleria usa la data sbagliata",
      "problem.c2.b": "Senza una data di scatto, la galleria può ripiegare sulla data di copia o di modifica, così le foto vecchie saltano in cima.",
      "problem.c3.t": "La data è ancora nel nome del file",
      "problem.c3.b": "Molte foto di chat mantengono la data originale nel nome del file, anche quando i metadati interni sono spariti.",
      "problem.c4.t": "L'app usa proprio questo",
      "problem.c4.b": "Photo Date Restorer legge la data dai modelli di nome supportati e aiuta a ripristinare l'ordinamento corretto.",
      "how.h2": "Come funziona",
      "how.s1.t": "Seleziona la cartella delle foto", "how.s1.b": "Scegli la cartella che contiene le tue foto di chat o le immagini esportate.",
      "how.s2.t": "Anteprima delle date rilevate", "how.s2.b": "Verifica per quali file è stata rilevata una data dal nome prima che venga modificato qualcosa.",
      "how.s3.t": "Ripristina le date in blocco", "how.s3.b": "Applica le date corrette alle foto selezionate in un unico blocco.",
      "how.note": "Funziona con i modelli di nome supportati in cui è possibile rilevare una data valida.",
      "benefits.h2": "Cosa ottieni",
      "benefits.b1.t": "Elaborazione locale", "benefits.b1.b": "L'app è progettata per elaborare nomi di file e metadati direttamente sul tuo dispositivo.",
      "benefits.b2.t": "Flusso in blocco", "benefits.b2.b": "Gestisci molte foto in una volta invece di modificare ogni file a mano.",
      "benefits.b3.t": "Anteprima prima delle modifiche", "benefits.b3.b": "Controlla le date rilevate prima che venga scritto qualcosa.",
      "benefits.b4.t": "Nessun account", "benefits.b4.b": "Niente registrazione, niente login. Apri l'app e inizia.",
      "benefits.b5.t": "Inizia gratis con 100 foto", "benefits.b5.b": "Ripristina fino a 100 foto gratis per vedere se fa al caso tuo.",
      "benefits.b6.t": "Pensata per i problemi di ordinamento", "benefits.b6.b": "Progettata appositamente per i problemi di ordinamento della galleria dopo migrazioni ed esportazioni.",
      "files.h2": "Nomi di file supportati",
      "files.sub": "Esempi di modelli di nome in cui di solito è possibile rilevare una data:",
      "files.note": "I modelli supportati possono variare a seconda della versione dell'app. L'app mostra un'anteprima prima di apportare modifiche.",
      "shots.h2": "Uno sguardo all'app",
      "shots.sub": "Screenshot in arrivo. I segnaposto qui sotto indicano dove appariranno.",
      "shots.p1": "Screenshot 1<br>Seleziona la cartella", "shots.p2": "Screenshot 2<br>Anteprima delle date", "shots.p3": "Screenshot 3<br>Ripristina in blocco",
      "price.h2": "Prezzi semplici e trasparenti",
      "price.sub": "Inizia gratis. Sblocca il blocco completo solo se ti serve.",
      "price.free.t": "Gratis", "price.free.price": "Gratis", "price.free.desc": "Ripristina fino a 100 foto",
      "price.free.l1": "Ripristina fino a 100 foto", "price.free.l2": "Anteprima delle date rilevate", "price.free.l3": "Nessun account",
      "price.full.badge": "Ideale per grandi esportazioni", "price.full.t": "Sblocco blocco completo", "price.full.price": "7,99 €", "price.full.desc": "Acquisto una tantum",
      "price.full.l1": "Ripristina tutte le foto supportate", "price.full.l2": "Acquisto una tantum, nessun abbonamento", "price.full.l3": "Ideale per grandi esportazioni e cambi di telefono",
      "price.note": "In futuro potrebbero essere aggiunti annunci con premio facoltativi per sbloccare un piccolo numero di foto aggiuntive.",
      "privacy.teaser.h2": "Le tue foto restano sul tuo dispositivo",
      "privacy.teaser.p": "L'app è progettata per elaborare nomi di file e metadati in locale. Non è richiesto alcun account e le tue foto non vengono caricate sui nostri server.",
      "privacy.teaser.btn": "Leggi l'informativa sulla privacy completa",
      "faq.h2": "Domande frequenti",
      "faq.q1": "Recupera le foto eliminate?",
      "faq.a1": "No. L'app non recupera i file eliminati. Aiuta solo a ripristinare le informazioni sulla data per i file già presenti sul tuo dispositivo.",
      "faq.q2": "Funziona senza internet?",
      "faq.a2": "La funzione principale — leggere le date dai nomi dei file e ripristinarle — è progettata per funzionare in locale sul tuo dispositivo. Una connessione internet può essere usata per gli acquisti o, se aggiunti in seguito, per annunci facoltativi.",
      "faq.q3": "Modifica i miei file originali?",
      "faq.a3": "L'app dovrebbe offrire un'anteprima prima delle modifiche. A seconda della modalità scelta, può creare copie corrette o aggiornare i metadati direttamente. Conserva sempre un backup delle foto importanti.",
      "faq.q4": "Quali nomi di file sono supportati?",
      "faq.a4": "Nomi di file che contengono una data riconoscibile, come <code>IMG-20240510-WA0001.jpg</code> o <code>IMG_20240510_143012.jpg</code>. I modelli supportati possono variare a seconda della versione dell'app, e l'app mostra un'anteprima prima di apportare modifiche.",
      "faq.q5": "È un'app ufficiale di WhatsApp o Meta?",
      "faq.a5": "No. Questa app è uno strumento indipendente e non è affiliata, approvata, sponsorizzata né associata a WhatsApp LLC, Meta Platforms, Inc. o a una qualsiasi delle loro affiliate. “WhatsApp” è citato solo per descrivere lo stile dei nomi di file con cui l'app può lavorare.",
      "faq.q6": "Perché solo 100 foto sono gratis?",
      "faq.a6": "Il piano gratuito ti consente di ripristinare fino a 100 foto così puoi verificare che l'app funzioni con i tuoi file prima di acquistare. Uno sblocco del blocco completo una tantum rimuove il limite per le raccolte più grandi.",
      "disclaimer": "Questa app è uno strumento indipendente e non è affiliata, approvata, sponsorizzata né associata a WhatsApp LLC, Meta Platforms, Inc. o a una qualsiasi delle loro affiliate.",
      "copyright": "© 2026 Photo Date Restorer. Tutti i diritti riservati.",
      "nf.p": "La pagina che cerchi non esiste o potrebbe essere stata spostata.",
      "pp.title": "Informativa sulla privacy – Photo Date Restorer",
      "pp.h1": "Informativa sulla privacy",
      "pp.updated": "Ultimo aggiornamento: [INSERIRE DATA]",
      "pp.intro": "Photo Date Restorer («l'app») è progettata per elaborare le foto in locale sul tuo dispositivo. Questa informativa spiega quali dati l'app elabora e perché.",
      "pp.dataproc.h": "Dati elaborati",
      "pp.dataproc.l1": "Nomi dei file", "pp.dataproc.l2": "Metadati dei file", "pp.dataproc.l3": "File immagine e video selezionati",
      "pp.purpose.h": "Finalità",
      "pp.purpose.l1": "Rilevare le date dai modelli di nome supportati", "pp.purpose.l2": "Ripristinare o esportare metadati corretti",
      "pp.transfer.h": "Trasferimento dei dati",
      "pp.transfer.l1": "L'app non carica le tue foto sui nostri server.", "pp.transfer.l2": "Non è richiesto alcun account.",
      "pp.iap.h": "Acquisti in-app",
      "pp.iap.l1": "L'app può usare Google Play Billing per elaborare gli acquisti.", "pp.iap.l2": "L'elaborazione del pagamento è gestita da Google Play. Non riceviamo né memorizziamo i dati di pagamento.",
      "pp.ads.h": "Pubblicità",
      "pp.ads.l1": "L'app attualmente non include pubblicità.", "pp.ads.l2": "Se vengono aggiunti annunci con premio, l'app potrebbe usare un fornitore pubblicitario di terze parti. Questa informativa sulla privacy deve essere aggiornata prima di attivare gli annunci.",
      "pp.todo": "TODO prima del rilascio / al cambio di SDK: Verifica se l'app usa strumenti di analisi, report sugli arresti anomali (es. Crashlytics) o un SDK pubblicitario (es. AdMob). Se ne viene aggiunto uno, indica qui il fornitore, i dati raccolti e un link alla sua informativa sulla privacy. Non dichiarare «nessuna raccolta di dati» se è attivo un SDK di terze parti.",
      "pp.rights.h": "I tuoi diritti",
      "pp.rights.p": "A seconda della tua regione (ad esempio nell'ambito del GDPR dell'UE), potresti avere il diritto di accedere, correggere o richiedere la cancellazione dei dati personali che trattiamo su di te. Poiché l'app è progettata per elaborare i tuoi file in locale e non richiede un account, generalmente non conserviamo dati personali sui nostri server. Se ciò dovesse cambiare, questa informativa sarà aggiornata e verrà aggiunto un contatto per le richieste relative ai dati.",
      "pp.children.h": "Minori",
      "pp.children.p": "L'app è uno strumento di uso generale e non è rivolta ai minori.",
      "pp.changes.h": "Modifiche a questa informativa",
      "pp.changes.p": "Potremmo aggiornare questa informativa con l'evolversi dell'app. La data di «Ultimo aggiornamento» in alto indica la versione più recente.",
      "pp.contact.h": "Contatti",
      "pp.contact.p": "Per domande sulla privacy, contattaci all'indirizzo:",
      "pp.back": "← Torna alla home",
      "sp.title": "Assistenza – Photo Date Restorer",
      "sp.h1": "Assistenza",
      "sp.intro": "Photo Date Restorer aiuta a ripristinare le date delle foto dai modelli di nome supportati così la galleria può ordinarle correttamente. Se qualcosa non funziona come previsto, siamo felici di aiutarti.",
      "sp.contact.h": "Contatti",
      "sp.contact.p": "Se hai bisogno di aiuto, contattaci all'indirizzo:",
      "sp.include.h": "Cosa includere",
      "sp.include.p": "Per aiutarci a risolvere rapidamente il tuo problema, includi:",
      "sp.include.l1": "La tua versione di Android", "sp.include.l2": "Versione dell'app", "sp.include.l3": "Una breve descrizione del problema", "sp.include.l4": "Un nome di file di esempio, se il problema riguarda il rilevamento della data",
      "sp.note": "Non inviare foto private a meno che non venga espressamente richiesto.",
      "sp.back": "← Torna alla home"
    },

    pt: {
      "meta.title": "Photo Date Restorer – Restaure as datas das fotos a partir dos nomes de ficheiro",
      "meta.desc": "Restaure as datas das fotos a partir de nomes de ficheiro de conversa suportados e corrija problemas de ordenação na galeria, localmente no seu dispositivo Android.",
      "nav.how": "Como funciona", "nav.pricing": "Preços", "nav.faq": "FAQ",
      "nav.privacy": "Privacidade", "nav.support": "Apoio",
      "cta.play": "Disponível no Google Play",
      "hero.eyebrow": "Local • Sem conta • Comece grátis",
      "hero.h1": "Corrija a data das suas fotos de conversa a partir do nome do ficheiro.",
      "hero.lead": "Quando as fotos são copiadas, exportadas ou restauradas, a sua galeria pode ordená-las pela data errada. O Photo Date Restorer lê a data de nomes de ficheiro como <code>IMG-20240510-WA0001.jpg</code> e ajuda a restaurar a ordem correta, localmente no seu dispositivo.",
      "problem.h2": "Porque é que as suas fotos aparecem na ordem errada",
      "problem.sub": "Um efeito secundário comum ao mover fotos entre telemóveis, apps e cópias de segurança.",
      "problem.c1.t": "Os metadados perdem-se ao copiar",
      "problem.c1.b": "Ao copiar, exportar ou restaurar imagens, a data de captura original guardada no ficheiro fica muitas vezes em falta ou é substituída.",
      "problem.c2.t": "A galeria usa a data errada",
      "problem.c2.b": "Sem data de captura, a galeria pode recorrer à data de cópia ou de modificação, por isso as fotos antigas saltam para o topo.",
      "problem.c3.t": "A data ainda está no nome do ficheiro",
      "problem.c3.b": "Muitas fotos de conversa mantêm a data original no nome do ficheiro, mesmo quando os metadados internos já não existem.",
      "problem.c4.t": "A app usa exatamente isso",
      "problem.c4.b": "O Photo Date Restorer lê a data a partir de padrões de nome suportados e ajuda a restaurar a ordenação correta.",
      "how.h2": "Como funciona",
      "how.s1.t": "Selecione a sua pasta de fotos", "how.s1.b": "Escolha a pasta que contém as suas fotos de conversa ou imagens exportadas.",
      "how.s2.t": "Pré-visualize as datas detetadas", "how.s2.b": "Veja em que ficheiros foi detetada uma data a partir do nome antes de algo ser alterado.",
      "how.s3.t": "Restaure as datas em lote", "how.s3.b": "Aplique as datas corrigidas às fotos selecionadas num único lote.",
      "how.note": "Funciona com padrões de nome suportados onde seja possível detetar uma data válida.",
      "benefits.h2": "O que recebe",
      "benefits.b1.t": "Processamento local", "benefits.b1.b": "A app foi concebida para processar nomes de ficheiro e metadados diretamente no seu dispositivo.",
      "benefits.b2.t": "Fluxo em lote", "benefits.b2.b": "Trate muitas fotos de uma vez em vez de editar cada ficheiro à mão.",
      "benefits.b3.t": "Pré-visualização antes das alterações", "benefits.b3.b": "Reveja as datas detetadas antes de algo ser escrito.",
      "benefits.b4.t": "Sem conta", "benefits.b4.b": "Sem registo, sem início de sessão. Basta abrir a app e começar.",
      "benefits.b5.t": "Comece grátis com 100 fotos", "benefits.b5.b": "Restaure até 100 fotos grátis para ver se funciona para si.",
      "benefits.b6.t": "Feita para problemas de ordenação", "benefits.b6.b": "Concebida especificamente para problemas de ordenação da galeria após migrações e exportações.",
      "files.h2": "Nomes de ficheiro suportados",
      "files.sub": "Exemplos de padrões de nome onde normalmente é possível detetar uma data:",
      "files.note": "Os padrões suportados podem variar consoante a versão da app. A app mostra uma pré-visualização antes de fazer alterações.",
      "shots.h2": "Uma vista da app",
      "shots.sub": "Capturas de ecrã em breve. Os marcadores abaixo mostram onde irão aparecer.",
      "shots.p1": "Captura 1<br>Selecionar pasta", "shots.p2": "Captura 2<br>Pré-visualizar datas", "shots.p3": "Captura 3<br>Restaurar em lote",
      "price.h2": "Preços simples e transparentes",
      "price.sub": "Comece grátis. Desbloqueie o lote completo apenas se precisar.",
      "price.free.t": "Grátis", "price.free.price": "Grátis", "price.free.desc": "Restaure até 100 fotos",
      "price.free.l1": "Restaure até 100 fotos", "price.free.l2": "Pré-visualização das datas detetadas", "price.free.l3": "Sem conta",
      "price.full.badge": "Ideal para grandes exportações", "price.full.t": "Desbloqueio do lote completo", "price.full.price": "7,99 €", "price.full.desc": "Compra única",
      "price.full.l1": "Restaure todas as fotos suportadas", "price.full.l2": "Compra única, sem subscrição", "price.full.l3": "Ideal para grandes exportações e mudanças de telemóvel",
      "price.note": "Mais tarde poderão ser adicionados anúncios recompensados opcionais para desbloquear um pequeno número de fotos adicionais.",
      "privacy.teaser.h2": "As suas fotos ficam no seu dispositivo",
      "privacy.teaser.p": "A app foi concebida para processar nomes de ficheiro e metadados localmente. Não é necessária conta e as suas fotos não são enviadas para os nossos servidores.",
      "privacy.teaser.btn": "Ler a Política de Privacidade completa",
      "faq.h2": "Perguntas frequentes",
      "faq.q1": "Isto recupera fotos eliminadas?",
      "faq.a1": "Não. A app não recupera ficheiros eliminados. Apenas ajuda a restaurar a informação de data de ficheiros que já existem no seu dispositivo.",
      "faq.q2": "Funciona sem internet?",
      "faq.a2": "A funcionalidade principal — ler datas dos nomes de ficheiro e restaurá-las — foi concebida para funcionar localmente no seu dispositivo. Pode ser usada uma ligação à internet para compras ou, se adicionados mais tarde, para anúncios opcionais.",
      "faq.q3": "Modifica os meus ficheiros originais?",
      "faq.a3": "A app deve oferecer uma pré-visualização antes das alterações. Consoante o modo selecionado, pode criar cópias corrigidas ou atualizar os metadados diretamente. Mantenha sempre uma cópia de segurança das fotos importantes.",
      "faq.q4": "Que nomes de ficheiro são suportados?",
      "faq.a4": "Nomes de ficheiro que contenham uma data reconhecível, como <code>IMG-20240510-WA0001.jpg</code> ou <code>IMG_20240510_143012.jpg</code>. Os padrões suportados podem variar consoante a versão da app, e a app mostra uma pré-visualização antes de fazer alterações.",
      "faq.q5": "Esta é uma app oficial do WhatsApp ou da Meta?",
      "faq.a5": "Não. Esta app é um utilitário independente e não é afiliada, apoiada, patrocinada nem associada à WhatsApp LLC, Meta Platforms, Inc. ou a qualquer uma das suas afiliadas. “WhatsApp” é mencionado apenas para descrever o estilo dos nomes de ficheiro com que a app pode trabalhar.",
      "faq.q6": "Porque é que só 100 fotos são grátis?",
      "faq.a6": "O nível gratuito permite-lhe restaurar até 100 fotos para confirmar que a app funciona com os seus ficheiros antes de decidir comprar. Um Desbloqueio do lote completo de compra única remove o limite para coleções maiores.",
      "disclaimer": "Esta app é um utilitário independente e não é afiliada, apoiada, patrocinada nem associada à WhatsApp LLC, Meta Platforms, Inc. ou a qualquer uma das suas afiliadas.",
      "copyright": "© 2026 Photo Date Restorer. Todos os direitos reservados.",
      "nf.p": "A página que procura não existe ou pode ter sido movida.",
      "pp.title": "Política de Privacidade – Photo Date Restorer",
      "pp.h1": "Política de Privacidade",
      "pp.updated": "Última atualização: [INSERIR DATA]",
      "pp.intro": "O Photo Date Restorer (“a app”) foi concebido para processar fotos localmente no seu dispositivo. Esta política explica que dados a app processa e porquê.",
      "pp.dataproc.h": "Dados processados",
      "pp.dataproc.l1": "Nomes de ficheiro", "pp.dataproc.l2": "Metadados de ficheiro", "pp.dataproc.l3": "Ficheiros de imagem e vídeo selecionados",
      "pp.purpose.h": "Finalidade",
      "pp.purpose.l1": "Detetar datas a partir de padrões de nome suportados", "pp.purpose.l2": "Restaurar ou exportar metadados corrigidos",
      "pp.transfer.h": "Transferência de dados",
      "pp.transfer.l1": "A app não envia as suas fotos para os nossos servidores.", "pp.transfer.l2": "Não é necessária conta.",
      "pp.iap.h": "Compras na app",
      "pp.iap.l1": "A app pode usar o Google Play Billing para processar compras.", "pp.iap.l2": "O processamento do pagamento é tratado pelo Google Play. Não recebemos nem armazenamos os seus dados de pagamento.",
      "pp.ads.h": "Publicidade",
      "pp.ads.l1": "A app não inclui publicidade atualmente.", "pp.ads.l2": "Se forem adicionados anúncios recompensados, a app pode usar um fornecedor de anúncios externo. Esta política de privacidade deve ser atualizada antes de ativar os anúncios.",
      "pp.todo": "TODO antes do lançamento / ao mudar de SDK: Confirme se a app usa análises, relatórios de falhas (p. ex. Crashlytics) ou um SDK de publicidade (p. ex. AdMob). Se algum for adicionado, indique aqui o fornecedor, os dados que recolhe e um link para a respetiva política de privacidade. Não afirme “sem recolha de dados” se houver um SDK de terceiros ativo.",
      "pp.rights.h": "Os seus direitos",
      "pp.rights.p": "Consoante a sua região (por exemplo, ao abrigo do RGPD da UE), pode ter o direito de aceder, corrigir ou solicitar a eliminação dos dados pessoais que tratamos sobre si. Como a app foi concebida para processar os seus ficheiros localmente e não requer conta, geralmente não guardamos dados pessoais nos nossos servidores. Se isso mudar, esta política será atualizada e será adicionado um contacto para pedidos relativos a dados.",
      "pp.children.h": "Crianças",
      "pp.children.p": "A app é um utilitário de uso geral e não se dirige a crianças.",
      "pp.changes.h": "Alterações a esta política",
      "pp.changes.p": "Podemos atualizar esta política à medida que a app evolui. A data de “Última atualização” acima reflete a versão mais recente.",
      "pp.contact.h": "Contacto",
      "pp.contact.p": "Para questões de privacidade, contacte-nos através de:",
      "pp.back": "← Voltar ao início",
      "sp.title": "Apoio – Photo Date Restorer",
      "sp.h1": "Apoio",
      "sp.intro": "O Photo Date Restorer ajuda a restaurar as datas das fotos a partir de padrões de nome suportados para que a sua galeria as possa ordenar corretamente. Se algo não estiver a funcionar como esperado, teremos todo o gosto em ajudar.",
      "sp.contact.h": "Contacto",
      "sp.contact.p": "Se precisar de ajuda, contacte-nos através de:",
      "sp.include.h": "O que incluir",
      "sp.include.p": "Para nos ajudar a resolver o seu problema rapidamente, inclua:",
      "sp.include.l1": "A sua versão do Android", "sp.include.l2": "Versão da app", "sp.include.l3": "Uma breve descrição do problema", "sp.include.l4": "Um nome de ficheiro de exemplo, se o problema estiver relacionado com a deteção de datas",
      "sp.note": "Não envie fotos privadas, exceto se tal for expressamente solicitado.",
      "sp.back": "← Voltar ao início"
    },

    pl: {
      "meta.title": "Photo Date Restorer – Przywróć daty zdjęć z nazw plików",
      "meta.desc": "Przywróć daty zdjęć z obsługiwanych nazw plików z czatu i napraw problemy z sortowaniem w galerii — lokalnie na urządzeniu z Androidem.",
      "nav.how": "Jak to działa", "nav.pricing": "Cennik", "nav.faq": "FAQ",
      "nav.privacy": "Prywatność", "nav.support": "Pomoc",
      "cta.play": "Pobierz z Google Play",
      "hero.eyebrow": "Lokalnie • Bez konta • Darmowy start",
      "hero.h1": "Napraw datę zdjęć z czatu na podstawie nazwy pliku.",
      "hero.lead": "Gdy zdjęcia są kopiowane, eksportowane lub przywracane, galeria może sortować je według błędnej daty. Photo Date Restorer odczytuje datę z nazw plików takich jak <code>IMG-20240510-WA0001.jpg</code> i pomaga przywrócić właściwą kolejność — lokalnie na Twoim urządzeniu.",
      "problem.h2": "Dlaczego Twoje zdjęcia są w złej kolejności",
      "problem.sub": "Częsty efekt uboczny przenoszenia zdjęć między telefonami, aplikacjami i kopiami zapasowymi.",
      "problem.c1.t": "Metadane giną przy kopiowaniu",
      "problem.c1.b": "Podczas kopiowania, eksportu lub przywracania obrazów oryginalna data wykonania zapisana w pliku często znika lub zostaje zastąpiona.",
      "problem.c2.t": "Galeria używa złej daty",
      "problem.c2.b": "Bez daty wykonania galeria może użyć daty skopiowania lub modyfikacji — przez co stare zdjęcia trafiają na górę.",
      "problem.c3.t": "Data wciąż jest w nazwie pliku",
      "problem.c3.b": "Wiele zdjęć z czatu zachowuje oryginalną datę w nazwie pliku, nawet gdy wewnętrzne metadane zniknęły.",
      "problem.c4.t": "Aplikacja używa właśnie tego",
      "problem.c4.b": "Photo Date Restorer odczytuje datę z obsługiwanych wzorców nazw i pomaga przywrócić prawidłowe sortowanie.",
      "how.h2": "Jak to działa",
      "how.s1.t": "Wybierz folder ze zdjęciami", "how.s1.b": "Wskaż folder zawierający zdjęcia z czatu lub wyeksportowane obrazy.",
      "how.s2.t": "Podejrzyj wykryte daty", "how.s2.b": "Zobacz, dla których plików wykryto datę z nazwy, zanim cokolwiek się zmieni.",
      "how.s3.t": "Przywróć daty wsadowo", "how.s3.b": "Zastosuj poprawione daty do wybranych zdjęć w jednej partii.",
      "how.note": "Działa z obsługiwanymi wzorcami nazw, w których można wykryć prawidłową datę.",
      "benefits.h2": "Co otrzymujesz",
      "benefits.b1.t": "Przetwarzanie lokalne", "benefits.b1.b": "Aplikacja jest zaprojektowana tak, aby przetwarzać nazwy plików i metadane bezpośrednio na Twoim urządzeniu.",
      "benefits.b2.t": "Tryb wsadowy", "benefits.b2.b": "Obsłuż wiele zdjęć naraz zamiast edytować każdy plik ręcznie.",
      "benefits.b3.t": "Podgląd przed zmianami", "benefits.b3.b": "Sprawdź wykryte daty, zanim cokolwiek zostanie zapisane.",
      "benefits.b4.t": "Bez konta", "benefits.b4.b": "Bez rejestracji, bez logowania. Po prostu otwórz aplikację i zacznij.",
      "benefits.b5.t": "Darmowy start ze 100 zdjęciami", "benefits.b5.b": "Przywróć do 100 zdjęć za darmo, aby sprawdzić, czy to działa u Ciebie.",
      "benefits.b6.t": "Stworzona do problemów z sortowaniem", "benefits.b6.b": "Zaprojektowana specjalnie pod problemy z sortowaniem w galerii po migracjach i eksportach.",
      "files.h2": "Obsługiwane nazwy plików",
      "files.sub": "Przykłady wzorców nazw, w których zwykle można wykryć datę:",
      "files.note": "Obsługiwane wzorce mogą się różnić w zależności od wersji aplikacji. Aplikacja pokazuje podgląd przed wprowadzeniem zmian.",
      "shots.h2": "Spójrz na aplikację",
      "shots.sub": "Zrzuty ekranu wkrótce. Poniższe symbole zastępcze pokazują, gdzie się pojawią.",
      "shots.p1": "Zrzut 1<br>Wybierz folder", "shots.p2": "Zrzut 2<br>Podgląd wykrytych dat", "shots.p3": "Zrzut 3<br>Przywracanie wsadowe",
      "price.h2": "Proste, przejrzyste ceny",
      "price.sub": "Zacznij za darmo. Odblokuj pełną partię tylko, jeśli jej potrzebujesz.",
      "price.free.t": "Za darmo", "price.free.price": "Za darmo", "price.free.desc": "Przywróć do 100 zdjęć",
      "price.free.l1": "Przywróć do 100 zdjęć", "price.free.l2": "Podgląd wykrytych dat", "price.free.l3": "Bez konta",
      "price.full.badge": "Najlepsze do dużych eksportów", "price.full.t": "Odblokowanie pełnej partii", "price.full.price": "7,99 €", "price.full.desc": "Jednorazowy zakup",
      "price.full.l1": "Przywróć wszystkie obsługiwane zdjęcia", "price.full.l2": "Jednorazowy zakup, bez subskrypcji", "price.full.l3": "Najlepsze do dużych eksportów i zmiany telefonu",
      "price.note": "W przyszłości mogą zostać dodane opcjonalne reklamy z nagrodą, aby odblokować niewielką liczbę dodatkowych zdjęć.",
      "privacy.teaser.h2": "Twoje zdjęcia zostają na Twoim urządzeniu",
      "privacy.teaser.p": "Aplikacja jest zaprojektowana do przetwarzania nazw plików i metadanych lokalnie. Konto nie jest wymagane, a Twoje zdjęcia nie są przesyłane na nasze serwery.",
      "privacy.teaser.btn": "Przeczytaj pełną Politykę prywatności",
      "faq.h2": "Najczęstsze pytania",
      "faq.q1": "Czy odzyskuje usunięte zdjęcia?",
      "faq.a1": "Nie. Aplikacja nie odzyskuje usuniętych plików. Pomaga jedynie przywrócić informacje o dacie dla plików, które już istnieją na Twoim urządzeniu.",
      "faq.q2": "Czy działa bez internetu?",
      "faq.a2": "Główna funkcja — odczyt dat z nazw plików i ich przywracanie — jest zaprojektowana do pracy lokalnie na Twoim urządzeniu. Połączenie z internetem może być używane do zakupów lub, jeśli zostaną dodane później, do opcjonalnych reklam.",
      "faq.q3": "Czy modyfikuje moje oryginalne pliki?",
      "faq.a3": "Aplikacja powinna oferować podgląd przed zmianami. Zależnie od wybranego trybu może tworzyć poprawione kopie lub aktualizować metadane bezpośrednio. Zawsze zachowuj kopię zapasową ważnych zdjęć.",
      "faq.q4": "Jakie nazwy plików są obsługiwane?",
      "faq.a4": "Nazwy plików zawierające rozpoznawalną datę, takie jak <code>IMG-20240510-WA0001.jpg</code> lub <code>IMG_20240510_143012.jpg</code>. Obsługiwane wzorce mogą się różnić w zależności od wersji aplikacji, a aplikacja pokazuje podgląd przed wprowadzeniem zmian.",
      "faq.q5": "Czy to oficjalna aplikacja WhatsApp lub Meta?",
      "faq.a5": "Nie. Ta aplikacja jest niezależnym narzędziem i nie jest powiązana, wspierana, sponsorowana ani stowarzyszona z WhatsApp LLC, Meta Platforms, Inc. ani żadnym z ich podmiotów zależnych. „WhatsApp” jest wspomniany wyłącznie w celu opisania stylu nazw plików, z którymi aplikacja może pracować.",
      "faq.q6": "Dlaczego tylko 100 zdjęć jest za darmo?",
      "faq.a6": "Wersja darmowa pozwala przywrócić do 100 zdjęć, abyś mógł potwierdzić, że aplikacja działa z Twoimi plikami przed zakupem. Jednorazowe Odblokowanie pełnej partii usuwa limit dla większych kolekcji.",
      "disclaimer": "Ta aplikacja jest niezależnym narzędziem i nie jest powiązana, wspierana, sponsorowana ani stowarzyszona z WhatsApp LLC, Meta Platforms, Inc. ani żadnym z ich podmiotów zależnych.",
      "copyright": "© 2026 Photo Date Restorer. Wszelkie prawa zastrzeżone.",
      "nf.p": "Strona, której szukasz, nie istnieje lub mogła zostać przeniesiona.",
      "pp.title": "Polityka prywatności – Photo Date Restorer",
      "pp.h1": "Polityka prywatności",
      "pp.updated": "Ostatnia aktualizacja: [WSTAW DATĘ]",
      "pp.intro": "Photo Date Restorer („aplikacja”) jest zaprojektowany do przetwarzania zdjęć lokalnie na Twoim urządzeniu. Niniejsza polityka wyjaśnia, jakie dane aplikacja przetwarza i dlaczego.",
      "pp.dataproc.h": "Przetwarzane dane",
      "pp.dataproc.l1": "Nazwy plików", "pp.dataproc.l2": "Metadane plików", "pp.dataproc.l3": "Wybrane pliki obrazów i wideo",
      "pp.purpose.h": "Cel",
      "pp.purpose.l1": "Wykrywanie dat z obsługiwanych wzorców nazw", "pp.purpose.l2": "Przywracanie lub eksport poprawionych metadanych",
      "pp.transfer.h": "Przesyłanie danych",
      "pp.transfer.l1": "Aplikacja nie przesyła Twoich zdjęć na nasze serwery.", "pp.transfer.l2": "Konto nie jest wymagane.",
      "pp.iap.h": "Zakupy w aplikacji",
      "pp.iap.l1": "Aplikacja może używać Google Play Billing do obsługi zakupów.", "pp.iap.l2": "Przetwarzanie płatności obsługuje Google Play. Nie otrzymujemy ani nie przechowujemy Twoich danych płatności.",
      "pp.ads.h": "Reklamy",
      "pp.ads.l1": "Aplikacja obecnie nie zawiera reklam.", "pp.ads.l2": "Jeśli zostaną dodane reklamy z nagrodą, aplikacja może korzystać z zewnętrznego dostawcy reklam. Niniejsza polityka prywatności musi zostać zaktualizowana przed włączeniem reklam.",
      "pp.todo": "TODO przed wydaniem / przy zmianie SDK: Potwierdź, czy aplikacja używa analityki, raportowania awarii (np. Crashlytics) lub SDK reklamowego (np. AdMob). Jeśli któreś zostanie dodane, podaj tutaj dostawcę, gromadzone dane oraz link do jego polityki prywatności. Nie twierdź „brak gromadzenia danych”, jeśli aktywny jest zewnętrzny SDK.",
      "pp.rights.h": "Twoje prawa",
      "pp.rights.p": "W zależności od regionu (na przykład w ramach RODO w UE) możesz mieć prawo dostępu do swoich danych osobowych, które przetwarzamy, ich sprostowania lub żądania usunięcia. Ponieważ aplikacja jest zaprojektowana do lokalnego przetwarzania Twoich plików i nie wymaga konta, zazwyczaj nie przechowujemy danych osobowych na naszych serwerach. Jeśli to się zmieni, niniejsza polityka zostanie zaktualizowana i zostanie dodany kontakt do żądań dotyczących danych.",
      "pp.children.h": "Dzieci",
      "pp.children.p": "Aplikacja jest narzędziem ogólnego przeznaczenia i nie jest skierowana do dzieci.",
      "pp.changes.h": "Zmiany w tej polityce",
      "pp.changes.p": "Możemy aktualizować tę politykę w miarę rozwoju aplikacji. Data „Ostatnia aktualizacja” powyżej odzwierciedla najnowszą wersję.",
      "pp.contact.h": "Kontakt",
      "pp.contact.p": "W sprawach prywatności skontaktuj się z nami:",
      "pp.back": "← Powrót do strony głównej",
      "sp.title": "Pomoc – Photo Date Restorer",
      "sp.h1": "Pomoc",
      "sp.intro": "Photo Date Restorer pomaga przywrócić daty zdjęć z obsługiwanych wzorców nazw, aby galeria mogła je poprawnie posortować. Jeśli coś nie działa zgodnie z oczekiwaniami, chętnie pomożemy.",
      "sp.contact.h": "Kontakt",
      "sp.contact.p": "Jeśli potrzebujesz pomocy, skontaktuj się z nami:",
      "sp.include.h": "Co dołączyć",
      "sp.include.p": "Aby pomóc nam szybko rozwiązać problem, podaj:",
      "sp.include.l1": "Twoją wersję Androida", "sp.include.l2": "Wersję aplikacji", "sp.include.l3": "Krótki opis problemu", "sp.include.l4": "Przykładową nazwę pliku, jeśli problem dotyczy wykrywania daty",
      "sp.note": "Nie wysyłaj prywatnych zdjęć, chyba że zostaniesz o to wyraźnie poproszony.",
      "sp.back": "← Powrót do strony głównej"
    },

    nl: {
      "meta.title": "Photo Date Restorer – Herstel fotodatums uit bestandsnamen",
      "meta.desc": "Herstel fotodatums uit ondersteunde chat-bestandsnamen en los sorteerproblemen in de galerij op, lokaal op je Android-apparaat.",
      "nav.how": "Hoe het werkt", "nav.pricing": "Prijzen", "nav.faq": "FAQ",
      "nav.privacy": "Privacy", "nav.support": "Ondersteuning",
      "cta.play": "Downloaden in Google Play",
      "hero.eyebrow": "Lokaal • Geen account • Gratis starten",
      "hero.h1": "Herstel de datum van je chatfoto's uit de bestandsnaam.",
      "hero.lead": "Wanneer foto's worden gekopieerd, geëxporteerd of hersteld, sorteert je galerij ze soms op de verkeerde datum. Photo Date Restorer leest de datum uit bestandsnamen zoals <code>IMG-20240510-WA0001.jpg</code> en helpt de juiste volgorde te herstellen — lokaal op je apparaat.",
      "problem.h2": "Waarom je foto's in de verkeerde volgorde staan",
      "problem.sub": "Een veelvoorkomend neveneffect bij het verplaatsen van foto's tussen telefoons, apps en back-ups.",
      "problem.c1.t": "Metadata gaat verloren bij kopiëren",
      "problem.c1.b": "Bij het kopiëren, exporteren of herstellen van afbeeldingen ontbreekt de oorspronkelijke opnamedatum in het bestand vaak of wordt vervangen.",
      "problem.c2.t": "De galerij gebruikt de verkeerde datum",
      "problem.c2.b": "Zonder opnamedatum valt je galerij mogelijk terug op de kopieer- of wijzigingsdatum, waardoor oude foto's bovenaan springen.",
      "problem.c3.t": "De datum staat nog in de bestandsnaam",
      "problem.c3.b": "Veel chatfoto's behouden de oorspronkelijke datum in de bestandsnaam, zelfs als de interne metadata weg is.",
      "problem.c4.t": "De app gebruikt precies dat",
      "problem.c4.b": "Photo Date Restorer leest de datum uit ondersteunde bestandsnaampatronen en helpt de juiste sortering te herstellen.",
      "how.h2": "Hoe het werkt",
      "how.s1.t": "Selecteer je fotomap", "how.s1.b": "Kies de map met je chatfoto's of geëxporteerde afbeeldingen.",
      "how.s2.t": "Bekijk gedetecteerde datums", "how.s2.b": "Zie voor welke bestanden een datum uit de bestandsnaam is gedetecteerd voordat er iets verandert.",
      "how.s3.t": "Herstel datums in batch", "how.s3.b": "Pas de gecorrigeerde datums in één batch toe op je geselecteerde foto's.",
      "how.note": "Werkt met ondersteunde bestandsnaampatronen waarin een geldige datum kan worden gedetecteerd.",
      "benefits.h2": "Wat je krijgt",
      "benefits.b1.t": "Lokale verwerking", "benefits.b1.b": "De app is ontworpen om bestandsnamen en metadata rechtstreeks op je apparaat te verwerken.",
      "benefits.b2.t": "Batchverwerking", "benefits.b2.b": "Verwerk veel foto's tegelijk in plaats van elk bestand handmatig te bewerken.",
      "benefits.b3.t": "Voorbeeld vóór wijzigingen", "benefits.b3.b": "Controleer de gedetecteerde datums voordat er iets wordt weggeschreven.",
      "benefits.b4.t": "Geen account nodig", "benefits.b4.b": "Geen registratie, geen login. Open gewoon de app en begin.",
      "benefits.b5.t": "Gratis starten met 100 foto's", "benefits.b5.b": "Herstel tot 100 foto's gratis om te zien of het voor jou werkt.",
      "benefits.b6.t": "Gemaakt voor sorteerproblemen", "benefits.b6.b": "Speciaal ontworpen voor sorteerproblemen in de galerij na migraties en exports.",
      "files.h2": "Ondersteunde bestandsnamen",
      "files.sub": "Voorbeelden van bestandsnaampatronen waarin meestal een datum kan worden gedetecteerd:",
      "files.note": "Ondersteunde patronen kunnen per app-versie verschillen. De app toont een voorbeeld voordat er wijzigingen worden aangebracht.",
      "shots.h2": "Een blik op de app",
      "shots.sub": "Schermafbeeldingen volgen binnenkort. De tijdelijke aanduidingen hieronder tonen waar ze komen.",
      "shots.p1": "Schermafbeelding 1<br>Map selecteren", "shots.p2": "Schermafbeelding 2<br>Datums bekijken", "shots.p3": "Schermafbeelding 3<br>In batch herstellen",
      "price.h2": "Eenvoudige, transparante prijzen",
      "price.sub": "Start gratis. Ontgrendel de volledige batch alleen als je die nodig hebt.",
      "price.free.t": "Gratis", "price.free.price": "Gratis", "price.free.desc": "Herstel tot 100 foto's",
      "price.free.l1": "Herstel tot 100 foto's", "price.free.l2": "Voorbeeld van gedetecteerde datums", "price.free.l3": "Geen account nodig",
      "price.full.badge": "Beste voor grote exports", "price.full.t": "Volledige batch ontgrendelen", "price.full.price": "€ 7,99", "price.full.desc": "Eenmalige aankoop",
      "price.full.l1": "Herstel alle ondersteunde foto's", "price.full.l2": "Eenmalige aankoop, geen abonnement", "price.full.l3": "Beste voor grote exports en telefoonmigraties",
      "price.note": "Later kunnen optioneel beloonde advertenties worden toegevoegd om een klein aantal extra foto's te ontgrendelen.",
      "privacy.teaser.h2": "Je foto's blijven op je apparaat",
      "privacy.teaser.p": "De app is ontworpen om bestandsnamen en metadata lokaal te verwerken. Er is geen account nodig en je foto's worden niet naar onze servers geüpload.",
      "privacy.teaser.btn": "Lees het volledige privacybeleid",
      "faq.h2": "Veelgestelde vragen",
      "faq.q1": "Herstelt dit verwijderde foto's?",
      "faq.a1": "Nee. De app herstelt geen verwijderde bestanden. Het helpt alleen datuminformatie te herstellen voor bestanden die al op je apparaat staan.",
      "faq.q2": "Werkt het zonder internet?",
      "faq.a2": "De kernfunctie — datums uit bestandsnamen lezen en herstellen — is ontworpen om lokaal op je apparaat te werken. Een internetverbinding kan worden gebruikt voor aankopen of, indien later toegevoegd, voor optionele advertenties.",
      "faq.q3": "Wijzigt het mijn originele bestanden?",
      "faq.a3": "De app zou een voorbeeld moeten tonen vóór wijzigingen. Afhankelijk van de gekozen modus kan het gecorrigeerde kopieën maken of de metadata rechtstreeks bijwerken. Bewaar altijd een back-up van belangrijke foto's.",
      "faq.q4": "Welke bestandsnamen worden ondersteund?",
      "faq.a4": "Bestandsnamen die een herkenbare datum bevatten, zoals <code>IMG-20240510-WA0001.jpg</code> of <code>IMG_20240510_143012.jpg</code>. Ondersteunde patronen kunnen per app-versie verschillen en de app toont een voorbeeld voordat er wijzigingen worden aangebracht.",
      "faq.q5": "Is dit een officiële WhatsApp- of Meta-app?",
      "faq.a5": "Nee. Deze app is een onafhankelijk hulpprogramma en is niet verbonden met, goedgekeurd door, gesponsord door of geassocieerd met WhatsApp LLC, Meta Platforms, Inc. of een van hun dochterondernemingen. “WhatsApp” wordt alleen genoemd om de stijl te beschrijven van de bestandsnamen waarmee de app kan werken.",
      "faq.q6": "Waarom zijn maar 100 foto's gratis?",
      "faq.a6": "Met de gratis versie kun je tot 100 foto's herstellen, zodat je kunt bevestigen dat de app met jouw bestanden werkt voordat je koopt. Een eenmalige Volledige batch-ontgrendeling verwijdert de limiet voor grotere collecties.",
      "disclaimer": "Deze app is een onafhankelijk hulpprogramma en is niet verbonden met, goedgekeurd door, gesponsord door of geassocieerd met WhatsApp LLC, Meta Platforms, Inc. of een van hun dochterondernemingen.",
      "copyright": "© 2026 Photo Date Restorer. Alle rechten voorbehouden.",
      "nf.p": "De pagina die je zoekt bestaat niet of is mogelijk verplaatst.",
      "pp.title": "Privacybeleid – Photo Date Restorer",
      "pp.h1": "Privacybeleid",
      "pp.updated": "Laatst bijgewerkt: [DATUM INVOEGEN]",
      "pp.intro": "Photo Date Restorer (“de app”) is ontworpen om foto's lokaal op je apparaat te verwerken. Dit beleid legt uit welke gegevens de app verwerkt en waarom.",
      "pp.dataproc.h": "Verwerkte gegevens",
      "pp.dataproc.l1": "Bestandsnamen", "pp.dataproc.l2": "Bestandsmetadata", "pp.dataproc.l3": "Geselecteerde afbeeldings- en videobestanden",
      "pp.purpose.h": "Doel",
      "pp.purpose.l1": "Datums detecteren uit ondersteunde bestandsnaampatronen", "pp.purpose.l2": "Gecorrigeerde metadata herstellen of exporteren",
      "pp.transfer.h": "Gegevensoverdracht",
      "pp.transfer.l1": "De app uploadt je foto's niet naar onze servers.", "pp.transfer.l2": "Er is geen account nodig.",
      "pp.iap.h": "In-app-aankopen",
      "pp.iap.l1": "De app kan Google Play Billing gebruiken om aankopen te verwerken.", "pp.iap.l2": "De betalingsverwerking wordt afgehandeld door Google Play. Wij ontvangen of bewaren je betalingsgegevens niet.",
      "pp.ads.h": "Advertenties",
      "pp.ads.l1": "De app bevat momenteel geen advertenties.", "pp.ads.l2": "Als er beloonde advertenties worden toegevoegd, kan de app een externe advertentieprovider gebruiken. Dit privacybeleid moet worden bijgewerkt voordat advertenties worden ingeschakeld.",
      "pp.todo": "TODO vóór release / bij SDK-wijzigingen: Bevestig of de app analytics, crashrapportage (bijv. Crashlytics) of een advertentie-SDK (bijv. AdMob) gebruikt. Als een daarvan wordt toegevoegd, vermeld hier de provider, de verzamelde gegevens en een link naar diens privacybeleid. Beweer niet “geen gegevensverzameling” als er een externe SDK actief is.",
      "pp.rights.h": "Je rechten",
      "pp.rights.p": "Afhankelijk van je regio (bijvoorbeeld onder de EU-AVG) heb je mogelijk het recht om de persoonsgegevens die wij over je verwerken in te zien, te corrigeren of te laten verwijderen. Omdat de app is ontworpen om je bestanden lokaal te verwerken en geen account vereist, bewaren wij doorgaans geen persoonsgegevens op onze servers. Als dat verandert, wordt dit beleid bijgewerkt en wordt hieronder een contact voor gegevensverzoeken toegevoegd.",
      "pp.children.h": "Kinderen",
      "pp.children.p": "De app is een hulpprogramma voor algemeen gebruik en is niet gericht op kinderen.",
      "pp.changes.h": "Wijzigingen in dit beleid",
      "pp.changes.p": "We kunnen dit beleid bijwerken naarmate de app zich ontwikkelt. De datum “Laatst bijgewerkt” hierboven geeft de meest recente versie weer.",
      "pp.contact.h": "Contact",
      "pp.contact.p": "Voor privacyvragen kun je contact met ons opnemen via:",
      "pp.back": "← Terug naar startpagina",
      "sp.title": "Ondersteuning – Photo Date Restorer",
      "sp.h1": "Ondersteuning",
      "sp.intro": "Photo Date Restorer helpt fotodatums te herstellen uit ondersteunde bestandsnaampatronen, zodat je galerij ze correct kan sorteren. Als iets niet werkt zoals verwacht, helpen we je graag.",
      "sp.contact.h": "Contact",
      "sp.contact.p": "Als je hulp nodig hebt, neem dan contact met ons op via:",
      "sp.include.h": "Wat moet je vermelden",
      "sp.include.p": "Om ons te helpen je probleem snel op te lossen, vermeld:",
      "sp.include.l1": "Je Android-versie", "sp.include.l2": "App-versie", "sp.include.l3": "Een korte beschrijving van het probleem", "sp.include.l4": "Een voorbeeldbestandsnaam, als het probleem met datumdetectie te maken heeft",
      "sp.note": "Stuur geen privéfoto's tenzij hier specifiek om wordt gevraagd.",
      "sp.back": "← Terug naar startpagina"
    },

    tr: {
      "meta.title": "Photo Date Restorer – Fotoğraf tarihlerini dosya adlarından geri yükleyin",
      "meta.desc": "Fotoğraf tarihlerini desteklenen sohbet tarzı dosya adlarından geri yükleyin ve galeri sıralama sorunlarını Android cihazınızda yerel olarak düzeltin.",
      "nav.how": "Nasıl çalışır", "nav.pricing": "Fiyatlar", "nav.faq": "SSS",
      "nav.privacy": "Gizlilik", "nav.support": "Destek",
      "cta.play": "Google Play'den edinin",
      "hero.eyebrow": "Yerel • Hesap yok • Ücretsiz başlangıç",
      "hero.h1": "Sohbet fotoğraflarınızın tarihini dosya adından düzeltin.",
      "hero.lead": "Fotoğraflar kopyalandığında, dışa aktarıldığında veya geri yüklendiğinde galeriniz onları yanlış tarihe göre sıralayabilir. Photo Date Restorer, <code>IMG-20240510-WA0001.jpg</code> gibi dosya adlarından tarihi okur ve doğru sıralamayı geri getirmeye yardımcı olur — cihazınızda yerel olarak.",
      "problem.h2": "Fotoğraflarınız neden yanlış sırada görünüyor",
      "problem.sub": "Fotoğrafları telefonlar, uygulamalar ve yedekler arasında taşırken sık görülen bir yan etki.",
      "problem.c1.t": "Üst veriler kopyalamada kaybolur",
      "problem.c1.b": "Görüntüler kopyalandığında, dışa aktarıldığında veya geri yüklendiğinde dosyada saklanan orijinal çekim tarihi çoğu zaman kaybolur veya değiştirilir.",
      "problem.c2.t": "Galeri yanlış tarihi kullanır",
      "problem.c2.b": "Çekim tarihi olmadan galeriniz kopyalama veya değiştirme tarihine başvurabilir; böylece eski fotoğraflar en üste çıkar.",
      "problem.c3.t": "Tarih hâlâ dosya adında",
      "problem.c3.b": "Birçok sohbet fotoğrafı, iç üst veriler kaybolsa bile orijinal tarihi dosya adında korur.",
      "problem.c4.t": "Uygulama tam olarak bunu kullanır",
      "problem.c4.b": "Photo Date Restorer, desteklenen dosya adı kalıplarından tarihi okur ve doğru sıralamayı geri getirmeye yardımcı olur.",
      "how.h2": "Nasıl çalışır",
      "how.s1.t": "Fotoğraf klasörünüzü seçin", "how.s1.b": "Sohbet fotoğraflarınızı veya dışa aktarılan görüntüleri içeren klasörü seçin.",
      "how.s2.t": "Algılanan tarihleri önizleyin", "how.s2.b": "Herhangi bir şey değişmeden önce hangi dosyalarda dosya adından tarih algılandığını görün.",
      "how.s3.t": "Tarihleri toplu geri yükleyin", "how.s3.b": "Düzeltilmiş tarihleri seçtiğiniz fotoğraflara tek bir grupta uygulayın.",
      "how.note": "Geçerli bir tarihin algılanabildiği desteklenen dosya adı kalıplarıyla çalışır.",
      "benefits.h2": "Neler elde edersiniz",
      "benefits.b1.t": "Yerel işleme", "benefits.b1.b": "Uygulama, dosya adlarını ve üst verileri doğrudan cihazınızda işleyecek şekilde tasarlanmıştır.",
      "benefits.b2.t": "Toplu işlem", "benefits.b2.b": "Her dosyayı elle düzenlemek yerine birçok fotoğrafı tek seferde işleyin.",
      "benefits.b3.t": "Değişiklikten önce önizleme", "benefits.b3.b": "Herhangi bir şey yazılmadan önce algılanan tarihleri gözden geçirin.",
      "benefits.b4.t": "Hesap gerekmez", "benefits.b4.b": "Kayıt yok, giriş yok. Uygulamayı açın ve başlayın.",
      "benefits.b5.t": "100 fotoğrafla ücretsiz başlayın", "benefits.b5.b": "Sizin için işe yarayıp yaramadığını görmek için 100 fotoğrafa kadar ücretsiz geri yükleyin.",
      "benefits.b6.t": "Sıralama sorunları için yapıldı", "benefits.b6.b": "Taşımalar ve dışa aktarımlardan sonraki galeri sıralama sorunları için özel olarak tasarlandı.",
      "files.h2": "Desteklenen dosya adları",
      "files.sub": "Genellikle bir tarihin algılanabildiği dosya adı kalıbı örnekleri:",
      "files.note": "Desteklenen kalıplar uygulama sürümüne göre değişebilir. Uygulama, değişiklik yapmadan önce bir önizleme gösterir.",
      "shots.h2": "Uygulamaya bir bakış",
      "shots.sub": "Ekran görüntüleri yakında. Aşağıdaki yer tutucular nereye geleceklerini gösterir.",
      "shots.p1": "Ekran görüntüsü 1<br>Klasör seç", "shots.p2": "Ekran görüntüsü 2<br>Tarihleri önizle", "shots.p3": "Ekran görüntüsü 3<br>Toplu geri yükle",
      "price.h2": "Basit, şeffaf fiyatlandırma",
      "price.sub": "Ücretsiz başlayın. Tam grubu yalnızca ihtiyacınız varsa açın.",
      "price.free.t": "Ücretsiz", "price.free.price": "Ücretsiz", "price.free.desc": "100 fotoğrafa kadar geri yükleyin",
      "price.free.l1": "100 fotoğrafa kadar geri yükleyin", "price.free.l2": "Algılanan tarihleri önizleyin", "price.free.l3": "Hesap gerekmez",
      "price.full.badge": "Büyük dışa aktarımlar için ideal", "price.full.t": "Tam grup kilidini aç", "price.full.price": "7,99 €", "price.full.desc": "Tek seferlik satın alma",
      "price.full.l1": "Desteklenen tüm fotoğrafları geri yükleyin", "price.full.l2": "Tek seferlik satın alma, abonelik yok", "price.full.l3": "Büyük dışa aktarımlar ve telefon geçişleri için ideal",
      "price.note": "Daha sonra, az sayıda ek fotoğrafın kilidini açmak için isteğe bağlı ödüllü reklamlar eklenebilir.",
      "privacy.teaser.h2": "Fotoğraflarınız cihazınızda kalır",
      "privacy.teaser.p": "Uygulama, dosya adlarını ve üst verileri yerel olarak işleyecek şekilde tasarlanmıştır. Hesap gerekmez ve fotoğraflarınız sunucularımıza yüklenmez.",
      "privacy.teaser.btn": "Gizlilik Politikasının tamamını okuyun",
      "faq.h2": "Sıkça sorulan sorular",
      "faq.q1": "Bu, silinen fotoğrafları kurtarır mı?",
      "faq.a1": "Hayır. Uygulama silinen dosyaları kurtarmaz. Yalnızca cihazınızda zaten var olan dosyalar için tarih bilgisini geri yüklemeye yardımcı olur.",
      "faq.q2": "İnternet olmadan çalışır mı?",
      "faq.a2": "Temel işlev — dosya adlarından tarihleri okuyup geri yüklemek — cihazınızda yerel olarak çalışacak şekilde tasarlanmıştır. İnternet bağlantısı satın alımlar için veya daha sonra eklenirse isteğe bağlı reklamlar için kullanılabilir.",
      "faq.q3": "Orijinal dosyalarımı değiştirir mi?",
      "faq.a3": "Uygulama değişikliklerden önce bir önizleme sunmalıdır. Seçilen moda bağlı olarak düzeltilmiş kopyalar oluşturabilir veya üst verileri doğrudan güncelleyebilir. Önemli fotoğrafların her zaman bir yedeğini bulundurun.",
      "faq.q4": "Hangi dosya adları desteklenir?",
      "faq.a4": "Tanınabilir bir tarih içeren dosya adları, örneğin <code>IMG-20240510-WA0001.jpg</code> veya <code>IMG_20240510_143012.jpg</code>. Desteklenen kalıplar uygulama sürümüne göre değişebilir ve uygulama değişiklik yapmadan önce bir önizleme gösterir.",
      "faq.q5": "Bu, resmi bir WhatsApp veya Meta uygulaması mı?",
      "faq.a5": "Hayır. Bu uygulama bağımsız bir araçtır ve WhatsApp LLC, Meta Platforms, Inc. veya bunların bağlı kuruluşlarıyla bağlantılı, onlar tarafından onaylanmış, desteklenmiş veya ilişkilendirilmiş değildir. “WhatsApp” yalnızca uygulamanın çalışabileceği dosya adlarının türünü tanımlamak için anılmaktadır.",
      "faq.q6": "Neden yalnızca 100 fotoğraf ücretsiz?",
      "faq.a6": "Ücretsiz katman, satın almaya karar vermeden önce uygulamanın dosyalarınızla çalıştığını doğrulayabilmeniz için 100 fotoğrafa kadar geri yüklemenize olanak tanır. Tek seferlik Tam grup kilidini açma, daha büyük koleksiyonlar için sınırı kaldırır.",
      "disclaimer": "Bu uygulama bağımsız bir araçtır ve WhatsApp LLC, Meta Platforms, Inc. veya bunların bağlı kuruluşlarıyla bağlantılı, onlar tarafından onaylanmış, desteklenmiş veya ilişkilendirilmiş değildir.",
      "copyright": "© 2026 Photo Date Restorer. Tüm hakları saklıdır.",
      "nf.p": "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
      "pp.title": "Gizlilik Politikası – Photo Date Restorer",
      "pp.h1": "Gizlilik Politikası",
      "pp.updated": "Son güncelleme: [TARİH EKLEYİN]",
      "pp.intro": "Photo Date Restorer (“uygulama”), fotoğrafları cihazınızda yerel olarak işleyecek şekilde tasarlanmıştır. Bu politika, uygulamanın hangi verileri ve neden işlediğini açıklar.",
      "pp.dataproc.h": "İşlenen veriler",
      "pp.dataproc.l1": "Dosya adları", "pp.dataproc.l2": "Dosya üst verileri", "pp.dataproc.l3": "Seçilen görüntü ve video dosyaları",
      "pp.purpose.h": "Amaç",
      "pp.purpose.l1": "Desteklenen dosya adı kalıplarından tarihleri algılamak", "pp.purpose.l2": "Düzeltilmiş üst verileri geri yüklemek veya dışa aktarmak",
      "pp.transfer.h": "Veri aktarımı",
      "pp.transfer.l1": "Uygulama fotoğraflarınızı sunucularımıza yüklemez.", "pp.transfer.l2": "Hesap gerekmez.",
      "pp.iap.h": "Uygulama içi satın alımlar",
      "pp.iap.l1": "Uygulama, satın alımları işlemek için Google Play Faturalandırma'yı kullanabilir.", "pp.iap.l2": "Ödeme işlemleri Google Play tarafından yürütülür. Ödeme bilgilerinizi almayız veya saklamayız.",
      "pp.ads.h": "Reklam",
      "pp.ads.l1": "Uygulama şu anda reklam içermiyor.", "pp.ads.l2": "Ödüllü reklamlar eklenirse uygulama üçüncü taraf bir reklam sağlayıcısı kullanabilir. Reklamlar etkinleştirilmeden önce bu gizlilik politikası güncellenmelidir.",
      "pp.todo": "Yayından önce / SDK değişikliğinde TODO: Uygulamanın analiz, çökme raporlama (örn. Crashlytics) veya bir reklam SDK'sı (örn. AdMob) kullanıp kullanmadığını doğrulayın. Bunlardan biri eklenirse sağlayıcıyı, topladığı verileri ve gizlilik politikasının bağlantısını burada belirtin. Üçüncü taraf bir SDK etkinse “veri toplanmıyor” demeyin.",
      "pp.rights.h": "Haklarınız",
      "pp.rights.p": "Bölgenize bağlı olarak (örneğin AB GDPR kapsamında), hakkınızda işlediğimiz kişisel verilere erişme, bunları düzeltme veya silinmesini talep etme hakkına sahip olabilirsiniz. Uygulama dosyalarınızı yerel olarak işleyecek şekilde tasarlandığından ve hesap gerektirmediğinden, genellikle sunucularımızda kişisel veri tutmuyoruz. Bu değişirse, bu politika güncellenecek ve veri talepleri için bir iletişim adresi eklenecektir.",
      "pp.children.h": "Çocuklar",
      "pp.children.p": "Uygulama genel amaçlı bir araçtır ve çocuklara yönelik değildir.",
      "pp.changes.h": "Bu politikadaki değişiklikler",
      "pp.changes.p": "Uygulama geliştikçe bu politikayı güncelleyebiliriz. Yukarıdaki “Son güncelleme” tarihi en son sürümü yansıtır.",
      "pp.contact.h": "İletişim",
      "pp.contact.p": "Gizlilikle ilgili sorular için bize şu adresten ulaşın:",
      "pp.back": "← Ana sayfaya dön",
      "sp.title": "Destek – Photo Date Restorer",
      "sp.h1": "Destek",
      "sp.intro": "Photo Date Restorer, galerinizin doğru sıralayabilmesi için fotoğraf tarihlerini desteklenen dosya adı kalıplarından geri yüklemeye yardımcı olur. Bir şey beklendiği gibi çalışmıyorsa yardımcı olmaktan memnuniyet duyarız.",
      "sp.contact.h": "İletişim",
      "sp.contact.p": "Yardıma ihtiyacınız olursa lütfen bize şu adresten ulaşın:",
      "sp.include.h": "Nelere yer vermelisiniz",
      "sp.include.p": "Sorununuzu hızla çözmemize yardımcı olmak için lütfen şunları ekleyin:",
      "sp.include.l1": "Android sürümünüz", "sp.include.l2": "Uygulama sürümü", "sp.include.l3": "Sorunun kısa bir açıklaması", "sp.include.l4": "Sorun tarih algılamayla ilgiliyse örnek bir dosya adı",
      "sp.note": "Özellikle istenmediği sürece özel fotoğraflar göndermeyin.",
      "sp.back": "← Ana sayfaya dön"
    }
  };

  var STORAGE_KEY = "pdr_lang";

  function store(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
  }
  function stored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function detect() {
    var saved = stored();
    if (saved && T[saved]) return saved;
    var list = navigator.languages || [navigator.language || "de"];
    for (var i = 0; i < list.length; i++) {
      var code = (list[i] || "").slice(0, 2).toLowerCase();
      if (T[code]) return code;
    }
    return "de";
  }

  function apply(lang) {
    if (!T[lang]) lang = "de";
    var dict = T[lang];
    document.documentElement.setAttribute("lang", lang);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      var val = dict[key];
      if (val == null) continue; // leave fallback text if key missing
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, val);
      } else {
        el.innerHTML = val;
      }
    }
    // Keep document.title in sync (covers the <title> element too).
    if (dict["meta.title"]) document.title = dict["meta.title"];

    var sw = document.getElementById("langSwitcher");
    if (sw) sw.value = lang;
    syncCustom(lang);
    store(lang);
  }

  /* ---- Custom language dropdown -----------------------------------------
     Progressive enhancement: the native <select> stays in the DOM as a
     hidden, accessible source of truth and no-JS fallback. On top of it we
     build a themed listbox (button + popup) with full keyboard support. */

  var ui = null; // { root, btn, label, menu, opts: { code: <li> } }

  var GLOBE_SVG = '<svg class="globe" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18"/></svg>';
  var CHEV_SVG  = '<svg class="chev" viewBox="0 0 12 8" width="12" height="8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M1 1l5 5 5-5"/></svg>';
  var CHECK_SVG = '<svg class="check" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg>';

  function nameOf(code) {
    for (var i = 0; i < LANGS.length; i++) { if (LANGS[i][0] === code) return LANGS[i][1]; }
    return code;
  }
  function optList() { return ui ? Array.prototype.slice.call(ui.menu.children) : []; }
  function isOpen() { return ui && ui.root.getAttribute("data-open") === "true"; }

  function openMenu() {
    if (!ui) return;
    ui.root.setAttribute("data-open", "true");
    ui.btn.setAttribute("aria-expanded", "true");
    document.addEventListener("click", onDocClick, true);
    var cur = ui.menu.querySelector('[aria-selected="true"]') || ui.menu.children[0];
    if (cur) cur.focus();
  }
  function closeMenu(focusBtn) {
    if (!ui) return;
    ui.root.setAttribute("data-open", "false");
    ui.btn.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", onDocClick, true);
    if (focusBtn) ui.btn.focus();
  }
  function onDocClick(e) { if (ui && !ui.root.contains(e.target)) closeMenu(false); }

  function moveFocus(dir) {
    var list = optList(); if (!list.length) return;
    var idx = list.indexOf(document.activeElement);
    idx = (idx + dir + list.length) % list.length;
    list[idx].focus();
  }
  function onOptKey(e) {
    switch (e.key) {
      case "ArrowDown": e.preventDefault(); moveFocus(1); break;
      case "ArrowUp":   e.preventDefault(); moveFocus(-1); break;
      case "Home":      e.preventDefault(); optList()[0].focus(); break;
      case "End":       e.preventDefault(); var l = optList(); l[l.length - 1].focus(); break;
      case "Enter": case " ":
        e.preventDefault(); apply(this.getAttribute("data-code")); closeMenu(true); break;
      case "Escape":    e.preventDefault(); closeMenu(true); break;
      case "Tab":       closeMenu(false); break;
    }
  }

  function syncCustom(lang) {
    if (!ui) return;
    ui.label.textContent = nameOf(lang);
    for (var code in ui.opts) {
      if (!ui.opts.hasOwnProperty(code)) continue;
      ui.opts[code].setAttribute("aria-selected", code === lang ? "true" : "false");
    }
  }

  function buildSwitcher(current) {
    var sw = document.getElementById("langSwitcher");
    if (!sw) return;

    // Populate + keep the native select as hidden source of truth / fallback.
    var html = "";
    for (var i = 0; i < LANGS.length; i++) {
      var code = LANGS[i][0], name = LANGS[i][1];
      html += '<option value="' + code + '"' + (code === current ? " selected" : "") + ">" + name + "</option>";
    }
    sw.innerHTML = html;
    sw.addEventListener("change", function () { apply(sw.value); });
    sw.classList.add("is-enhanced");

    // Build the themed widget.
    var root = document.createElement("div");
    root.className = "lang-select";
    root.setAttribute("data-open", "false");

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-select__btn";
    btn.setAttribute("aria-haspopup", "listbox");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", sw.getAttribute("aria-label") || "Sprache / Language");
    btn.innerHTML = GLOBE_SVG + '<span class="lang-select__label"></span>' + CHEV_SVG;

    var menu = document.createElement("ul");
    menu.className = "lang-select__menu";
    menu.setAttribute("role", "listbox");

    var optMap = {};
    for (var j = 0; j < LANGS.length; j++) {
      var c = LANGS[j][0], n = LANGS[j][1];
      var li = document.createElement("li");
      li.className = "lang-select__opt";
      li.setAttribute("role", "option");
      li.setAttribute("data-code", c);
      li.setAttribute("tabindex", "-1");
      li.setAttribute("aria-selected", c === current ? "true" : "false");
      li.innerHTML = '<span class="lang-select__name">' + n + '</span>' +
                     '<span class="lang-select__code">' + c.toUpperCase() + '</span>' + CHECK_SVG;
      li.addEventListener("click", function () { apply(this.getAttribute("data-code")); closeMenu(true); });
      li.addEventListener("keydown", onOptKey);
      menu.appendChild(li);
      optMap[c] = li;
    }

    btn.addEventListener("click", function () { isOpen() ? closeMenu(false) : openMenu(); });
    btn.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); if (!isOpen()) openMenu(); }
    });

    root.appendChild(btn);
    root.appendChild(menu);
    sw.parentNode.insertBefore(root, sw.nextSibling);

    ui = { root: root, btn: btn, label: btn.querySelector(".lang-select__label"), menu: menu, opts: optMap };
    syncCustom(current);
  }

  function init() {
    var lang = detect();
    buildSwitcher(lang);
    apply(lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
