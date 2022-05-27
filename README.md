# Simple Auth JWT / Node + TS
Simple project about authentication with JWT using Node + Typescript
<br><br>



## Commands
##### Install and Run
1. **yarn:** install all dependencies
2. **yarn watch:** make typescript look all modifications
3. **yarn up:** get up the Node app, Mongo and Mongo-Express
4. **yarn down:** destroy the containers

_ps: to run the app with Docker, first run 'yarn watch' and then 'yarn up'. It was designed in this way to make Docker faster as possible_

##### Test
1. **yarn test:** test your app
2. **yarn 'test:watch':** mantain your app in stage of test
3. **yarn 'test:watch':** get the coverage of the pile of tests
<br>



## Git usage
The project is setted up with **Husky**, **Github Actions**, **Commitizen** and **Commitlint**.
1. In order to _commit_, just use _git commit_, this will initialize **Commitizen** to help you to make the _commit_ utilizing together the pattern that **Commitlint** need.
2. With **Husky** in the begin of each commit will be run a battery of tests
3. For _pushes_ and _pull_, **Git Hub Actions** will run tests again to make sure that everything work well
