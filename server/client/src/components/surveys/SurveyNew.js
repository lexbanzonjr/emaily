import React, {Component} from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  state = {showFormReview: false};

  renderContent() {
    return (
      <SurveyForm />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;
