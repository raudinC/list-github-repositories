var React = require('react');

require('../../../../helper/StringHelper');

module.exports = React.createClass({

    render: function() {
        var name = this.props.repository.name.replaceAll("-", " ");
        name = name.capitalizeFirstLetter(["as", "on"]);

        var date = this.props.repository.created_at.slice(0,10);

        return (
            <tr>
                <td>
                    <p>Name: {name}</p>
                    <p>Fork: {this.props.repository.forks_count}</p>
                    <p>Language: {this.props.repository.language}</p>
                    <p>Created at: {date}</p>
                </td>
            </tr>
        );
    }
});