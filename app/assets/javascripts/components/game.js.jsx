class Game extends React.Component({
  getInitialState() {
    return {
      countries: this.props.country_pairs
    }
  },

  render() {
    questions = this.state.countries.map(function(country){
      return(
        <Question answer={country[0]} noVowels={country[1]} key={country.id} />
      )
    })
    return(
      <div>
        <div className="row">
          <div className="col-sm-12">
            <h1 className="center">No Vowel Capital/Country Game</h1>
          </div>
        </div>
        {questions}
      </div>
    )
  }
});
