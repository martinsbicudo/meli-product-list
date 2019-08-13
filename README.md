# Meli - Product List

*Product List using [MercadoLibre](https://api.mercadolibre.com/items#options) public api*

## Stack
- [React](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Sass](https://sass-lang.com/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [Enzyme](https://airbnb.io/enzyme/)
- [Docker](https://www.docker.com/)

## How to use

### Node Version
- This project use `Node` **v10.16.0**
  - **Tip**: You can use [nvm](https://github.com/nvm-sh/nvm) to use correct version
  ```sh
  nvm use
  ```

### Docker Version
- This project use `Docker` **19.03.1**
  - **Tip**: You can use [dvm](https://howtowhale.github.io/dvm/) to use correct version
  ```sh
  dvm use 19.03.1
  ```

### Start Project

Install dependencies

```sh
npm i
```
**OR**
```sh
yarn
```

Run project **with** `Docker`
> Project run at port **80**

```sh
npm run start:docker
```

Run project **without** `Docker`
> Project run at port **3000**

```sh
npm run build
npm start
```
**OR**
```sh
npm run dev
```

Run **StyleGuide** with `Storybook`
> Project run at port **9001**

```sh
npm run storybook
```

### Health Check
> Verify Health of Server, **after run project**

```sh
curl http://localhost:[PORT]/api/health-check
```
