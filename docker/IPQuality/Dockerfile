FROM alpine:latest

RUN apk update && apk add \
  bash \
  curl

CMD ["bash", "-c", "echo 'y' | bash <(curl -Ls IP.Check.Place); exit 0"]
