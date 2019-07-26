import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";
import Course from "../components/Course";
import { SPACE_ID, ACCESS_TOKEN } from "./APIkeys";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

export class CourseList extends Component {
  state = {
    courses: [],
    searchString: ""
  };

  constructor() {
    super();
    this.getCourses();
  }

  getCourses() {
    client
      .getEntries({
        content_type: "course",
        query: this.state.searchString
      })
      .then(res => {
        this.setState({
          courses: res.items
        });
      })
      .catch(err => {
        console.log("Error occurred while fetching data");
        console.log(err);
      });
  }

  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getCourses();
  };

  render() {
    return (
      <div>
        {this.state.courses ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for Courses"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.courses.map(currentCourse => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Course course={currentCourse} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No courses found"
        )}
      </div>
    );
  }
}

export default CourseList;
