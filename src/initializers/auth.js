'use strict';

const octkit = require('@octokit/rest')();

octkit.authenticate({
  type: 'token',
  token: process.env.GITHUB_TOKEN
});
