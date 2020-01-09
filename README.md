# PoC for Specs Viewer 

https://spilikin.dev/PoC-Specs/

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Push to github pages
```
yarn build
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:spilikin/PoC-Specs.git master:gh-pages
```