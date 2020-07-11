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
**Všetok kód, čo napíšem, si môžeš stiahnuť v sekcii "Materiály".**

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

**Moderný JavaScript pre React, Angular, Vue, Node (ES2015+)**
:: https://www.learn2code.sk/kurzy/moderny-javascript-pre-react-angular-vue-node-es2015

_V kurze budem miestami používať JS nástroje ako_ **_npm, webpack, atď_**.
_Ak ich nepoznáš - alebo ak s JavaScriptom zatiaľ nie si kamoš najväčší - mám pre teba kurz._

**JavaScript a ES6**
:: https://www.learn2code.sk/kurzy/online-kurz-javascript-es6

Tento v sebe obsahuje aj celý ten "Moderný JavaScript" kurz. Je to monštrum. Spapal ho.

S týmto som sa vo videu hral.

**myjson**

:: [http://myjson.com
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

**setState s objektom**

použi, ak do stavu ukladáš kompletne novú hodnotu

```react
this.setState({
    dude: 'hello!!';
})
```

**setState s funkciou**

ak pre nový stav potrebuješ aktuálnu hodnotu stavu (to, čo je v stave momentálne)

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

### 21 INLINE styles, css-in-js, STYLED COMPONENTS, CSS MODULES

**CSS IN REACT**
:: [https://styled-components.com/docs/basics#motivation](https://styled-components.com/docs/basics#motivation)
:: [https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e](https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e)
:: [https://blog.bitsrc.io/5-ways-to-style-react-components-in-2019-30f1ccc2b5b](https://blog.bitsrc.io/5-ways-to-style-react-components-in-2019-30f1ccc2b5b)
:: [https://alligator.io/react/react-css](https://alligator.io/react/react-css)
**REACT SASS + MODULES**
:: [https://blog.bitsrc.io/how-to-use-sass-and-css-modules-with-create-react-app-83fa8b805e5e](https://blog.bitsrc.io/how-to-use-sass-and-css-modules-with-create-react-app-83fa8b805e5e)

**STYLED COMPONENTS**
:: [https://www.iamtimsmith.com/blog/how-to-use-styles-in-a-react-js-application](https://www.iamtimsmith.com/blog/how-to-use-styles-in-a-react-js-application)

### 22 REUSABLE CSS rady, JSX opakovačky, podstránky

**pozri si**
:: [https://youtu.be/9YUsiwRlz2s](https://youtu.be/9YUsiwRlz2s)

**aj takéto**
:: [https://youtu.be/MhTDp5FwfmM](https://youtu.be/MhTDp5FwfmM)

**a toto**
:: [https://youtu.be/J3eotWyZv5c](https://youtu.be/J3eotWyZv5c)

**a ešte aj**
:: [https://youtu.be/3IG0Y63LkDM](https://youtu.be/3IG0Y63LkDM)

### 23 HOOKS API, useState, useEffect, VEDĽAJŠIE EFEKTY

**useEffect chceš napríklad keď:**

```
- manipulujes s DOMom
- ked potrebujes event listeneri pripnut
- ked potrebujes fetchnut data, tahat json z nejakeho apicka
- alebo ked chces sputit timer cez setTimout
```

**HOOKS API**
:: [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)
:: [https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)
:: [https://reactjs.org/docs/hooks-overview.html](https://reactjs.org/docs/hooks-overview.html)
:: [https://reactjs.org/docs/hooks-reference.html](https://reactjs.org/docs/hooks-reference.html)
:: [https://reactjs.org/docs/hooks-faq.html](https://reactjs.org/docs/hooks-faq.html)

**useState + useEffect**
:: [https://reactjs.org/docs/hooks-state.html](https://reactjs.org/docs/hooks-state.html)
:: [https://reactjs.org/docs/hooks-effect.html](https://reactjs.org/docs/hooks-effect.html)
:: [https://overreacted.io/a-complete-guide-to-useeffect/](https://overreacted.io/a-complete-guide-to-useeffect/)

useState

1. Práca so `state` vo function komponentoch

useEffect

1. Manipulácia s DOM
2. eventListeners
3. fetch, ajax, api
4. setTimeout

Pravidlá

1. Vždy v najvrchnejšom leveli funkcie
   1. Nesmie byť v podmienke
   2. Nesmie byť v cykle
2. Môžu byť volané len vo function komponentoch

**HOOKS + AJAX**
:: [https://blog.bitsrc.io/making-api-calls-with-react-hooks-748ebfc7de8c](https://blog.bitsrc.io/making-api-calls-with-react-hooks-748ebfc7de8c)

**TYPESCRIPT + HOOKS**
:: [https://www.carlrippon.com/typed-usestate-with-typescript](https://www.carlrippon.com/typed-usestate-with-typescript)

### 24 Tunes podstránka v TS s HOOKS a cyklom a formom

prebehneme cez pole songov

```javascript
{
  songs.map((song) => <li key={song.id}>{JSON.stringify(song)}</li>);
}
```

nový song do poľa

```javascript
const newSong = {
  id: Math.max(...songs.map((s) => s.id)) + 1,
  artist: query,
  name: query,
};
setSongs([...songs, newSong]);
```

**REACT FORMS (EVENT TYPES)**
:: [https://www.carlrippon.com/building-super-simple-react-form-component-typescript-basics/](https://www.carlrippon.com/building-super-simple-react-form-component-typescript-basics/)
:: [https://www.carlrippon.com/building-a-react-form-component-with-typescript-validation/](https://www.carlrippon.com/building-a-react-form-component-with-typescript-validation/)
:: [https://blaipratdesaba.com/react-typescript-cheatsheet-form-elements-and-onchange-event-types-8c2baf03230c](https://blaipratdesaba.com/react-typescript-cheatsheet-form-elements-and-onchange-event-types-8c2baf03230c)
:: [https://stackoverflow.com/questions/42081549/typescript-react-event-types](https://stackoverflow.com/questions/42081549/typescript-react-event-types)

### 25 RODIČ a jeho DETI, sub-komponenty

navyrábaš nové súbory

```react
/components/tunes/TunesSearchForm.tsx
/components/tunes/TunesList.tsx
```

v rodičovi naimportuješ

```react
[ Tunes.tsx ]

// children
import TunesSearchForm from '../components/tunes/TunesSearchForm'
import TunesList from '../components/tunes/TunesList'
```

používaš

```react
<article className="tunes">
    <h1>Tunes</h1>
    <TunesSearchForm />
    <TunesList />
</article>
```

### 26 KOMUNIKÁCIA komponentov, TOP-DOWN DATA FLOW (teória)

**TOP-DOWN DATA FLOW**
:: [https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down](https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down)

V reacte môže stav tiecť **iba smerom dole.**

**RODIČ** eviduje stav. **MÔŽE** ho poslať decku dole cez **PROPS**.
Dieťa môže rodiča **POPROSIŤ**, či by nezmenil svoj stav. Cez **CALLBACK FUNKCIE**.

Keď oba **SKOMBINUJEŠ**, vieš dosiahnuť komunikáciu medzi súrodencami.

**REACT COMPONENT COMMUNICATION**
:: [https://reactjs.org/docs/components-and-props.HTML](https://reactjs.org/docs/components-and-props.HTML)
:: [https://reactjs.org/docs/composition-vs-inheritance.html](https://reactjs.org/docs/composition-vs-inheritance.html)
:: [https://www.javascriptstuff.com/component-communication](https://www.javascriptstuff.com/component-communication/)
:: [https://blog.bitsrc.io/react-communication-between-components-c0cfccfa996a](https://blog.bitsrc.io/react-communication-between-components-c0cfccfa996a)
:: [https://react.tips/how-reactjs-components-communicate](https://react.tips/how-reactjs-components-communicate/)
:: [https://medium.com/better-programming/angular-vs-react-component-communication-91af1a144295](https://medium.com/better-programming/angular-vs-react-component-communication-91af1a144295)
:: [https://passionfordev.com/react-communication-between-parent-and-child](https://passionfordev.com/react-communication-between-parent-and-child/)

### 27 KOMUNIKÁCIA cez PROPS od rodiča k decku

v **rodičovi**

```react
<TheNavigation brand="main" />
<TheNavigation brand="secondary" />
```

v **TheNavigation.tsx**

```typescript
// props
interface Props {
    brand: String
}

React.FC<Props> = (props) => {
    // dobry napad je rozlozit objekt props na konstanty
    const { brand, howMany } = props
}
```

**THINKING IN REACT, STATE vs. PROPS**
:: [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)
:: [https://lucybain.com/blog/2016/react-state-vs-pros](https://lucybain.com/blog/2016/react-state-vs-pros)

### 28 KOMUNIKÁCIA cez CALLBACK FUNC od decka k rodičovi

v **rodičovi** pridáš metódu

```react
const handleSearchFormSubmit = (data: string) => {

}
```

cez **PROP** ju prepošleš decku

```react
onSearchFormSubmit={handleSearchFormSubmit}
```

v **decku** príjmeš funkciu od rodiča

```typescript
interface Props {
  onSearchFormSubmit: (data: string) => void;
}
```

a potom ju v dieťati môžeš zavolať

```react
props.onSearchFormSubmit(query)
```

takto "poprosíš" rodiča, aby niečo spravil s dátami

**Thinking in React**
:: [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)

**Identify Where Your State Should Live**
:: [https://reactjs.org/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live](https://reactjs.org/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live)

### 29 SINGLE SOURCE OF TRUTH, vytiahni stav do rodiča

Ak viac komponentov používa rovnaké dáta, **nájdi ich najbližšieho spoločného rodiča a presuň dáta doň**. Stav žije v spoločnom rodičovi, nie je roztrúsený všelikde po komponentoch.

Toto je myšlienka, ktorú môžeš používať aj pri Vue alebo Angulare.
Zjednoduší ti to rozmýšľanie nad komponentami a nebudeš mať nutkanie používať prehnané veci ako Redux.

**THINKING IN REACT**
:: [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)

**LIFTING STATE UP**
:: [https://reactjs.org/docs/lifting-state-up.html](https://reactjs.org/docs/lifting-state-up.html)
**TOP-DOWN DATA FLOW**
:: [https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down](https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down)

### 30 REDUX (nie)

**Redux je knižnica na manažovanie stavu.**
Namiesto toho, aby stal bol roztrúsený po komponentoch, bude všetok v tzv. **STORE**. Teória dobrá, v praxi skôr lepšie pre veľké projekty. Rozhodne nie pre všetky, rozhodne nie, keď sa ešte len učíš. Pretože kód je komplikovaný.

**REDUX, VUEX, NgRx STORE**
:: [https://redux.js.org](https://redux.js.org/)
:: [https://vuex.vuejs.org](https://vuex.vuejs.org/)
:: [https://ngrx.io/guide/store](https://ngrx.io/guide/store)

**YOU MIGHT NOT NEED REDUX**
:: [https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
**WHEN TO USE A STORE AND WHY?**
:: [https://blog.angular-university.io/angular-2-redux-ngrx-rxjs](https://blog.angular-university.io/angular-2-redux-ngrx-rxjs)

### 31 TS INTERFACE, vlastné dátové typy v TS + jeho história

**V TypeScripte si môžeš doprogramovať vlastné dátové typy.**
Ak máš objekty pre usera, môžeš objektu presne definovať jeho tvar.
Že z čoho presne sa každý objekt usera musí skladať.
Potom dostávaš presné rady, chyby, nápovedy.

```typescript
export interface Song {
  id: number;
  artist: string;
  name: string;
}

export interface User {
  firstName: string;
  lastName: string;
  favoriteSong?: Song;
}
```

Môžeš si spraviť súbor týchto typov. Naimportovať všade, kde ich chceš používať.

```react
import { Song } from '../../types'
```

### 32 useRef odkaz na DOM elementy, OPTIONAL CHAINING, refaktoring

V tomto videu sa toho deje hrozne veľa. Prepáč.
Potreboval som spraviť **refactoring**, trochu zjednodušiť kód. A keď prepisujem kopu súborov vo videu rýchlo za sebou, tažko sa to sleduje. Je to rýchle jak hokejista na bobovej dráhe.

V úvode videa poviem, čo všetko presne vo videu budem robiť. V skratke **odstránim searchQuery** zo stavu a nahradím ho **pomocou useRef**. Tým pádom sa mi zjednoduší komunikácia medzi SearchForm komponentom a jeho rodičom - lebo **môžem odstrániť kopu callback funkcií.** Čo aj spravím.

Zostane mi jednoduchší kód. Na konci komplikovaného videa:)

Viac menej som v rámci prípravy na finiš appky potreboval spraviť niekoľko drobností. A všetky som ich dal do tohoto videa.

Ak sa ti to ťažko sleduje, chyba nie je v tvojom príjmači. Ani v tvojej hlave.
Chyba je v mojom videu.
**Whoops!**

**REFs IN FUNCTION COMPONENTS (& TYPESCRIPT)**

:: [https://reactjs.org/docs/hooks-reference.html#useref](https://reactjs.org/docs/hooks-reference.html#useref)
:: [https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components](https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components)
:: [https://blog.logrocket.com/how-to-use-react-createref-ea014ad09dba/](https://blog.logrocket.com/how-to-use-react-createref-ea014ad09dba/)
:: [https://linguinecode.com/post/how-to-use-react-useref-with-typescript](https://linguinecode.com/post/how-to-use-react-useref-with-typescript)

**When to use React useRef and useLayoutEffect vs useEffect**
:: [https://linguinecode.com/post/when-to-use-useref-and-uselayouteffect](https://linguinecode.com/post/when-to-use-useref-and-uselayouteffect)

**OPTIONAL CHAINING**
:: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

**ON CHANGE / ON INPUT**
:: [https://stackoverflow.com/questions/17047497/difference-between-change-and-input-event-for-an-input-element](https://stackoverflow.com/questions/17047497/difference-between-change-and-input-event-for-an-input-element)
:: [https://stackoverflow.com/questions/38256332/in-react-whats-the-difference-between-onchange-and-oninput](https://stackoverflow.com/questions/38256332/in-react-whats-the-difference-between-onchange-and-oninput)

### 33 LODASH, @types, iTunes api, AXIOS

**Package napísane v JavaScripte nemajú typové definície.**
Ak ich chceš pridať, stačí doinštalovať **@types package**, ktorý pravdepodobne existuje. Inštaluj ho ako **dev dependency**, lebo je len pre teba, počas kódenia. Nepatrí do výsledného bundle pre prehliadač.
Napríklad:

```
yarn add lodash-es
yarn add --dev @types/lodash-es
```

**iTunes DOKUMENTACIA**
:: [https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api)

**Lodash DOKUMENTACIA, debounce**
:: [https://lodash.com/docs](https://lodash.com/docs)
:: [https://lodash.com/docs#debounce](https://lodash.com/docs#debounce)

**REACT ON/HANDLE NAMING CONVENTION**
:: [https://medium.com/javascript-in-plain-english/handy-naming-conventions-for-event-handler-functions-props-in-react-fc1cbb791364](https://medium.com/javascript-in-plain-english/handy-naming-conventions-for-event-handler-functions-props-in-react-fc1cbb791364)
:: [https://jaketrent.com/post/naming-event-handlers-react/](https://jaketrent.com/post/naming-event-handlers-react/)

**(free) apis**
:: [https://reqres.in](https://reqres.in/)
:: [https://github.com/toddmotto/public-apis](https://github.com/toddmotto/public-apis)
:: [https://any-api.com](https://any-api.com/)
:: [https://www.reddit.com/r/webdev/comments/3wrswc/what_are_some_fun_apis_to_play_with](https://www.reddit.com/r/webdev/comments/3wrswc/what_are_some_fun_apis_to_play_with)
:: [https://www.reddit.com/r/RedLetterMedia.json](https://www.reddit.com/r/RedLetterMedia.json)
:: [https://dev.to/aumayeung/free-and-fake-apis-you-can-use-to-practice-front-end-development-4eck](https://dev.to/aumayeung/free-and-fake-apis-you-can-use-to-practice-front-end-development-4eck)

**môj výber**
:: [https://ghibliapi.herokuapp.com](https://ghibliapi.herokuapp.com/)
:: [https://api.nasa.gov](https://api.nasa.gov/)
:: [https://pokeapi.com](https://pokeapi.com/)
:: [https://api.abalin.net](https://api.abalin.net/)

### 34 Extract data, Samotvorba Interfacu, OBJECT DESTRUCTURING, typ Song

**Paste JSON as Code**
:: [https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)
:: [https://blog.quicktype.io/quicktype-extensions](https://blog.quicktype.io/quicktype-extensions/)

Z networku vytiahni response (json). 

![00-network-tab](https://user-images.githubusercontent.com/42937562/87232654-f896f000-c3c0-11ea-8dd1-ebbdd594ea72.png)

Z neho jeden item a ten pastni do nového súboru.

![01-paste-to-code](https://user-images.githubusercontent.com/42937562/87232655-f92f8680-c3c0-11ea-9453-59ab64bb747a.png)

Zavolaj `Open quick type for JSON`

![02-open-quicktype-for-json](https://user-images.githubusercontent.com/42937562/87232656-f9c81d00-c3c0-11ea-8362-3fd4f4941404.png)

Výsledok

![04-result](https://user-images.githubusercontent.com/42937562/87232657-f9c81d00-c3c0-11ea-864f-30b44767e52b.png)

sprav si funkciu, ktorá z objektu **vyextrahuje** len chcené vlastnosti

```typescript
const extractData({ trackName: title }) {
    return { title }
}
```

potom do nej pošleš objekt **extractData(obj)** a vráti sa ti nový objekt, v ktorom zostane len title

**object destructuring**
:: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment](https://stackoverflow.com/questions/39672807/types-in-object-destructuring)

**types in object destructuring?**
:: [https://stackoverflow.com/questions/39672807/types-in-object-destructuring](https://stackoverflow.com/questions/39672807/types-in-object-destructuring) (aj keď vždy byť skeptický k stackoverflow)

### 35 FORMÁTOVANIE výpisov, `<TunesSong>` komponent

**Chumbawamba**
:: [https://en.wikipedia.org/wiki/The_Boy_Bands_Have_Won](https://en.wikipedia.org/wiki/The_Boy_Bands_Have_Won)









