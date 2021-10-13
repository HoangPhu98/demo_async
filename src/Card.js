import React from "react";

class Card extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      color: 'blue',
    }
  }

  onChangeColor = (e) => {
    this.setState({
      color: e.target.value
    })
  }

  render() {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',width: 200, height: 200, background: this.props.color }}>
          <input onChange={this.onChangeColor} />
          <button onClick={() => this.props.changeBackground(this.state.color, this.props.id)}>Change color</button>
        </div>
      </>
    );
  }
}

export default Card;
