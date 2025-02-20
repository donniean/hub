FROM alpine:latest

RUN apk update && apk add \
  bash \
  curl \
  jq \
  bc \
  netcat-openbsd \
  iproute2

CMD ["bash", "-c", "echo 'y' | bash <(curl -Ls IP.Check.Place)"]
