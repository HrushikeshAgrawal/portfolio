import React from "react";
import mmFinal from "../assets/imgs/projects/mm_final.png";
import truenoFinal from "../assets/imgs/projects/trueno_final.png";
import catFinal from "../assets/imgs/projects/cat.png";
import blockchainFinal from "../assets/imgs/projects/blockchain.png";
import lifeFinal from "../assets/imgs/projects/life.png";

const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="content">
        <div className="heading">
          <h1>Projects</h1>
          <hr />
        </div>
        <div className="projectList">
          <div className="projectItem revealFromBottom">
            <div className="projectTop">
              <h1>Maker Mela</h1>
              <div className="links">
                {/* <a href="" target="_blank" rel="noreferrer" ><i className="fab fa-github"></i></a> */}
                <a
                  href="https://makermela.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="projectPic">
              <img src={mmFinal} alt="" />
            </div>
            <div className="ptojectTechnologies">
              <p>React JS</p>
              <p>Express JS</p>
              <p>Mongo DB</p>
              <p>Airtable</p>
              <p>AWS - EC2, S3, EBS</p>
            </div>
            <div className="projectDesc">
              Maker Mela is the premier event for grassroot innovations in
              India. It is the celebration of arts, crafts, engineering,
              science, the Do-It-Yourself (DIY) mindset, and the Maker Movement.
              The website is an online portal for the innovators to showcase
              their product by uploading a video along with details of their
              product such as title, description, category, tags, etc. The
              visitors can like, comment and share the videos that they find
              interesting. Leader board for innovators is maintained based on
              these parameters. Live events held online are also accessible
              through the website and notifications for the same are sent to the
              registered visitors. Recommended videos are shown in the side of
              the current video being played.
            </div>
          </div>

          <div className="projectItem revealFromBottom">
            <div className="projectTop">
              <h1>Trueno</h1>
              <div className="links">
                {/* <a href="" target="_blank" rel="noreferrer" ><i className="fab fa-github"></i></a> */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.trueno"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="projectPic">
              <img src={truenoFinal} alt="" />
            </div>
            <div className="ptojectTechnologies">
              <p>React Native</p>
              <p>Express JS</p>
              <p>Mongo DB</p>
              <p>Firebase (OTP)</p>
            </div>
            <div className="projectDesc">
              Trueno is an electric two-wheeler rental platform. The app
              consists of phone number OTP based registration followed by user
              identity verification. The users can rent an EV for any number of
              days. Functions such as starting the EV, stopping the EV, checing
              charging level, tracking path, trips history, etc. can all be done
              directly from the app. The app also gives important alerts for low
              battery and theft alarm.
            </div>
          </div>

          <div className="projectItem revealFromBottom">
            <div className="projectTop">
              <h1>Your Cat Face :D</h1>
              <div className="links">
                <a
                  href="https://github.com/HrushikeshAgrawal/your-cat-face-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://your-cat-face.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="projectPic">
              <img src={catFinal} alt="" />
            </div>
            <div className="ptojectTechnologies">
              <p>JavaScript</p>
              <p>HTML/CSS</p>
              <p>Face API</p>
            </div>
            <div className="projectDesc">
              Ever wondered which cat you look like today? The website detects
              your expressions and shows a cat with the similar expression. Try
              it alone or with your friends as it can detect multiple faces in
              the same file. It is also available as a whatsapp bot along with
              some other features like asking the bot for a random cat pic! To
              access the bot, click{" "}
              <a
                href="https://wa.me/14155238886?text=join%20powder-fairly"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>{" "}
              and send the message 'join powder-fairly'. Type 'help' to get a
              list of commands.
            </div>
          </div>

          <div className="projectItem revealFromBottom">
            <div className="projectTop">
              <h1>Blockchain Auction</h1>
              <div className="links">
                <a
                  href="https://github.com/HrushikeshAgrawal/blockchain-auction"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://blockchain-auction.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="projectPic">
              <img src={blockchainFinal} alt="" />
            </div>
            <div className="ptojectTechnologies">
              <p>Solidity</p>
              <p>Ethereum</p>
              <p>Web3</p>
              <p>Infura</p>
              <p>Ganache</p>
              <p>Truffle</p>
              <p>React JS</p>
              <p>Mocha</p>
            </div>
            <div className="projectDesc">
              A public auction platform which works on the Ethereum Blockchain
              (Rinkeby test network). User can start a new auction with any
              amount of minimum bid. Bidders can bid multiple times. After the
              owner finishes the auction, everyone except the winner gets the
              Ethers back. Winning bid goes to owner.
            </div>
          </div>

          <div className="projectItem revealFromBottom">
            <div className="projectTop">
              <h1>The Game Of Life</h1>
              <div className="links">
                <a
                  href="https://github.com/HrushikeshAgrawal/life"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="http://www.hrushikesh.tk/websites/life"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="projectPic">
              <img src={lifeFinal} alt="" />
            </div>
            <div className="ptojectTechnologies">
              <p>HTML</p>
              <p>CSS</p>
              <p>JS</p>
            </div>
            <div className="projectDesc">
              John Conway's Game of Life (an example of a cellular automaton) is
              played on an infinite two-dimensional rectangular grid of cells.
              Each cell can be either alive or dead. The status of each cell
              changes each turn of the game (also called a generation) depending
              on the statuses of that cell's 8 neighbors. Neighbors of a cell
              are cells that touch that cell, either horizontal, vertical, or
              diagonal from that cell.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
