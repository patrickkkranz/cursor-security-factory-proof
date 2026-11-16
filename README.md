# security-scan-probe

Deliberate test fixture for exercising the Cursor security review / vulnerability
"Factory" chain (flag -> verify -> patch).

`src/exec.js` contains an intentional OS command-injection vulnerability in
`ping()`: the `host` argument is concatenated into a shell command passed to
`child_process.exec`. This is here on purpose so the verification and patch
agents have a real, reproducible finding to work on.
