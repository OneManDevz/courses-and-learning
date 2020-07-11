### 01 React

Tri veci:

**1. REAKTÍVNOSŤ**
**2. SYNCHRONIZÁCIA UI so STAVOM**
**3. Programovanie cez KOMPONENTY**

Porozprávam o tom.
Naučím ťa.

**react vs angular vs vue**
:: https://www.npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue
:: https://github.com/m98/react-angular-vue-starers
:: https://merehead.com/blog/angular-vs-react-vs-vue-2020/

**pár starších textov, ale furt ok**
:: https://www.codeinwp.com/blog/angular-vs-vue-vs-react/
:: https://www.freecodecamp.org/news/complete-guide-for-front-end-developers-javascript-frameworks-2019/
:: https://medium.com/@TechMagic/reactjs-vs-angular5-vs-vue-js-what-to-choose-in-2018-b91e028fa91d
:: https://zendev.com/2018/06/19/react-usage-beating-vue-angular.html
:: https://www.youtube.com/watch?v=SWZ_4YBFBhs

### 02 Ako to bude prebiehať (nastavenia, pluginy, programy)

Dve appky.
**NA PRVEJ)** ukážem reaktivitu v praxi
**NA DRUHEJ)** ťa naučím komponenty a TypeScript

Otázky ohľadom kódu prosím sem **https://www.facebook.com/groups/webrebeli/** alebo do diskusie.

Mám JavaScript kurzy, ak by si to potreboval:)

**VEĽKÝ JS KURZ VŠETKÉHO**
:: https://www.learn2code.sk/kurzy/online-kurz-javascript-es6

**MALÝ KURZ MODERNÝCH JS ZÁPISOV**
:: https://www.learn2code.sk/kurzy/moderny-javascript-pre-react-angular-vue-node-es2015

Tieto veci si stiahni a nainštaluj.

**VUE (Vetur a VSCode Snippets)**
:: https://marketplace.visualstudio.com/items?itemName=octref.vetur
:: https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets

**VUE DEVTOOLS**
:: https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/
:: https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd

**VUE CHEAT-SHEET**
:: https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf
:: https://www.vuemastery.com/vue-cheat-sheet/

**REACT (ES7 React/Redux/GraphQL/React-Native snippets)**

:: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

**REACT DEVTOOLS**
:: https://addons.mozilla.org/en-US/firefox/addon/react-devtools/
:: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

**REACT CHEAT-SHEET**
:: https://devhints.io/react
:: https://jsmanifest.com/react-cheatsheet/

**ANGULAR (Angular Snippets)**
:: https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2

**AUGURY EXTENSION
**:: https://addons.mozilla.org/en-US/firefox/addon/angular-augury/
:: https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd

**ANGULAR CHEAT-SHEET**
:: https://angular.io/guide/cheatsheet
:: https://devhints.io/typescript

komponent cez Classy (neskôr ukážem cez funkcie)

```javascript
class App extends React.Component {

    this.state = {
        dude: 'Marceline the Vampire'
    }
    render() {
        return <div>{this.state.dude} lives!</div>;
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
```

JSX pravidlá

1. className namiesto class
2. atribúty sú camelCase (onClick, tabIndex, ...)

### 03 Reaktívne appky | najprv vo VUE

Ideme na to. Zhurta. Na čo čakať. Na nič.
V prvých troch videách zbúcham maličkú stránku, ktorú rozhýbem cez Vue.js. Ak poznáš čistý JS alebo jQuery, uvidíš tú mágiu.

Všetky veci, ktoré ukážem, potom v kurze postupne vysvetlím.
**Všetok kód, čo napíšem, si môžeš stiahnuť v sekcii "**Materiály\*\*".

Sťahuj si ho. A hraj sa s ním. Upravuj môj kód. Meň ho, rob z neho vlastnú stránku. Uč sa podľa videí, ale pokojne kopíruj kusy z môjho kódu. Vylepšuj ho. Hraj sa. Zabávaj sa. Makaj.

**Vue.js**
:: [https://vuejs.org](https://vuejs.org/)
:: [https://vuejs.org/guide](https://vuejs.org/guide/)
**Vue štartér**

```vue
const app = new Vue({ el: '#app', data: { } })
```

### 04 PODMIENKY a CYKLY v HTML, SYNCHRONIZÁCIA stavu s UI | vue

**Reaktívne frameworky** (Vue, React, Angular)

zo statického HTML kódu spravia živú šablónu. HTML kódu pridáš pravidláva vždy keď príde zmena, automaticky na ňu **zareaguje**.

Nemusíšvfurt selectovať elementy zo stránky, prependovať, appendovať, vyrábať nové prázdne, naťahovať sa s classListom... ty napíšeš HTML kód. A povieš mu _"buď tu iba ak platí toto"_ a Vue sa postará o zvyšok.

Môžemvtu vypisovať, kým sa mi prsty neodlomia a neodkráčajú v proteste do západu slnka, ale veď pozri video. Vieš jak sa hovorí - lepšie raz youtube, ako tisíckrát čítať. Aj keď toto neni youtube. (Je to vimeo.)

### 05 JSON zo servera, ANIMÁCIE | vue

Tu už sa trochu rozšupnem a pridám animácie a AJAX/JSON a iné srandy, ale neboj nič.
Postupne si všetko prejdeme.

_V kurze budem písať ES6+ kód._
_Ak ho nepoznáš - alebo poznáš, ale chceš poznať lepšie - mám pre teba kurz._

Moderný JavaScript pre React, Angular, Vue, Node (ES2015+)**
:: **https://www.learn2code.sk/kurzy/moderny-javascript-pre-react-angular-vue-node-es2015**

_V kurze budem miestami používať JS nástroje ako_ **_npm, webpack, atď_**.
_Ak ich nepoznáš - alebo ak s JavaScriptom zatiaľ nie si kamoš najväčší - mám pre teba kurz._

**JavaScript a ES6**
:: **https://www.learn2code.sk/kurzy/online-kurz-javascript-es6**

Tento v sebe obsahuje aj celý ten "Moderný JavaScript" kurz. Je to monštrum. Spapal ho.

S týmto som sa vo videu hral.

**myjson
**:: [http://myjson.com
](http://myjson.com/):: https://api.myjson.com/bins/zg7ze

### 06 Class komponent, JSX, stav/state cez setState

**react
**:: [https://reactjs.org](https://reactjs.org/)

ideálne použi **CREATE REACT APP** (ukážem neskôr v kurze)
:: [https://create-react-app.dev](https://create-react-app.dev/)
:: https://reactjs.org/docs/create-a-new-react-app.html#create-react-app

alebo

```html
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

_len ty si samozrejme nakopči_ **_aktuálne_**, _z react dokumentácie_

komponent cez **Classy** (neskôr ukážem cez funkcie)

```react
class App extends React.Component {

    this.state = {
        dude: 'Marceline the Vampire'
    }
    render() {
        return <div>{this.state.dude} lives!</div>;
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
```

**JSX pravidlá**

1. **className** namiesto class
2. atribúty sú **camelCase** (onClick, tabIndex, ...)
3. tagy musíš uzavrieť (`<br />`namiesto `<br>`, `<img />` namiesto `<img>`)

### 07 Robota s FORM-om, iterácia cez POLE

zachyť **zmenu** v inpute

```react
handleChange = event => {
    this.setState({ dude: event.target.value });
}

<input
    type="text"
    value={this.state.dude}
    onChange={this.handleChange}
/>
```

na prejazd cez pole použi **map()** (alebo **filter()** a **concat()**)
žiaden each alebo forEach

:: https://reactjs.org/docs/lists-and-keys.html

```react
const dudes = this.state.characters.map(dude => <li key={dude.id}>{dude.who}</li>);

<ul>{dudes}</ul>
```

### 08 Zobraz IF platí, odošli FORM a spracuj dáta

zobraz element **AK platí podmienka**

```react
{podmienka && (
    <small>
        <em> - lol, short name</em>
    </small>
)}
```

pridaj class **AK platí podmienka**

```react
className={podmienka ? 'strong' : ''}
```

ak máš **pole v stave** a potrebuješ doň **pridať novú hodnotu**

```react
[...starePole, novaHodnota]
```

_vytvor nové pole,_ [_rozlož doň_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) _hodnoty starého poľa, pridaj novú hodnotu_

**spread operator**
:: https://leanpub.com/understandinges6/read#leanpub-auto-the-spread-operator
:: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

### 09 setState objekt VS. setState function

v [snippetoch](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) máš 2 skratky **sst** a **ssf**

pre setState s objektom a setState s funkciou

**setState s objektom
**použi, ak do stavu ukladáš kompletne novú hodnotu

```react
this.setState({
    dude: 'hello!!';
})
```

**setState s funkciou
**ak pre nový stav potrebuješ aktuálnu hodnotu stavu (to, čo je v stave momentálne)

```react
this.setState(state => {
    return {
        characters: [...state.characters, newDude]
    }
})
```

v **state** objekte je teraz správny, aktuálny stav komponentu

**setState objekt vs funkcia**
:: https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous

### 10 Nová JSX šablóna, odoslanie ENTERom

nájdi **max ID v poli**

```react
Math.max(...this.state.characters.map(d => d.id))
```

či bol **stlačený ENTER**

```react
<input onKeyPress={this.handleSubmit} />

handleSubmit = event => {
    if (event.key === 'Enter') {
        ...
    }
}
```

pridávam **classy podľa stavu**

```react
<article
   className={
       dude.cool < 10 ? 'faded' : dude.cool > 50 ? 'gold' : ''
   }
>
```

### 11 UPDATE cool, REMOVE dude

ak chceš do metódy preposlať **aj vlastné dáta aj event objekt**

```react
onChange={this.handleCool(dude)}

handleCool = dude => event => {
    console.log(dude, event)
}
```

alebo takto

```react
onChange={event => this.handleCool(dude, event)}

handleCool = (dude, event) => { ... }
```

**UPRAVIŤ** konkrétny **objekt v poli** môžeš **v map cykle**

```react
this.setState(state => {
    return {
        characters: state.characters.map(item =>
            item === dude ? { ...item, cool } : item
        )
    }
})
```

**VYMAZAŤ** objekt z poľa môžeš cez **filter**

```react
this.setState(state => {
    return {
        characters: state.characters.filter(item => item !== dude)
    }
})
```

**update objekt v poli**
:: https://stackoverflow.com/a/46518653

**add/remove objekt v poli**
:: https://scriptverse.academy/tutorials/reactjs-update-array-state.html

**poslať hodnotu do metódy**
:: https://ozmoroz.com/2018/07/pass-value-to-onclick-react/
:: https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
:: https://upmostly.com/tutorials/react-onclick-event-handling-with-examples

### 12 REF na DOM element, VIRTUAL DOM, JSON, LIFECYCLE metódy

**feč feč feč**

```react
fetch('https://api.myjson.com/bins/zg7ze')
    .then(res => res.json())
    .then(json => this.setState({ characters: json }))
```

**refs**
:: https://reactjs.org/docs/refs-and-the-dom.html

**čo je mount**
:: https://jaketrent.com/post/what-does-mount-mean-in-react

**ajax v reacte**
:: https://reactjs.org/docs/faq-ajax.html

**rethinking reactivity**
:: https://youtu.be/AdNJ3fydeao
:: https://youtu.be/BzX4aTRPzno

### 13 CREATE-REACT-APP, react SERVER, ANIMÁCIE

**create-react-app**
:: [https://create-react-app.dev](https://create-react-app.dev/)

**ideš na to**

```cmd
npx create-react-app adresar-pre-appku
cd adresar-pre-appku
yarn start (alebo npm run start)
```

**react animácie**

:: https://reactjs.org/docs/animation.html
:: https://github.com/reactjs/react-transition-group
:: https://reactcommunity.org/react-transition-group
:: https://reactcommunity.org/react-transition-group/css-transition

**viac spôsobov ako animovať**
:: https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf
:: https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935
:: https://www.tutorialspoint.com/reactjs/reactjs_animations.htm

### 14 TypeScript (je JavaScript, len viac)

**TypeScript**
:: https://devhints.io/typescript
:: [https://www.typescriptlang.org](https://www.typescriptlang.org/)

### 15 KOMPONENTY, čo je komponent a prečo a taktiež ako a ešte raz prečo

Ak ti v HTML jazyku niečo chýba, môžeš si to doprogramovať.
Cez **komponenty**.

napríklad takýto **color picker**
:: https://casesandberg.github.io/react-color

**pre inšpiráciu**
:: [https://www.kiwi.com](https://www.kiwi.com/)
:: https://bulma.io/documentation/components

**react štruktúra súborov**
:: https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76
:: https://medium.com/hackernoon/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed
:: https://marmelab.com/blog/2015/12/17/react-directory-structure.html

### 16 Druhá appka s iTunes cez KOMPONENTY a v TypeScripte

spravíme druhá appku
budeme si púštať itunes pesničky
a ty si...

**...pusti toto video**
[https://youtu.be/jO_UVHKp5G0](https://youtu.be/jO_UVHKp5G0)

**a toto**
[https://youtu.be/fCUTX1jurJ4](https://youtu.be/fCUTX1jurJ4)

**a ešte toto**
[https://youtu.be/8NFy6Uc2BHs](https://youtu.be/8NFy6Uc2BHs)

**plus toto**
[https://youtu.be/TebCHHCw9rY](https://youtu.be/TebCHHCw9rY)

**a toto**
[https://youtu.be/8zfYO9sZjrE](https://youtu.be/8zfYO9sZjrE)

alebo nie, je to na tebe.

### 17 CREATE-REACT-APP s TypeScriptom, iTunes appka

**create react app**
:: [https://create-react-app.dev](https://create-react-app.dev/)

**plus typescript**

:: [https://create-react-app.dev/docs/adding-typescript](https://create-react-app.dev/docs/adding-typescript)

```cmd
yarn create react-app react-tunes-ts --template typescript
cd react-tunes-ts
yarn serve
```

**sass support**

```
yarn add node-sass
```

### 18 Chill video, prejdem SÚBORY APPKY, vyrobím pár KOMPONENTOV

**wheeeeee**
:: [https://keyboard.cool](https://keyboard.cool/)

pozri si
:: [https://youtu.be/jOBRLH9O2i4](https://youtu.be/jOBRLH9O2i4)

a daj si
:: [https://youtu.be/l5JMw5SWLJE](https://youtu.be/l5JMw5SWLJE)

a ešte
:: [https://youtu.be/msPCQgRPPjI](https://youtu.be/msPCQgRPPjI)

**REACT FOLDER STRUCTURE**
:: [https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)
:: [https://medium.com/hackernoon/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thi...](https://medium.com/hackernoon/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed)
:: [https://marmelab.com/blog/2015/12/17/react-directory-structure.html](https://marmelab.com/blog/2015/12/17/react-directory-structure.html)

### 19 React ROUTER

**REACT ROUTER**

```cmd
yarn add react-router-dom
yarn add --dev @types/react-router-dom
```

**REACT ROUTER**
:: [https://reacttraining.com/react-router/web/guides/quick-start](https://reacttraining.com/react-router/web/guides/quick-start)
:: [https://blog.pshrmn.com/simple-react-router-v4-tutorial/](https://blog.pshrmn.com/simple-react-router-v4-tutorial/)
:: [https://codesandbox.io/s/vvoqvk78](https://codesandbox.io/s/vvoqvk78)

**HASH ROUTER vs BROWSER ROUTER**
:: [https://stackoverflow.com/questions/51974369/hashrouter-vs-browserrouter](https://stackoverflow.com/questions/51974369/hashrouter-vs-browserrouter)

### 20 Tvoje prvé (lol, lož) FUNCTION KOMPONENTY, podstránky

```
> command palette
"es7 snippet search"
"typescript"
```

ja na typescript komponenty používam snippet

```
tsrafce
```
