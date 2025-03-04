import FacebookIcon from "../assets/icons/FacebookIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";

const About = () => {
  return (
    <>
      <div className="" style={{ height: "70vh" }}>
        <div className="container">
          <h2 className="mt-5">About Us</h2>
          <hr />
          <div className="row">
            <div className="col-md-7">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, a
                eum ex optio vero, labore nesciunt nostrum vel consequuntur nam
                quisquam fuga? Vel fugiat amet sint atque exercitationem quos
                neque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nemo, a eum ex optio vero, labore nesciunt nostrum vel
                consequuntur nam quisquam fuga? Vel fugiat amet sint atque
                exercitationem quos neque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, a
                eum ex optio vero, labore nesciunt nostrum vel consequuntur nam
                quisquam fuga? Vel fugiat amet sint atque exercitationem quos
                neque.
              </p>
            </div>
            <div className="col-md-5">
              <div className="d-flex flex-column">
                <div className="m-3">
                  <InstagramIcon />
                </div>
                <div className="m-3">
                  <FacebookIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
