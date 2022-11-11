# DIW-Proyecto-Gropy

[![Deploy static content to Pages](https://github.com/politecnicoDAW-2022/DIW-Proyecto-Gropy/actions/workflows/staticDeployment.yml/badge.svg)](https://github.com/politecnicoDAW-2022/DIW-Proyecto-Gropy/actions/workflows/staticDeployment.yml)

## Inicializate project

```node
npm install
```

## To upload changes

```bash
#ALWAYS WORK IN A NEW BRANCH LIKE: "name-features" which name is yours
git checkout -b "name-features"

#DO LITLE COMMITS LIKE: feat: upload fonts
git commit -m "feat: ..."

#WHEN YOU WANT TO UPLOAD YOUR CHANGES
git push -u origin branch #branch is replace by your brach
```

📕 [How to do a good commits](https://www.conventionalcommits.org/es/v1.0.0-beta.2/)

Make a **pull request** to the main branch to review and accept the changes, **DON'T ACCEPT BY YOUR SELF**

---

## Sass

This is a quick guide about how to work with Sass in our project.

### What is Sass?

Sass is a CSS pre-procesor that allow us to write CSS in an more structured way and also add new advance functionalities that doesn't exist in CSS by default.

So, the first important thing: **DON'T USE/TOUCH ANY .CSS FILE!!!**

### How to use Sass?

To make Sass works with HTML we need to convert any .scss file to a .css file. To do that, you need to run the following npm script before working with Sass:

```bash
npm run sass
```

This command will be listening to any change in any .scss file and add those changes to the .css file when you save the file, so it's important to keep it running.

In our case, it compile the <ins>main.scss</ins> file to a <ins>style.css</ins>.

### Project folder structure

We will be using a shorter version of [ITCSS](https://dev.to/helleworld_/how-i-use-itcss-to-organize-my-sass-styles-1iec) structuring style.

### Creating new .scss files

There a few rules on how to create and use new .scss files:

-   You need to create the file inside the corresponding folder.
-   All .scss files that we create must start with \_ (Example: \_header.scss)
-   To start applying the styles from your file you need to include it inside the <ins>main.scss</ins> file with the following syntax:

```scss
@use 'sass/02-components/header';
```

-   You can also add other useful files (Example: <ins>\_colors.scss</ins>) in your own files with the same above syntax.

And you're good to go! There are already a few examples in the project, but if you need more info about Sass here you have [their documentation](https://sass-lang.com/documentation/).
