# wad-2021-homework-4

## Setting up the database

So I added all the necessary stuff for the database and here is the guide:

1. You can create a new database or use an existing one (e.g. from lab 13)
2. Right-Click and the database and select `Query Tool...`
3. Copy the content of the file `table.sql` (which you can find in the folder `database_prep`) into the window that opened
4. Run the command by selecting the play button in the toolbar or press `F5`

That create the databse and insert the ten posts from the previous homework.
The next step is to setup the `database.js`

1. Duplicate the file `database_template.js` and rename it to `database.js` or create a new file and copy the content
2. Change the values to your setup (similiar to lab 13):
   1. `password`: Your password
   2. `database`: The name of the database in which you created the table "posts"

Now everything should work perfectly fine!

## Project setup

```batch
npm install
```

### Compiles and hot-reloads for development

```batch
npm run serve
```

### Compiles and minifies for production

```batch
npm run build
```

### Lints and fixes files

```batch
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
