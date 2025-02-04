# Apache server config using CLI (command Line Interface)

I will present the configs steps i used on my linux server to setup the env i will use to deploy my app.

> [!NOTE]
> This is a basic configuration provided by th linux documentation. This will helps you be familiar with some concepts before diving in
> [Install-and-configure-apache](https://ubuntu.com/tutorials/install-and-configure-apache#1-overview)

## Must already have 🗹

- Your `ssl certificate` and your `private key`. ✔️
- A linux server with its ip address known ✔️
- Your domain must be bought on the same place you bought your server. If not, ask to your provider to transfer it to your your server ✔️
- Make sure ou have the rights with the user you use. Better to do it as a root for the first time

## Steps

- Login to your server

  - write on your terminal: `ssh username@server_ip_address`.

  ```bash
    ssh root@123.65.68.69
  ```

`username` is your username in my case i use `root` as the admin and your server ip address (123.65.68.69 as example)

- Enter your password
- Install git

```bash
sudo apt install git
```

If you want to properly install it, you can read this article about [how-to-setup-git-server-on-ubuntu](https://www.geeksforgeeks.org/how-to-setup-git-server-on-ubuntu/)

- Install apache2 server using this command

```bash
sudo apt update
sudo apt install apache2
```

- Go to the directory `/var/www/`

```bash
 cd /var/www/
```

- clone your project using `git clone git@github.com:CMGGEvolution/template-vue.git`. Replace `git@github.com:CMGGEvolution/template-vue.git` by your ssh url of your github project
- Go to your project and install dependencies safely

```bash
cd template-vue
npm ci
```

- Config the project's directory as a safe one for git

```bash
 git config --global --add safe.directory /var/www/template-vue
```

- Generate services and build project

```bash
npm run generate && npm run build
```

The build will generate either a `dist` or `build` folder depending on your configuration. In our case, it's a `dist` folder.

- Give to apache user the access to the folder that that contains the resource it will serve:

```bash
chown -R www-data:www-data /var/www/template-vue/dist
```

- Give all the rights to the directory generated to be read and write (you can update it and give only the rights needed)

```bash
chmod 777 /var/www/template-vue
```

- Create the virtual host config of our app

```bash
cd /etc/apache2/sites-available/
mkdir template.fr.conf
```

You can change `template.fr` by what you want either your app url (recommended) or just the firstName of your project `template-vue.conf`. But this must end with `.conf` extension.

- Open the file using `vi`

```bash
vi template-vue.conf
```

type `A` on your keyboard for editing it. Paste this configuration using `ctrl+v`

```bash
<VirtualHost *:443>
        # The ServerName directive sets the request scheme, hostname and port that
        # the server uses to identify itself. This is used when creating
        # redirection URLs. In the context of virtual hosts, the ServerName
        # specifies what hostname must appear in the request's Host: header to
        # match this virtual host. For the default virtual host (this file) this
        # value is not decisive as it is used as a last resort host regardless.
        # However, you must set it for any further virtual host explicitly.
        #ServerName www.example.com

        ServerName template-vue.com
        ServerAlias template-vue.fr
        ServerAlias www.template-vue.com
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/template-vue/dist
        <Directory /var/www/template-vue/dist >
            Options Indexes FollowSymLinks MultiViews
            AllowOverride all
                Require all granted
            Order allow,deny
                allow from all

          <IfModule mod_rewrite.c>
            RewriteEngine On
            RewriteBase /
            RewriteRule ^index\.html$ - [L]
            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteCond %{REQUEST_FILENAME} !-d
            RewriteRule . /index.html [L]
           </IfModule>

         </Directory>


        # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
        # error, crit, alert, emerg.
        # It is also possible to configure the loglevel for particular
        # modules, e.g.
        #LogLevel info ssl:warn
Protocols h2 http/1.1
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        # For most configuration files from conf-available/, which are
        # enabled or disabled at a global level, it is possible to
        # include a line for only one particular virtual host. For example the
        # following line enables the CGI configuration for this host only
        # after it has been globally disabled with "a2disconf".
        #Include conf-available/serve-cgi-bin.conf

Include /etc/letsencrypt/options-ssl-apache.conf
SSLCertificateFile /etc/letsencrypt/live/template-vue.com/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/template-vue.com/privkey.pem
</VirtualHost>
</IfModule>
```

After that type `Esc` and write `:wq` and then type `Enter`.

We should have our email in ServerAdmin so users can reach you in case Apache experiences any error:

```bash
ServerAdmin yourname@example.com
```

We also want the DocumentRoot directive to point to the directory our site files are hosted on:

```bash
DocumentRoot var/www/template-vue/dist
```

The default file doesn’t come with a ServerName directive so we’ll have to add and define it by adding this line below the last directive:

```bash
ServerName template-vue.com
```

`ServerAlias` is an alternate names for a host used when matching requests to firstName-virtual hosts

This ensures people reach the right site instead of the default one when they type in `template-vue.com`.

- Setup the ssl and private key
  If you look at the file, you will see a the end the paths defined that mush hold the ssl and private keys:

```bash
SSLCertificateFile /etc/letsencrypt/live/template-vue.com/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/template-vue.com/privkey.pem
```

First we will paste the ssl certificate. Make sure these file are created as well as the `fullchain.pem`. In the `template-vue.com` folder, paste the ssl certificate completely and save it as done above for the virtual host configuration.

Do the same for the private key.

Now that we’re done configuring our site, let’s save and activate it in the next step!
After setting up our website, we need to activate the virtual hosts configuration file to enable it. We do that by running the following command in the configuration file directory (`/etc/apache2/sites-available/`):

```bash
sudo a2ensite template-vue.conf
```

You should see the following output

> Enabling site gci.
> To activate the new configuration, you need to run:
> service apache2 reload

To load the new site, we restart Apache by typing:

```bash
service apache2 reload
```

Restart the server

```bash
 service apache2 restart
```

Bravooooo 🎉🎉🥳🎉🎊!! You made it

## References

- [Install-and-configure-apache](https://ubuntu.com/tutorials/install-and-configure-apache#1-overview)
- [Difference between ServerName and ServerAlias](https://stackoverflow.com/questions/18362166/what-is-the-difference-between-servername-and-serveralias-in-apache2-configurati)
