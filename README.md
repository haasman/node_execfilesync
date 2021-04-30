# node_execfilesync

Usage:

1. Make sure you are using Python 3.7+ for the Logging tool

2. `node index`

3. Swap out
   ` // var testy = execFile("python3", ["slow.py"]); var testy = execFileSync("python3", ["slow.py"]);`
   and check the test.log output to make sure you get your desired result.

4. I usually delete the log file inbetween tests to make sure I start fresh and zesty.
