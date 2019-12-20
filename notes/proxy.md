# Proxy

- [Proxy](#proxy)
  - [Git](#git)
  - [Terminal](#terminal)
  - [npm](#npm)
  - [Scoop](#scoop)

## Git

Command

```shell
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'
```

Config File

```shell
$HOME/.gitconfig
```

```shell
[http]
  proxy = socks5://127.0.0.1:1080
[https]
  proxy = socks5://127.0.0.1:1080
```

---

## Terminal

Config File

```shell
$HOME/.zshrc
```

```shell
export all_proxy=socks5://127.0.0.1:1080
```

---

## npm

Command

```shell
npm config set proxy http://127.0.0.1:1087
npm config set https-proxy http://127.0.0.1:1087
```

Config File

```shell
$HOME/.npmrc
```

```shell
proxy = http://127.0.0.1:1087
https-proxy = http://127.0.0.1:1087
```

## [Scoop](https://github.com/lukesampson/scoop/wiki/Using-Scoop-behind-a-proxy)

Config File

```shell

```

```shell
scoop config proxy 127.0.0.1:1087
```
