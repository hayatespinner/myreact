import React from 'react';
import Language from "./Language.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    // stateの定義
    this.state = { name: "おとこ/おんな", count: 0};
  }

  handleClick(name) {
    this.setState({ name: name });
  }

  handleClick2() {
    this.setState({count: this.state.count + 1})
  }

  render() {

    const languageList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
      },
      {
        name: 'Ruby',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg'
      },
      {
        name: 'Ruby on Rails',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg'
      },
      {
        name: 'Python',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg'
      }
    ];

    return (

      <div>

        <div>
          <h1>あなたは、{ this.state.name }です。</h1>
          <button onClick={() => { this.handleClick("おとこ") }}>おとこ</button>
          <button onClick={() => { this.handleClick("おんな") }}>おんな</button>
        </div>

        <div>
          <h1>            
            年齢：{this.state.count}
          </h1>
          <button onClick={() => { this.handleClick2()}}>+1</button>
        </div>

        <div>
          <h1>言語一覧</h1>
          <div className="language">
            {languageList.map((languageItem) => {
              return(
                <Language
                  name = {languageItem.name}
                  image = {languageItem.image}
                />
              )
            })}
          </div>
        </div>

      </div>

    );
  }
}

export default App;
