# Async/Await & Progress Bar

In this lesson we’ll continue to build out our API calls, first by using Async/Await which is common to see in Nuxt applications. Then we’ll build out our event show page, adding an additional API call when we view a specific event like `/event/1`. We’ll then get our progress bar working.

## Async/Await

In the previous lesson our API code without data handling looked like:

<img width="823" height="436" src=":/fee17ebf53854a0a95e8a1f9f60acc6f"/>

However, using promises with `then` can start to break down when they get nested a bunch:

<img width="823" height="445" src=":/778921a39b2b49a583e6eaa6a8249ce7"/>

As you can see, using lots nested `then`s in your code may not be great. In a perfect world we’d have some way we could write code without nesting, maybe like this:

<img width="823" height="333" src=":/5d037c4c44c04145b2b6bbecd8296eb7"/>

However, this code wouldn’t work. This is where `async/await` come in, providing two pieces of syntax that allow this sort of code.

<img width="823" height="367" src=":/0be71828f41740ec945e092e37279443"/>

So, how would our original API `then` code be rewritten using `async/await`? Like this:

<img width="823" height="528" src=":/200c3591042e4d1eb771e6957b1963bc"/>

Using ES6 destructuring we can simplify this to:

```
      async asyncData({ $axios }) {
        const { data } = await $axios.get('http://localhost:3000/events')
        return {
          events: data
        }
      },

```

When we go to add error handling back into the code, we can now use a standard `try` and `catch` block like so:

```
      async asyncData({ $axios, error }) {
        try {
          const { data } = await $axios.get('http://localhost:3000/events')
          return {
            events: data
          }
        } catch (e) {
          error({
            statusCode: 503,
            message: 'Unable to fetch events events at this time'
          })
        }
      },

```

Using this syntax isn’t necessarily better than using promises with `then`, it’s just a matter of preference. However, if we were doing more nesting with `then`, using async / await might be a better choice.

## Adding an API call to our Event Show Page

Now it’s time to add an API call when we view a specific event, like `/event/1` to view the event with the id of 1. We’ll create some async/await code to call the API, and update our h1 and SEO tags.

📃 **/pages/event/_id.vue**

```
    <template>
      <div>
        <h1>{{ event.title }}</h1>
      </div>
    </template>
    <script>
    export default {
      head() {
        return {
          title: this.event.title,
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'What you need to know about ' + this.event.title
            }
          ]
        }
      },
      async asyncData({ $axios, error, params }) {
        try {
          const { data } = await $axios.get(
            'http://localhost:3000/events/' + params.id
          )
          return {
            event: data
          }
        } catch (e) {
          error({
            statusCode: 503,
            message: 'Unable to fetch event #' + params.id
          })
        }
      }
    }
    </script>

```

Now if we jump in the browser, we can see that our event show page is working as intended:

<img width="823" height="463" src=":/1bf679ff1ba047278fab6949b0e72b7e"/>

## Implementing our Progress Bar

So, we haven’t seen a progress bar in our app, while the API is getting called, but it’s actually already working. It’s just been white, and invisible at the top of our page. Let’s make it visible by going into the `nuxt.config.js` and updating this one bit of configuration:

📃 **/nuxt.config.js**

```
      ...
      /*
      ** Customize the progress-bar color
      */
      loading: { color: '#39b982' },
      ...

```

Also, let’s change the way we’re running our API, to provide a 2000 millisecond (2 second) delay so we can really see the progress bar working.

```
    $ json-server --watch db.json --delay 2000

```

Now we can see it working in our browser:

<img width="823" height="463" src=":/c9cd94c12bb54c1386110f53136b06d5"/>

## ⏪ To ReVue

In this lesson we learned about using aasync/await`as an alternative to Promises with`then`, we used`async/await` to call our API in our Event List and Event Show page, and we got the progress bar working. In the next lesson we’ll learn how to use Vuex to encapsulate our state in our Nuxt app.