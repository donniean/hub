# Proxy

- [Proxy](#proxy)
  - [Port](#port)
  - [Git](#git)
  - [Terminal](#terminal)
  - [npm](#npm)
  - [Scoop](#scoop)

## Port

http `7890` (`1087`)  
socks5 `7891` (`1080`)

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
proxy=http://127.0.0.1:7890/
https-proxy=http://127.0.0.1:7890
```

## [Scoop](https://github.com/lukesampson/scoop/wiki/Using-Scoop-behind-a-proxy)

Command

```shell
scoop config proxy 127.0.0.1:7890
```

Config File

```shell
$HOME/.config/scoop/config.json
```

```json
{
  "proxy": "127.0.0.1:7890"
}
```
