# Model

In the preamble, we introduced the basic usage and used the zero config library, `kurimudb-zero-config`. Normally, this would have already satisfied our needs.

However, if we are currently developing a complex single-page application, do we really want to save various kinds of data messily in a single object? This is not a good idea. 

This is the time for **Model feature** to make its grand debut！ 🎉

## Getting Started

Models are the core of saving and managing your data. The `memory`、`local`、`cookie` and `db` objects we previously used in our zero config library are actually all models!

Before we continue, let's install Kurimudb:

```bash
npm i kurimudb@5
```

## Create a Model

Creating a model is actually very simple. You only need to inherit the Kurimudb's Model class.

```js
// create a file /models/configState.js
// we can use it to store data related to user configuration
import { SyncModels } from "kurimudb";

export default new class ConfigState extends SyncModels.keyValue {
  super({
    // model name is required; must be globally unique
    name: "ConfigState",
  });
}
```

Just like this, you will have a `ConfigState` model. You can read and write the data inside it like an ordinary object:

```js
import configState from './models/configState.js';

configState.data.say = 'hello world'; // writing..
console.log(configState.data.say); // reading..
delete configState.data.say; // deleting..
'say' in configState; // check existence..
```

## (API) Interface Similar to the Storage Object

If you have used `localStorage`, you will be familiar with this method:

```js
local.setItem('say', 'hello'); // setting
let say = local.getItem('say'); // obtaining
local.removeItem('say'); // deleting
local.subscribeItem('say', (val) => { ... }); // subscription data mutating
local.bulkSetItem({
  say: 'hello',
  then: 'goodbye',
}); // batch setting
local.bulkGetItem(['say', 'then']); // batch obtaining
local.bulkRemoveItem(['say', 'then']); // batch deleting
```

The functions of the batch operation are all **atomic**. If the operation on some of the values fails, the previously successful value will be automatically rolled back.

Instead of manipulating data through the `data` object in the previous article, we actually **prefer** you to use the API similar to storage object. Explicitly called functions are more readable, and are not easily confused with ordinary objects and cause bugs.

## Model Methods

We can add **any methods** in the model class! Just like:

```js
// /models/configState.js
import { Models } from 'kurimudb';

class ConfigState extends Models.keyValue {
  // ..

  // add a model method
  setFoo(bar, foo) {
    // various logic..
    this.data.foo = foo;
    this.data.bar = bar;
  }

  // the method can also be asychronous
  async calcBar() {
    // ..
  }
}

export default new ConfigState();
```

Directly call the method when using it：

```js
import configState from './models/configState.js';

configState.setFoo();
await configState.calcBar();
```

We recommend that write the changes to the model data **all in the method inside the model**. The external only changes the data of the model by calling these methods. Following this simple agreement, in addition to making it easier to reuse code, it can also effectively decouple our applications and make it easier for you to track changes in data flow. Moreover, the changes to the model data are gathered in one place. When reading the code, it is easy to understand how the data changes.

## Set Model

The models are divided into **Key Value Model** and **Collection Model**。Previously, the models that we used were all key-value values model, which acts like an object when used.

```js
state.data.foo;
```

Sometimes, we may need need a model in which the primary key is automatically incremented when adding data in a collective manner, somewhat similar to an array:

```js
list.data[700];
```

The common application scenarios of the collection model are various lists, such as the cached video list, the user's draft box list... Next, suppose we are developing a sticky note application and need to store the sticky notes written by the user locally.

Let's create a `NoteList` model：

```js
// create a file /models/noteList.js
import { SyncModels } from 'kurimudb';

// inherit SyncModels.collection to make it a set model
export default new (class NoteList extends SyncModels.collection {
  super({
    name: "NoteList",
  });
})();
```

When using it, the primary key of data created through `insert` method will be auto incremented:

```js
import noteList from '@/models/noteList';

const note1 = noteList.insertItem('This is the content of note 1');
const note2 = noteList.insertItem('This is the content of note 2');
console.log(noteList.data[1]); // echo "This is the content of note 1"
console.log(noteList.data[2]); // echo "This is the content of note 2"

const keys = noteList.bulkInsertItem(['note3', 'note4']);
console.log(keys); // echo ["3", "4"]
```

::: Warning Tips:

- The primary key of the collection model is incremented from `1`, which is different from arrays. This design is for better compatibility with IndexedDB, because IndexedDB starts from `1`.
- In the collection model, deleting any value will not cause the primary key of other values to change. In other words, the keys of the collection model can be regarded as unique and unchanging.

:::

## Model Padding

We may want to pad initial values for some models. For example, we are working on an e-book application, and we hope to specify a default font size, theme, page turning mode for the user when he uses it for the first time...

We can call the `seed` method in the construction method of the model to pad the initial value:

```js {8,9,10,11}
// /models/configState.js
import { SyncModels } from 'kurimudb';

class ConfigState extends SyncModels.keyValue {
  constructor() {
    // ..

    this.seed(() => {
      this.setItem('fontSize', '14px');
      this.setItem('theme', 'default');
      this.setItem('turningMode', 'roll');
    });
  }
}
```

For the **key-value pair model**, you can pass in an object to simplify model padding:

```js
this.seed({
  foo: 'bar',
  baz: 'qux',
});
// equivalent to：
this.seed(() => {
  this.data.foo = 'bar';
  this.data.baz = 'qux';
});
```

For the **collection model**, you can pass in an array to simplify model padding:

```js
this.seed(['foo', 'bar']);
// equivalent to：
this.seed(() => {
  this.insert('foo');
  this.insert('bar');
});
```

By default, every time you run your web page, data will be populated once. If the model is configured with [Storage Drive](/docs/persistence/), then data will only be padded when the user runs your web page for the first time.