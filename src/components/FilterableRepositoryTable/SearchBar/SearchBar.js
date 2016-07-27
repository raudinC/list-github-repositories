var React = require('react');

module.exports =  React.createClass({
    handleChange: function() {
        this.props.onUserInput(
            this.refs.filterTextInput.value
        );
    },

    render: function() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Repo"
                        value={this.props.filterText}
                        ref="filterTextInput"
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        );
    }
});