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
1) className namiesto class
2) atribúty sú camelCase (onClick, tabIndex, ...)
3) tagy musíš uzavrieť (<br /> namiesto <br>, <img /> namiesto <img>)
-----------------------------------------------------------------------------------------------------------

zachyť zmenu v inpute
```javascript
handleChange = event => {
    this.setState({ dude: event.target.value });
}
    
<input
    type="text"
    value={this.state.dude}
    onChange={this.handleChange}
/>
```

na prejazd cez pole použi map() (alebo filter() a concat())
žiaden each alebo forEach

[list and keys](https://reactjs.org/docs/lists-and-keys.html)
```javascript
const dudes = this.state.characters.map(dude => <li key={dude.id}>{dude.who}</li>);
 
<ul>{dudes}</ul>
```
-----------------------------------------------------------------------------------------------------------

zobraz element AK platí podmienka
```javascript
{podmienka && (
    <small>
        <em> - lol, short name</em>
    </small>
)}
```

pridaj class AK platí podmienka
```javascript
className={podmienka ? 'strong' : ''}
```

ak máš pole v stave a potrebuješ doň pridať novú hodnotu
```javascript
[...starePole, novaHodnota]
```
vytvor nové pole, rozlož doň hodnoty starého poľa, pridaj novú hodnotu

[spread operator](https://leanpub.com/understandinges6/read#leanpub-auto-the-spread-operator)
[::](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
-----------------------------------------------------------------------------------------------------------

v snippetoch máš 2 skratky sst a ssf
pre setState s objektom a setState s funkciou

setState s objektom
použi, ak do stavu ukladáš kompletne novú hodnotu
```javascript
this.setState({
    dude: 'hello!!';
})
```

setState s funkciou
ak pre nový stav potrebuješ aktuálnu hodnotu stavu (to, čo je v stave momentálne)
```javascript
this.setState(state => {
    return {
        characters: [...state.characters, newDude]
    }
})
```
v state objekte je teraz správny, aktuálny stav komponentu

[setState objekt vs funkcia](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)
-----------------------------------------------------------------------------------------------------------

nájdi max ID v poli
```javascript
Math.max(...this.state.characters.map(d => d.id)) 
```

či bol stlačený ENTER
```javascript
<input onKeyPress={this.handleSubmit} />
  
handleSubmit = event => {
    if (event.key === 'Enter') {
        ...
    }
}
```

pridávam classy podľa stavu
```javascript
<article
   className={
       dude.cool < 10 ? 'faded' : dude.cool > 50 ? 'gold' : ''
   }
>
```

-----------------------------------------------------------------------------------------------------------

ak chceš do metódy preposlať aj vlastné dáta aj event objekt
```javascript
onChange={this.handleCool(dude)}
  
handleCool = dude => event => {
    console.log(dude, event)
}
```

alebo takto 
```jsx
onChange={event => this.handleCool(dude, event)}
  
handleCool = (dude, event) => { ... }
```

UPRAVIŤ konkrétny objekt v poli môžeš v map cykle
```javascript
this.setState(state => {
    return {
        characters: state.characters.map(item =>
            item === dude ? { ...item, cool } : item
        )
    }
})
```

VYMAZAŤ objekt z poľa môžeš cez filter
```javascript
this.setState(state => {
    return {
        characters: state.characters.filter(item => item !== dude)
    }
})
```
-----------------------------------------------------------------------------------------------------------

feč feč feč
```javascript
fetch('https://api.myjson.com/bins/zg7ze')
    .then(res => res.json())
    .then(json => this.setState({ characters: json }))
```
[refs](https://reactjs.org/docs/refs-and-the-dom.html)
[čo je mount](https://jaketrent.com/post/what-does-mount-mean-in-react)
[ajax v reacte](https://reactjs.org/docs/faq-ajax.html)

rethinking reactivity
:: https://youtu.be/AdNJ3fydeao
:: https://youtu.be/BzX4aTRPzno
-----------------------------------------------------------------------------------------------------------

[create-react-app](https://create-react-app.dev)

ideš na to
```
npx create-react-app adresar-pre-appku
cd adresar-pre-appku
yarn start (alebo npm run start)
```

react animácie
:: [https://reactjs.org/docs/animation.html](https://reactjs.org/docs/animation.html)
:: [https://github.com/reactjs/react-transition-group](https://github.com/reactjs/react-transition-group)
:: [https://reactcommunity.org/react-transition-group](https://reactcommunity.org/react-transition-group)
:: [https://reactcommunity.org/react-transition-group/css-transition](https://reactcommunity.org/react-transition-group/css-transition)


viac spôsobov ako animovať
:: [https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf](https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf)
:: [https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935](https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935)
:: [https://www.tutorialspoint.com/reactjs/reactjs_animations.htm](https://www.tutorialspoint.com/reactjs/reactjs_animations.htm)
-----------------------------------------------------------------------------------------------------------
