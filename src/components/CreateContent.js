import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form>
          <div>
            ID : <input type="text" />
          </div>
          <div>
            명 : <input type="text" />
          </div>
        </form>
      </article>
    );
  }
}

export default CreateContent;
