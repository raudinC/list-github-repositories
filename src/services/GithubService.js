var GithubRepository = require('./model/GithubRepository');

function GithubService () {};

GithubService.prototype.createWithObject = function (_object) {
    var _repo;

    if (_object && typeof _object === "object") {
        _repo = new GithubRepository();
        _repo.name = _object.name;
        _repo.forks_count = _object.forks_count;
        _repo.language = _object.language;
        _repo.created_at = _object.created_at;
    }

    return _repo;
};

GithubService.prototype.getAllPublicRepositories = function (url) {

    var _this = this;

    if (typeof url == "undefined")
        return Promise.reject({statusText:"Invalid URL"});

    return new Promise(function (resolve, reject) {

        var githubRepositories = [];

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {

            if (this.status >= 200 && this.status < 300) {

                var datas = JSON.parse(xhr.responseText);

                for (var i = 0; i < datas.length; i++) {

                    githubRepositories.push(
                        _this.createWithObject(datas[i])
                    );
                }

                resolve(githubRepositories);
            } else {

                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {

            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
};

module.exports = GithubService;