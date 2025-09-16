---
layout: post
title: "Fix help default values display by carsonreinke · Pull Request #1309 ·
  tj/commander.js · GitHub"
tags:
  - contrib
summary: "Pull Request ↵  ↵ Problem ↵ Fixes #1283. ↵ Default values for options that
  are not either string or boolean display as JSON encoded string. ↵ An example
  wo…"
---

[Fix help default values display by carsonreinke · Pull Request #1309 · tj/commander.js · GitHub](https://github.com/tj/commander.js/pull/1309)

<blockquote><p>
Pull Request<br><br>Problem<br>Fixes #1283.<br>Default values for options that are not either string or boolean display as JSON encoded string.<br>An example would be using IPv4 from ip-num package produces the following as the default value:<br>(default: {"bitSize":32,"maximumBitSize":"4294967295","type":1,"octets":[{"value":1},{"value":1},{"value":1},{"value":1}],"separator":".","value":"16843009"})<br>This value is not helpful or user friendly.<br><br>Solution<br>Allow for default values that are objects to utilize a custom toString method to display for the help.  The default Object.toString method will not be used.  All other types of default values will continue to use JSON.stringify.<br>NOTE: This did require a signature change of TypeScript typings to communicate that allows for defaultValues to be any instead of just string | boolean.<br><br>ChangeLog<br>N/A
</p></blockquote>
