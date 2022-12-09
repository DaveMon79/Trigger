import '../Assets/Styles/dashboard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Favourites = (likedPets) => {
  console.log(likedPets)
  return (

    <main style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-evenly' }}>

      <Card style={{ display: "flex", backgroundColor: "#C3965F", width: '26rem', height: "fit-content", margin: "3.5vh", padding: "0 0 3vh 3vh" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ fontSize: "20px", display: "block", width: "100%", textAlign: "start", height: "22px", margin: "1vh" }}>
            <h6 style={{ color: "#f2faf5", fontSize: "20px" }}>OWNER NAME: <span></span></h6>
          </div>

          <div>
            <img style={{
              display: "flex", border: "solid black 1px", width: '10rem', height: "12rem",
              margin: "0.5rem", borderRadius: "10px"
            }} alt="pet" src="/" />
          </div>
          <div style={{ padding: "1rem", textAlign: "start" }}>
            <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "17px" }}>PET NAME: <span></span></h6>
            <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "17px" }}>AGE: <span></span></h6>
            <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "17px" }}>GENDER: <span></span></h6>
            <h6 style={{ color: "#f2faf5", padding: "1vh", fontSize: "17px" }}>LOCATION: <span></span></h6>
          </div>

          <div style={{ textAlign: "start", display: "block", width: "100%", height: "22px", margin: "1vh" }}>
            <Button style={{ backgroundColor: "#72552D", color: "#f2faf5", padding: "1vh", fontSize: "15px", width: "30vh", marginBottom: "1vh" }}
              variant="primary">REMOVE FROM FAVOURITES</Button>
            <Button style={{
              marginLeft: "2vh", width: "18vh", backgroundColor: "#72552D", color: "#f2faf5", padding: "1vh", margin: "0 0 1vh 2vh",
              fontSize: "15px"
            }} variant="primary">MORE INFO</Button>
          </div>

        </div>
      </Card>


    </main>
  );
};

export default Favourites;
