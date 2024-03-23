import React from 'react';
import logo from './person_logo.jpg'; // Assuming logo is in JPG format
import teamImage from './Types-of-software-bugs.jpg'; // Assuming teamImage is in JPG format

function Homepage() {
  return (
    <div>
      {/* Header section */}
      <header style={styles.header}>
        <div style={styles.leftContent}>
          <h1 style={styles.title}>UTIL</h1>
        </div>
        <div>
          <img src={logo} alt="Person Logo" style={styles.logo} />
          <button style={styles.button}>LOGIN</button>
          <button style={styles.button}>SIGNUP</button>
          
        </div>
      </header>

      {/* Content section */}
      <div style={styles.content}>
        <div style={styles.buttonsContainer}>
          <button style={styles.bigButton}>Classify Defects</button>
          <button style={styles.bigButton}>Find Similar Defects</button>
        </div>
        <img src={teamImage} alt="Team Working" style={styles.teamImage} />
      </div>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  },
  leftContent: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '50px',
    marginRight: '15px',
  },
  logo: {
    //alignItems: 'center',
    width: '50px',
    marginLeft: '10px',
    marginRight: '10px',
    paddingTop: '10px',
    
    
  },
  button: {
    //alignItems: 'center',
    marginTop: '10px',
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
    borderRadius: '5px',
    padding: '16px 32px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    
  },
  buttonsContainer: {
    textAlign: 'center',
    marginRight: '20px',
  },
  bigButton: {
    backgroundColor: 'blue',
    color: 'black',
    border: 'none',
    borderRadius: '10px',
    padding: '30px 60px',
    margin: '10px 0',
    fontSize: '24px',
    cursor: 'pointer',
  },
  teamImage: {
    width: '700px',
    height: '500px',
  },
};

export default Homepage;

