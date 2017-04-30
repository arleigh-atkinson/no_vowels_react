var Answer = React.createClass({
  getInitialState() {
    return {
      value: this.props.answer,
      correctAnswer: this.props.correct_answer
    }
  },

  handleChange(event) {
    this.setState({value: event.target.value});
  },

  handleSubmit(event) {
    this.checkAnswer(this.state.value, this.props.correct_answer)
    event.preventDefault();
  },

  checkAnswer(answer, correctAnswer) {
    if(answer == correctAnswer){
      alert('correct!');
    }
    else {
      alert('incorrect, try again');
      this.setState({value: ""})
    }
  },

  render() {
    return (
      <div className="row">
      <form onSubmit={this.handleSubmit}>
        <label>
          Answer:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
});
