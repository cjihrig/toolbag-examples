# toolbag-examples

A collection of toolbag examples. All of the examples are included in subdirectories of the `examples` directory. The README in each example explains how to run that example. Current examples include:

- `borland` - Runs the Borland command interface, which talks to a hapi server over WebSockets. Includes an HTTP reporter, and ability to send signals to toolbag.
- `nsp-check` - Checks an example with known vulnerabilities against the Node Security Project's vulnerabilities database.
- `policy` - Example policy which blacklists use of the `fs` module, `child_process.fork()` method, and `natives` binding.
- `symbol` - Exposes a global symbol to user code. In this example, the user code instructs toolbag to take a heapdump.
- `udp-reporting` - Collects runtime information and reports it over UDP.
