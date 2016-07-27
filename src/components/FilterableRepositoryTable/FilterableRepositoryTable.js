var React = require('react');

var SearchBar = require('./SearchBar/SearchBar');

var RepositoryTable = require('./RepositoryTable/RepositoryTable');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            filterText: ''
        };
    },

    handleUserInput: function(filterText) {
        this.setState({
            filterText: filterText
        });
    },

    render: function() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput}
                />
                <hr/>
                <RepositoryTable
                    repositories={this.props.repositories}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
});