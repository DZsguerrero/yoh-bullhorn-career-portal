# D&Z-Bullhorn Career Portal

**[D&Z-Bullhorn Career Portal](http://www.bullhorn.com)** is the next-generation way to share jobs and source candidates from your Bullhorn ATS/CRM instance. Day & Zimmermann Corporate IT is customizing this Career Portal (Version 1.6) to add additional graphical and color-scheme branded capabilities for their use.

## Credits

Original Bullhorn Career Portal Authors - Kameron Sween and the whole Bullhorn Development Team (**[Bullhorn GitHub](https://github.com/bullhorn/career-portal)**)
Bullhorn Project Manager for Day & Zimmermann/Yoh - Phil Laposa
Day & Zimmermann VP of Software Development - Ed Bender
Day & Zimmermann Manager of SharePoint & Web Development - Chuck Hughson
Day & Zimmermann Web Developers - Bansi Prodductori, Sanford Guerrero


## Building

In order to build D&Z Bullhorn Career Portal, ensure that you have **[Git](http://git-scm.com/downloads)** and **[Node.js](http://nodejs.org)** installed.

Clone a copy of the repo:

```
git clone https://github.com/DZsguerrero/yoh-bullhorn-career-portal.git
```

Change to the Career Portal directory:

```
cd yoh-bullhorn-career-portal
```

Install build tools and dev dependencies:

```
npm install -g bower
npm install -g gulp
npm install
bower install
npm install angulartics
bower install angulartics
bower install angulartics-google-analytics -save
```

Use one of the following to build and test:

```
gulp                 # Build an optimized version of Career Portal in `/dist`
gulp build           # Build an optimized version of Career Portal in `/dist`
gulp serve           # Launch a BrowserSync server on source files, building extensions on changes
gulp serve:dist      # Launch a server on optimized version of Career Portal
gulp test            # Execute unit tests with Karma
gulp test:auto       # Execute unit tests with Karma in watch mode
gulp protractor      # Execute e2e tests with Protractor
gulp protractor:dist # Execute e2e tests with Protractor on build output
```

Running and building with configuration

```
gulp --corpToken='[CORP_TOKEN]' --sl='[SWIMLANE]' --companyName='[COMPANY_NAME]' --liClientId='[LINKED_IN_CLIENT_ID]'
gulp serve --corpToken='[CORP_TOKEN]' --sl='[SWIMLANE]' --companyName='[COMPANY_NAME]' --liClientId='[LINKED_IN_CLIENT_ID]'
```

#### iOS & Safari

Unfortunately, LinkedIn's JS SDK is incompatible with iOS 5+ due to the way that Javascript is paused during cross-window
communication processes. Therefore, the Apply with LinkedIn feature is not supported in that runtime environment. Users will
experience an apply workflow that simply excludes the Apply with LinkedIn capability.


## Runtime vs. Buildtime Configurations

To maximize the flexibility of application configuration, all configuration-level integrations should derive their
dynamic variables from the app.json file. That file can then be loaded into the application. The LinkedIn integration
requires a custom ClientID in order to access the LinkedIn API. This property is defined in the app.json and injected
into the app in the linkedInRun (an ng-run function).

## Helpful Utilities

* **[NPM-Check-Updates](https://github.com/tjunnone/npm-check-updates)** - checks for updates of node modules with CLI
* **[Bower-Check-Updates](https://github.com/se-panfilov/bower-check-updates)** - checks for updates of bower dependencies with CLI
