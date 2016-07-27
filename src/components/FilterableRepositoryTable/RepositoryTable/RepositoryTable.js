var React = require('react');

var RepositoryRow = require('./RepositoryRow/RepositoryRow');

module.exports = React.createClass({
    render: function() {
        var rows = [];

        //Sort by forks_count
        this.props.repositories.sort(function (a, b) {
            if (a.forks_count < b.forks_count) {
                return 1;
            }
            if (a.forks_count > b.forks_count) {
                return -1;
            }

            return 0;
        });

        this.props.repositories.forEach(function(repository) {
            if (repository.name.indexOf(this.props.filterText) === -1) {
                return;
            }
            rows.push(<RepositoryRow repository={repository} key={repository.name} />);
        }.bind(this));
        return (
            <table className="repositories">
                <tbody>{rows}</tbody>
            </table>
        );
    }
});
