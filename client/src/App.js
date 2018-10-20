// /client/App.js
import React, { Component } from "react";

class App extends Component {
  // initialize our state
  state = {
    data: {}
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    /** 
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
    */
  }

  /** 
  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }
*/

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch("/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data[0] }));
  };

  /*
  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = message => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("/api/putData", {
      id: idToBeAdded,
      message: message
    });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("/api/deleteData", {
      data: {
        id: objIdToDelete
      }
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("/api/updateData", {
      id: objIdToUpdate,
      update: { message: updateToApply }
    });
  };
*/

  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="navbar-brand">Wellcom to Twitter Dashboard</div>
        </nav>
        <div className="jumbotron p-3 p-md-5 text-white bg-warning">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">
              {this.state.data.username}
            </h1>
            <p className="lead my-3">
              received the Nobel Prize in Physics in 1921, but not for
              relativity. His theories of special and general relativity are of
              great importance to many branches of physics and astronomy. They
              have been given experimental confirmation by many experiments and
              observations. Einstein is well known for his theories about light,
              matter, gravity, space, and time. His most well known equation is.
            </p>
            <div className="lead mb-0">
              <div className="text-white font-weight-bold">
                Continue reading bio...
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">
                  # total Twitts
                </strong>
                <h3 className="mb-0">
                  <div className="text-dark">{this.state.data.numtwitts}</div>
                </h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <div>Show statistics and trends...</div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-success">
                  # total Followers
                </strong>
                <h3 className="mb-0">
                  <div className="text-dark">
                    {this.state.data.numfollowers}
                  </div>
                </h3>
                <div className="mb-1 text-muted">Nov 11</div>

                <div>Show statistics and trends...</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-warning">
                  Top 5 Twitts
                </strong>

                <h3 className="mb-0">
                  <div className="text-dark">#1</div>
                </h3>
                <div>{this.state.data.top1twitt}</div>

                <h3 className="mb-0">
                  <div className="text-dark">#2</div>
                </h3>
                <div>{this.state.data.top2twitt}</div>

                <h3 className="mb-0">
                  <div className="text-dark">#3</div>
                </h3>
                <div>{this.state.data.top3twitt}</div>

                <h3 className="mb-0">
                  <div className="text-dark">#4</div>
                </h3>
                <div>{this.state.data.top4twitt}</div>

                <h3 className="mb-0">
                  <div className="text-dark">#5</div>
                </h3>
                <div>{this.state.data.top5twitt}</div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-danger">
                  Top 5 commented
                </strong>

                <h3 className="mb-0">
                  <div className="text-dark">#1</div>
                </h3>
                <div>{this.state.data.top1commented}</div>

                <h3 className="mb-0">
                  <div className="text-dark">#2</div>
                </h3>
                <div>{this.state.data.top2commented}</div>

                <h3 className="mb-0">
                  <div className="text-dark">#3</div>
                </h3>
                <div>{this.state.data.top3commented}</div>

                <h3 className="mb-0">
                  <div className="text-dark">#4</div>
                </h3>
                <div>{this.state.data.top4commented}</div>

                <h3 className="mb-0">
                  <div className="text-dark">#5</div>
                </h3>
                <div>{this.state.data.top5commented}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
