# Caddy
> [!NOTE]
> This is for setting up HTTPS and some security measures for the web app (See the [instructions](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md) for more details).

- HTTPS is through Port 443
- Can redirect to subdomains within the domain

## Caddy Basic Instructions
HTTPS and TLS are important parts of web security, and as part of the "handshake" that a client and server make to encrypt their data, they involve web certificates. Let'sEncrypt is a non-profit that gives out these certificates, and so we need to set up our server to get one using Caddy.

Caddy has ACME support (the way you get a certificate) built in, so all I need to do is configure Caddy with my URL. This is one of the few manual changes I will make.

- Open a console window (Git Bash for me)
- Use `ssh` to shell into the server (see above)
- Start editing the Caddy file with Vi:
```
cd ~
vi Caddyfile
```
- Replace both `:80` and both instances of `yourdomain` with your actual domain name. (this part was the trickiest, had to figure out Vi)
- Make sure it looks like the following code before finishing (uses myfunkychickens.click as the example):
```
myfunkychickens.click {
   root * /usr/share/caddy
   file_server
   header Cache-Control no-store
   header -etag
   header -server
}


startup.myfunkychickens.click {
   reverse_proxy * localhost:4000
   header Cache-Control no-store
   header -server
   header -etag
   header Access-Control-Allow-Origin *
}

simon.myfunkychickens.click {
   reverse_proxy * localhost:3000
   header Cache-Control no-store
   header -server
   header -etag
   header Access-Control-Allow-Origin *
}
```
- Might have to press `esc`, then save and exit Vi with `:wq`
- Restart the caddy stuff with the following command:
```
sudo service caddy restart
```
- This enables HTTPS on the web server. All done for now!