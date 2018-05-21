"use strict";

const octkit = require('@octokit/rest')();

class Issuer {

  constructor(owner, repo) {
    this._config = {owner, repo};
  }

  find(params) {
    return octkit.issue.getForRepo(Object.assign({}, this._config));
  }

  closedByIssues(issues) {
    const closedIssueTasks = issues.map((issue) => {
      return octkit.issue.edit({
        state: 'closed'
      });
    });
    return Promise.all(closedIssueTasks);
  }
}

const issuer = new Issuer();

const a = async () => {
  await issuer.find();
  await issuer.closedByIssues(issues);
};
