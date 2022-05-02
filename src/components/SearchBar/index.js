import React from "react";

class SearchBar extends React.Component {
  state = {
    images: [],
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.images}
            onChange={this.handleChange}
            placeholder="search"
            required
          />
        </form>
        {this.state.images.map((image) => (
          <div>
            <img
              src={image.urls.regular}
              key={image.id}
              alt={image.description}
            />
            <div>{image.alt_description}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchBar;
