import React from 'react'
import { useForm } from 'react-hook-form';
import "./Home.css"
import Frame from "./assets/Frame.svg"
import daughter from "./assets/daughter.png"
import family from "./assets/family.png"
import son from "./assets/son.png"
import group from "./assets/travel.png"
import individual from "./assets/delivery-man.png"
import man from "./assets/dad.png"
import women from "./assets/mother.png"
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="cell cell-1">
          <div className="frame">
            <img src={Frame} alt="" />
          </div>
        </div>
        <div className="cell cell-2">
          <p>Get Your Best Travel Travel Insurance</p>
          <form action="">
            <div className="rows">
              <div className="row-1">
                <button>
                  <p>Family</p>
                  <p className="fam">
                    <img src={family} alt="" />
                  </p>
                </button>
                <button>
                  <p>Group</p>
                  <p className="fam">
                    <img src={group} alt="" />
                  </p>
                </button>
                <button>
                  <p>Individual</p>
                  <p className="fam">
                    <img src={individual} alt="" />
                  </p>
                </button>
              </div>
              <div className="row-2">
                <div className="gender">
                  <div className="a">
                    <button>
                      Male{" "}
                      <span>
                        <img src={man} alt="" />
                      </span>
                    </button>
                    <button>
                      Female{" "}
                      <span>
                        <img src={women} alt="" />
                      </span>
                    </button>
                  </div>
                  <div className="details">
                    <div className="demo">
                      <div>Self</div>
                      <div></div>
                      <div>
                        <img src={man} alt="" />
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="demo">
                      <div>Spouse</div>
                      <div></div>
                      <div>
                        <img src={women} alt="" />
                      </div>
                      <div></div>
                      <div></div>
                    </div>

                    <div className="demo">
                      <div>Son</div>
                      <div>
                        <img src={son} alt="" />
                      </div>
                      <div>
                        <button>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>

                    <div className="demo">
                      <div>Daughter</div>
                      <div>
                        <img src={daughter} alt="" />
                      </div>
                      <div>
                        <button>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>

                    <div className="demo">
                      <div>Daughter</div>
                      <div>
                        <img src={daughter} alt="" />
                      </div>
                      <div>
                        <button>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>

                    <div className="demo">
                      <div>Daughter</div>
                      <div>
                        <img src={daughter} alt="" />
                      </div>
                      <div>
                        <button>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>

                    <div className="demo">
                      <div>Daughter</div>
                      <div>
                        <img src={daughter} alt="" />
                      </div>
                      <div>
                        <button>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>

                    <div className="demo">
                      <div>Daughter</div>
                      <div>
                        <img src={daughter} alt="" />
                      </div>
                      <div>
                        <button>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-3">
                <div><button>Proceed</button></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home