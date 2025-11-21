# 17square - Vysokoškolské koleje

Moderní webová prezentace vysokoškolských kolejí 17square. Projekt kombinuje čistý design s jednoduchostí použití a editace.

## 📋 O projektu

17square je projektový web pro vysokoškolské koleje s claimem **"Studuj. Žij. Zapoj se."**

Web je postaven na čistém HTML5, CSS3 a vanilla JavaScriptu, což zajišťuje:
- ✅ Jednoduchou editaci
- ✅ Rychlé načítání
- ✅ Plnou kontrolu nad kódem
- ✅ Žádné závislosti na frameworcích

## 🎨 Vizuální identita

- **Primární barva**: #B8532D (cihlově-oranžová)
- **Claim**: Studuj. Žij. Zapoj se. (Study. Live. Connect.)
- **Logo**: 17square

## 📁 Struktura projektu

```
Koleje/
├── index.html          # Domovská stránka
├── o-projektu.html     # Stránka o projektu
├── koleje.html         # Přehled kolejí
├── kontakt.html        # Kontaktní formulář
├── css/
│   └── style.css       # Všechny styly
├── js/
│   └── main.js         # JavaScript pro navigaci
└── images/             # Složka pro obrázky (zatím prázdná)
```

## 🚀 Jak začít

### Lokální spuštění

1. Stáhněte nebo naklonujte tento repozitář
2. Otevřete `index.html` v prohlížeči
3. Hotovo! Web běží bez nutnosti serveru

### Doporučené nástroje

Pro vývoj doporučujeme:
- **VS Code** s rozšířením Live Server
- Jakýkoliv moderní prohlížeč (Chrome, Firefox, Edge)

## ✏️ Jak editovat obsah

### Změna textu

Všechen text najdete přímo v HTML souborech. Jednoduše otevřete příslušný soubor a upravte text mezi značkami.

**Příklad - změna titulku na domovské stránce:**
```html
<!-- V souboru index.html -->
<h1 class="hero-title">
    <span class="hero-logo">17square</span>
</h1>
<p class="hero-claim">Studuj. Žij. Zapoj se.</p>
```

### Změna barev

Barvy jsou definovány v CSS proměnných na začátku souboru `css/style.css`:

```css
:root {
    --primary-color: #B8532D;    /* Hlavní oranžová barva */
    --primary-dark: #8F3F1F;     /* Tmavší varianta */
    --primary-light: #D16942;    /* Světlejší varianta */
    /* ... další barvy ... */
}
```

### Přidání obrázků

1. Umístěte obrázky do složky `images/`
2. V HTML použijte:
```html
<img src="images/nazev-obrazku.jpg" alt="Popis obrázku">
```

### Úprava navigace

Navigace je shodná na všech stránkách. Pokud chcete přidat novou položku:

```html
<ul class="nav-menu">
    <li><a href="index.html" class="nav-link">Domů</a></li>
    <li><a href="nova-stranka.html" class="nav-link">Nová stránka</a></li>
    <!-- ... -->
</ul>
```

## 📱 Responzivní design

Web je plně responzivní a přizpůsobí se:
- 📱 Mobilním telefonům (< 480px)
- 📱 Tabletům (480px - 768px)
- 💻 Desktopům (> 768px)

## 🎯 Klíčové sekce webu

### Domovská stránka (index.html)
- Hero sekce s logem a claimem
- Statistiky (1027 lůžek, 468 parkovacích míst, 18 000 m² rozsah)
- Preview projektu
- Kontaktní CTA

### O projektu (o-projektu.html)
- Popis vize a mise
- Informace o Olomouci jako univerzitním městě
- Hodnoty projektu
- **Poznámka:** Obsahuje placeholder obrázek radnice (`images/olomouc-radnice-placeholder.svg`), který je potřeba nahradit skutečnou fotografií

### Koleje (koleje.html)
- Přehled všech kolejí
- Společné vlastnosti
- Porovnání kolejí

### Kontakt (kontakt.html)
- Kontaktní formulář
- Kontaktní informace
- Často kladené otázky

## 🛠️ Technické detaily

### CSS
- Používá CSS Grid a Flexbox pro layout
- CSS proměnné pro snadnou změnu barev
- Mobile-first přístup
- Moderní shadows a transitions

### JavaScript
- Mobilní hamburger menu
- Smooth scroll pro anchor odkazy
- Scroll efekty na header

## 📝 Checklist pro další vývoj

- [ ] **Nahradit placeholder Olomoucké radnice** (`images/olomouc-radnice-placeholder.svg`) skutečnou fotografií
- [ ] Přidat skutečné obrázky kolejí
- [ ] Implementovat funkční kontaktní formulář (backend)
- [ ] Přidat Google Maps pro zobrazení lokace
- [ ] Vytvořit galerii obrázků
- [ ] Přidat více jazykových verzí
- [ ] Implementovat SEO optimalizace
- [ ] Přidat analytics

## 🤝 Jak přispívat

1. Vytvořte branch pro vaši změnu
2. Proveďte změny
3. Otestujte na různých zařízeních
4. Commitněte s popisnou zprávou
5. Vytvořte pull request

## 📄 Licence

© 2025 17square. Všechna práva vyhrazena.

## 📞 Kontakt

Pro otázky ohledně projektu kontaktujte:
- Email: info@17square.cz
- Web: [Bude doplněno]

---

**Vytvořeno s ❤️ pro 17square**
