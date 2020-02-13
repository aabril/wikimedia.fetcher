## Notes and changelog

- - 

```thu 13Feb2020 3:55pm``` 

These are Albert Abril personal notes on the exercise, 
I will be adding extra notes and documentation as the implementation evolves.

#### Rule: no frameworks

As on the readme -> instructions -> Number 5, 
this exercise will be completed without using any framework at all, 
using vanilla javascript and no any ui frontend framework (like react, angular or vue).

#### Rule: separate files & modern browsers => ES6

As on the readme -> instructions -> Number 1, 
this exercise will be expected to work in modern browsers as the latests versions of **Chrome Browser** and **Mozilla Firefox**.

As on the readme -> instructions -> Number 7, 
this exercise will be expected to be organised in different files.

My interpretation is that I will be using ES6 modules (import/export).
Most of the modern browsers support ES6 script modules, except Internet Explorer in 13 Feb 2020.

For now just plain static files.
Perhaps as a #ToDo, a bundler will be included (rollup, parcel, webpack or similar), 
and in this case would be minified and bundled for every modern browser, including Internet Explorer.

- - 

```thu 13Feb2020 4:05pm``` 

Basic index.html, style.css and scripts.js files added.

- - 

```thu 13Feb2020 4:13pm``` 

moving markdown files to doc/ and css & js files to src/

- - 

```thu 13Feb2020 4:20pm``` 

Reading wikipedia API documentation

There is two resources that I am interested in: 

1. List of languages available in wikipedia where I can have the values of: language name in multiple languages, wikipedia subdomain
2. Content hierarchy by an article and language


```thu 13Feb2020 4:30pm``` 

1. 
  I am skipping languages for now, and will be adding manually because time deadline. 
  Perhaps later will review and add languages dynamically from the API. #ToDo

2. 
  I can see action=parse is the correct way to retrieve content from articles, 
  and with the prop=sections parameters in particular, the content hierarchy can be fetched as a collection in json, i.e.:
  https://en.wikipedia.org/w/api.php?action=parse&prop=sections&page=esperanto&format=json


```thu 13Feb2020 4:40pm``` 

  Alternatively, the whole content can be retrieved formatted in html and later on I can parse by the DOM elements, (but seems to be a bit hacky, honestly),
  the example endpoint would be from: https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&page=esperanto


```thu 13Feb2020 4:40pm``` 

  Regarding list of languages
  https://en.wikipedia.org/wiki/List_of_language_names

```thu 13Feb2020 4:53pm``` 

  Adding basic structure for languages

- - 

```thu 13Feb2020 4:55pm``` 

adding the first component, 
structured as a **class** with a **html** method, 
considered interesting to treat it as a DOM node and not a template literal string, because later on I will be adding style and eventListeners

```thu 13Feb2020 5:10pm```

script.js now it is imported as a module
and now it is able to split in files to be able to import/export as ES6 modules

```thu 13Feb2020 5:20pm```

to app.component:
* added style (and attach dynamically)
* added eventListener (and attach dynamically)

(ok, since I'm not usign any UI library, perhaps doing from scracth will take a bit more than two hours)
(i'm also documenting as much as i can, doing my best)

```thu 13Feb2020 5:22pm```

adding more documentation to the app.component class

```thu 13Feb2020 5:26pm```

I'm writing now the components: 

form                    form.component.js
  . name input          inputname.component.js
  . lang selector       langselector.component.js
  . submit button       submit.component.js

contents placehold      content.component.js


```thu 13Feb2020 5:29pm```

Also, now I need to figure out how to add children nodes dynamically, 
but I think I know how to, since I did that before. Let's see.


```thu 13Feb2020 5:38pm```

creates a parent component to be extended, to avoid duplicate of code (like the template parser)

```thu 13Feb2020 5:48pm```

adding form dynamically with a <subnode> html tag


```thu 13Feb2020 5:54pm```

Component.init() for cleaning code

```thu 13Feb2020 5:56pm```

Clean

```thu 13Feb2020 6:08pm```

Added form and form-subcomponents which load dynamically, 
by the subnode system created on the constructor. 
pd: perhaps I'm overengineering a little bit, but well, 
a challenge is a challenge and there is not any external lib, 
as a fan of readable code, I'm just being creative.

