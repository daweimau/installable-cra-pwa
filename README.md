## The problem

There are hundreds of example demos, tutorials, and similar, claiming to outline our control over the [PWA install process](https://web.dev/customize-install/).

Almost all of these are broken, outdated, or wrong.

It is worth noting that the official documentation, to this day, refers to an eternally cryptic `user engagement heuristic` as part of the [PWA install criteria](https://web.dev/install-criteria/). In years past this has been described as "the user has been on the domain longer than 30 seconds" or some similar stupid obstacle.

The demo implementation in this project suffers no such restrictions. I don't know what Google will do tomorrow -- they are constantly [changing their plans](https://developer.chrome.com/blog/improved-pwa-offline-detection/), so chances are this project will break at some point, and on that day I will join the litany of bloodied mess that trails in Google's wake with this technology. The project works as at 28 April 2021.

### Partial salvation

MDN has saved my sanity with its [example project](https://github.com/mdn/pwa-examples) that proves this can really be done. This A2HS example is not perfect -- currently, the `Install` button shows on mobile but not desktop. Presumably the sw is having trouble registering on desktop (the button only shows after sw registered). This project was nevertheless a great help.

### This project

An example _CRA_ project with a PWA "installer" button that, as at time of publishing, actually _works_ on desktop AND mobile Chrome.

Note: When serving on local network, you will need to do some light config on test devices: https://stackoverflow.com/a/53388534/9466397

### Setup

1. `npm install`
2. `npm start`
3. Remember you may need to configure the 'unsafe' flags on your test devices. I needed to do this on mobile.
