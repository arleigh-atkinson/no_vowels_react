class Question extends React.Component({
  getInitialState() {
    return {
      answer: this.props.answer,
      noVowels: this.props.noVowels
    }
  },

  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <h3 className="hidden-sm-up">Answer: {this.state.answer}</h3>
          <h3>{this.props.noVowels}</h3>
        </div>
        <Answer key={this.id} answer="" correct_answer={this.props.answer}/>
      </div>
    );
  }
});
