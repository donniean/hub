# Proxy

- [Proxy](#proxy)
  - [Git](#git)
  - [Terminal](#terminal)
  - [npm](#npm)
  - [Scoop](#scoop)

http port 7890  
socks5 port 7891

## Git

Command

```shell
git config --global http.proxy 'socks5://127.0.0.1:7891'
git config --global https.proxy 'socks5://127.0.0.1:7891'
```

Config File

```shell
$HOME/.gitconfig
```

```shell
[http]
  proxy = socks5://127.0.0.1:7891
[https]
  proxy = socks5://127.0.0.1:7891
```

---

## Terminal

Config File

```shell
$HOME/.zshrc
```

```shell
export all_proxy=socks5://127.0.0.1:7891
```

---

## npm

Command

```shell
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890
```

Config File

```shell
$HOME/.npmrc
```

```shell
proxy = http://127.0.0.1:7890
https-proxy = http://127.0.0.1:7890
```

## [Scoop](https://github.com/lukesampson/scoop/wiki/Using-Scoop-behind-a-proxy)

Config File

```shell
scoop config proxy 127.0.0.1:7890
```
