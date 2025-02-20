FROM alpine:latest

RUN apk update && apk add bash curl jq bc netcat dnsutils iproute

CMD ["bash", "-c", "bash <(curl -Ls IP.Check.Place)"]
