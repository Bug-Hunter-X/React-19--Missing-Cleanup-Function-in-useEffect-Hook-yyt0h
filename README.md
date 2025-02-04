# React 19: Missing Cleanup Function in useEffect Hook

This repository demonstrates a common but subtle bug in React 19 involving the `useEffect` hook.  Specifically, it shows how omitting the cleanup function in `useEffect` can lead to memory leaks or unexpected behavior when the component unmounts.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.  See the files for details.