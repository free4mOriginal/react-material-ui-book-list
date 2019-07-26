import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Course = props => {
  return (
    <div>
      {props.course ? (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: "50%" }}
            image={props.course.fields.courseImage.fields.file.url}
            title={props.course.fields.title}
          />

          <CardContent>
            <Typography variant="h5" padding={20}>
              {props.course.fields.title}
            </Typography>
            <Typography variant="body2" component="p" style={{ textAlign: "left", padding: "20px" }}>
              {props.course.fields.description.content[0].content[0].value}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={props.course.fields.url}
              target="_blank"
            >
              GO TO COURSE
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};

export default Course;
