import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import useProduct from "../hooks/useIndividualProduct";
import { format } from "date-fns";
import {
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Rating,
  Button,
  CircularProgress,
} from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(AppContext);
  const { product, loading } = useProduct(id, products);
  const navigate = useNavigate();

  if (loading) {
    return <CircularProgress />;
  }

  const { title, description, thumbnail, price, reviews, returnPolicy } =
    product;

  return (
    <Container>
      <Box my={4}>
        <Paper elevation={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/products")}
          >
            Go Back
          </Button>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                alt={title}
                image={thumbnail}
                title={title}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  {description}
                </Typography>
                <Typography variant="h6" component="p" color="primary">
                  Price: £{price}
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  Return Policy: {returnPolicy}
                </Typography>
                <br />
                <Box>
                  <Typography variant="h5" gutterBottom>
                    Customer Reviews
                  </Typography>
                  <List>
                    {reviews.map((review, index) => (
                      <ListItem key={index} alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar>{review.reviewerName.charAt(0)}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" component="span">
                              {review.reviewerName} -{" "}
                              {format(new Date(review.date), "dd MMM yyyy")}
                            </Typography>
                          }
                          secondary={
                            <>
                              <Rating value={review.rating} readOnly />
                              <Typography variant="body2" component="span">
                                {review.comment}
                              </Typography>
                            </>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default ProductDetails;
