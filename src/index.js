var ReactDOM = require('react-dom');

var React = require('react');

var GithubService = require('./services/GithubService');

var FilterableRepositoryTable = require('./components/FilterableRepositoryTable/FilterableRepositoryTable');

var githubService = new GithubService();

githubService.getAllPublicRepositories("https://api.github.com/users/RaudinC/repos")
    .then(function (repositories) {

        ReactDOM.render(
            <FilterableRepositoryTable repositories={repositories} />,
            document.getElementById('app')
        );
    })
    .catch(function (err) {

        console.error('Error:', err.statusText);
    });