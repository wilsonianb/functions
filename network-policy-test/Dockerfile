FROM openfaas/classic-watchdog:0.18.1 as watchdog

FROM alpine:3.11

RUN mkdir -p /home/app

COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
RUN chmod +x /usr/bin/fwatchdog

# Add non root user
RUN addgroup -S app && adduser app -S -G app
RUN chown app /home/app

WORKDIR /home/app

USER app

# Populate example here - i.e. "cat", "sha512sum" or "node index.js"
ENV fprocess="wget -O - http://echo.openfaas-fn:8080"
# Set to true to see request in function logs
ENV write_debug="true"

EXPOSE 8080

HEALTHCHECK --interval=3s CMD [ -e /tmp/.lock ] || exit 1

CMD while nslookup cert-manager.cert-manager.svc.cluster.local; do echo "no rules"; sleep 1; done && fwatchdog
