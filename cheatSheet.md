# --- shell & processes ---
ls -la                      # long listing with permissions & owners
grep -R "TODO" .            # recursive search
ps aux | grep node          # find a process
kill -TERM <pid>            # ask a process to stop (SIGKILL = -9)
journalctl -u myapp -f      # follow a systemd service's logs

# --- networking ---
dig +short api.example.com                              # resolve a name to an IP
ss -tlnp                                                # who is listening on which ports
curl -sS -o /dev/null -w "%{http_code}\n" https://x.com # just the HTTP status
nc -zv api.example.com 443                              # test a TCP connect to a port
echo | openssl s_client -connect x.com:443 2>/dev/null \
  | openssl x509 -noout -enddate                        # TLS cert expiry date
sudo tcpdump -n port 443                                # watch packets on the wire