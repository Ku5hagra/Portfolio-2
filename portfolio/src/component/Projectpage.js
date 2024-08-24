import React from "react";
import { Consumer } from "../Context";
import Projectcard from "./Projectcard";
import { v4 as uuid } from "uuid";
import { JackInTheBox } from "react-awesome-reveal";

export default function Projectpage() {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        return (
          <div className="p-5 container">
            <h1 style={{ color: "black" }} className=" text-center pt-5">
              My <span style={{ color: "purple" }}>projects</span>
            </h1>
            <p className="font-weight-light text-center pb-5">
              This are some of my works
            </p>
            <div className="row">
              {projects.map((project) => (
                <div key={uuid()} className="col-12 col-md-6 pt-2">
                  <JackInTheBox>
                    <Projectcard project={project} />
                  </JackInTheBox>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}
