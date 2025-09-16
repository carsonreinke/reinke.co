---
layout: post
title: Getting PHP Environment Setup Locally On Fedora Linux
tags:
  - howto
---

Recently, I had some issues getting PHP setup installed correctly and wanted to share how I properly accomplished it.  Please note, I have prefered `~/bin` over `/usr/local/bin`.

## PHPBrew ([Link](https://github.com/phpbrew/phpbrew#installation))

Install PHPBrew first:

```shell
curl -L -O https://github.com/phpbrew/phpbrew/releases/latest/download/phpbrew.phar
chmod +x phpbrew.phar
sudo mv phpbrew.phar ~/bin/phpbrew
phpbrew init
```


To finish, PHPBrew must add a snippet to `.bashrc` simply with:

```bash
[[ -e ~/.phpbrew/bashrc ]] && source ~/.phpbrew/bashrc
```


## PHP ([Link](https://github.com/phpbrew/phpbrew#starting-building-your-own-php))

Install a specific PHP version, but some additional options need to be specified: 

```shell
phpbrew --debug install 7.4.5 +default +openssl=/usr -- --with-libdir=lib64
```


<dl>
    <dt><code>+default</code></dt>
    <dd>This will install the default PHP packages along with the core PHP</dd>

    <dt><code>--with-libdir=lib64</code></dt>
    <dd>Most libraries are actually installed under <code>/usr/lib64</code> instead of under <code>/usr/lib</code></dd>

    <dt><code>+openssl=/usr</code></dt>
    <dd>OpenSSL must resolve to the correct path and the default <code>lib64</code> is incorrect</dd>
</dl>

After install, make sure to start using that PHP version with `phpbrew use 7.4.5`.

## Composer ([Link](https://getcomposer.org/download/))

Install Composer by running the PHP installer with the following:

```shell
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '[Long Hash, Get The Real Script From The Site]') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```


To make things easy, add an alias to Composer under `.bashrc`

```bash
alias composer="php ${HOME}/bin/composer.phar"
```


## PHIVE ([Link](https://github.com/phar-io/phive#getting-phive))

Install PHIVE to easily install PHP Archives (Phar)

```shell
wget -O phive.phar "https://phar.io/releases/phive.phar"
wget -O phive.phar.asc "https://phar.io/releases/phive.phar.asc"
gpg --keyserver hkps.pool.sks-keyservers.net --recv-keys 0x9D8A98B29B2D5D79
gpg --verify phive.phar.asc phive.phar
rm phive.phar.asc
chmod +x phive.phar
mv phive.phar ~/bin/phive
```


## PHPUnit ([Link](https://github.com/phar-io/phive#sample-usages))

Install PHPUnit using PHIVE, as this a commonly used dependency that requires to be accessed directly from the shell.

```shell
phive install phpunit
```

