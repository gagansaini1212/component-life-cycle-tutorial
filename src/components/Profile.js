import React from 'react';

// const Profile = ({ personName }) => (
//   <div>
//     I am 30 years old and my name is {personName}.
//   </div>
// );

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Harsimar' };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Profile componentDidUpdate')
    if (prevProps.personName !== this.props.personName) {
      this.setState({ name: this.props.personName });
    }
  }

  componentWillUnmount() {
    console.log('Profile componentWillUnmount');
  }

  render() {
    const { name } = this.state;
    const { handleUpdateName } = this.props;

    return (
      <div>
        I am 30 years old and my name is {name}.
        <button onClick={() => handleUpdateName('Gagan')}>update my name</button>
      </div>
    );
  }
}

export default Profile;
