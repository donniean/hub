FROM alpine:latest

RUN apk update && apk add \
  bash \
  curl \
  jq \
  bc \
  netcat-openbsd \
  iproute2

CMD ["bash", "-c", "bash <(curl -Ls IP.Check.Place)"]
