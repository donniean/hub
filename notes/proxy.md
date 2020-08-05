# Proxy

- [Proxy](#proxy)
  - [Port](#port)
    - [ShadowsocksR](#shadowsocksr)
    - [Clash](#clash)
  - [Git](#git)
  - [Terminal](#terminal)
  - [npm](#npm)
  - [Scoop](#scoop)

## Port

### ShadowsocksR

Mac

```js
const [SOCKS5_PORT, HTTP_PORT] = [7890, 7891];
```

Windows

```js
const [SOCKS5_PORT, HTTP_PORT] = [7890, 7890];
```

### Clash

```js
const [SOCKS5_PORT, HTTP_PORT] = [7890, 7890];
```

---

## Git

Command

```shell
git config --global --get http.proxy
git config --global --get https.proxy
```

```shell
git config --global http.proxy 'socks5://127.0.0.1:SOCKS5_PORT'
git config --global https.proxy 'socks5://127.0.0.1:SOCKS5_PORT'
```

```shell
git config --global --unset http.proxy
git config --global --unset https.proxy
```

Config File

```shell
$HOME/.gitconfig
```

```ini
[http]
  proxy = socks5://127.0.0.1:SOCKS5_PORT
[https]
  proxy = socks5://127.0.0.1:SOCKS5_PORT
```

---

## Terminal

Config File

```shell
$HOME/.zshrc
```

```shell
export all_proxy=socks5://127.0.0.1:SOCKS5_PORT
```

---

## npm

Command

```shell
npm config get https-proxy
```

```shell
npm config set proxy http://127.0.0.1:HTTP_PORT
npm config set https-proxy http://127.0.0.1:HTTP_PORT
```

```shell
npm config delete proxy
npm config delete https-proxy
```

Config File

```shell
$HOME/.npmrc
```

```ini
proxy=http://127.0.0.1:HTTP_PORT/
https-proxy=http://127.0.0.1:HTTP_PORT
```

## [Scoop](https://github.com/lukesampson/scoop/wiki/Using-Scoop-behind-a-proxy)

Command

```shell
scoop config proxy
```

```shell
scoop config proxy 127.0.0.1:HTTP_PORT
```

Config File

```shell
$HOME/.config/scoop/config.json
```

```json
{
  "proxy": "127.0.0.1:HTTP_PORT"
}
```
