# Proxy

- [Proxy](#proxy)
  - [Port](#port)
    - [Mac1](#mac1)
    - [Windows](#windows)
  - [Git](#git)
  - [Terminal](#terminal)
  - [npm](#npm)
  - [Scoop](#scoop)

## Port

### Mac1

```js
const [Socks5_Port, HTTP_Port] = [7891, 7890];
```

### Windows

```js
const [Socks5_Port, HTTP_Port] = [7891, 7891];
```

## Git

Command

```shell
git config --global http.proxy 'socks5://127.0.0.1:Socks5_Port'
git config --global https.proxy 'socks5://127.0.0.1:Socks5_Port'
```

Config File

```shell
$HOME/.gitconfig
```

```shell
[http]
  proxy = socks5://127.0.0.1:Socks5_Port
[https]
  proxy = socks5://127.0.0.1:Socks5_Port
```

---

## Terminal

Config File

```shell
$HOME/.zshrc
```

```shell
export all_proxy=socks5://127.0.0.1:Socks5_Port
```

---

## npm

Command

```shell
npm config set proxy http://127.0.0.1:HTTP_Port
npm config set https-proxy http://127.0.0.1:HTTP_Port
```

Config File

```shell
$HOME/.npmrc
```

```shell
proxy=http://127.0.0.1:HTTP_Port/
https-proxy=http://127.0.0.1:HTTP_Port
```

## [Scoop](https://github.com/lukesampson/scoop/wiki/Using-Scoop-behind-a-proxy)

Command

```shell
scoop config proxy 127.0.0.1:HTTP_Port
```

Config File

```shell
$HOME/.config/scoop/config.json
```

```json
{
  "proxy": "127.0.0.1:HTTP_Port"
}
```
